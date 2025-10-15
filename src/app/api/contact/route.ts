import EmailTemplate from "../../../../emails/EmailTemplate";
import { Resend } from "resend";
import UserEmailTemplate from "../../../../emails/UserEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, message, service } = await request.json(); // Destructure 'service'

  // Set your email address here
  const yourEmail = "apexbuildingservices16@gmail.com"; // Replace with your email address

  try {
    // Send email to yourself
    const { data, error } = await resend.emails.send(
      {
        from: "Email Inquiry <info@apexbuildingservices.info>",
        to: [`${yourEmail}`], // Send to your email address
        subject: `Form Submission : ${name}`,
        react: EmailTemplate({ name, email, phone, message, service }), // Include 'service' in the email
      }
    );

    if (error) {
      console.log(error.message);

      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
