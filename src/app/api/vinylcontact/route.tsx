import EmailTemplate from "../../../../emails/VinylEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {
    customerName,
    contactPerson,
    address,
    phone,
    email,
    orderDate,
    notes,
    doors,
  } = await request.json();

  const yourEmail = "gdch22910@gmail.com"; // Replace with your actual email

  try {
    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "VinylPro Orders <onboarding@resend.dev>",
      to: [yourEmail],
      subject: `New Door Order from ${customerName}`,
      react: EmailTemplate({
        customerName,
        contactPerson,
        address,
        phone,
        email,
        orderDate,
        notes,
        doors,
      }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
