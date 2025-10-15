import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";

function EmailTemplate({
  customerName,
  contactPerson,
  address,
  phone,
  email,
  orderDate,
  notes,
  doors,
}: {
  customerName: string;
  contactPerson: string;
  address: string;
  phone: string;
  email: string;
  orderDate: string;
  notes: string;
  doors: {
    collection: string;
    finish: string;
    texture: string;
    color: string;
    customColor: string;
    height: string;
    width: string;
    thickness: string;
    quantity: string;
    glassType: string;
    extras: string;
  }[];
}) {
  return (
    <Html>
      <Head>
        <title>VinylPro Doors — New Order</title>
        <style>
          {`
            body {
              margin: 0;
              padding: 0;
              background-color: #f4f6f8;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              color: #111827;
            }
            .container {
              max-width: 700px;
              margin: 24px auto;
              background-color: #ffffff;
              border-radius: 12px;
              box-shadow: 0 8px 24px rgba(0,0,0,0.08);
              overflow: hidden;
            }
            .header {
              background-color: #111827;
              color: #ffffff;
              text-align: center;
              padding: 32px 20px;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
            }
            .header p {
              margin: 6px 0 0;
              font-size: 14px;
              color: #d1d5db;
            }
            .section {
              padding: 24px 28px;
              border-bottom: 1px solid #f3f4f6;
            }
            .section h2 {
              font-size: 18px;
              margin-bottom: 12px;
              color: #111827;
              border-bottom: 2px solid #e5e7eb;
              padding-bottom: 4px;
            }
            .door-card {
              display: flex;
              flex-wrap: wrap;
              gap: 8px 16px;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              padding: 12px 14px;
              margin-bottom: 12px;
              background-color: #fafafa;
            }
            .door-field {
              flex: 1 1 45%;
              font-size: 14px;
              color: #111827;
            }
            .door-field strong {
              display: block;
              color: #374151;
              margin-bottom: 2px;
            }
            @media (max-width: 480px) {
              .door-field {
                flex: 1 1 100%;
              }
            }
            .footer {
              background-color: #f3f4f6;
              text-align: center;
              padding: 20px;
              font-size: 13px;
              color: #6b7280;
            }
          `}
        </style>
      </Head>

      <Body>
        <Container className="container">
          {/* Header */}
          <Section className="header">
            <h1>VinylPro Doors</h1>
            <p>New Door Order from {customerName}</p>
          </Section>

          {/* Customer Info */}
          <Section className="section">
            <h2>Customer Information</h2>
            <p><strong>Customer / Company:</strong> {customerName}</p>
            {contactPerson && <p><strong>Contact Person:</strong> {contactPerson}</p>}
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Email:</strong> {email}</p>
            {orderDate && <p><strong>Order Date:</strong> {orderDate}</p>}
          </Section>

          {/* Ordered Doors */}
          <Section className="section">
            <h2>Ordered Doors</h2>

            {doors.map((door, i) => (
              <div key={i} style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "12px 16px",
                marginBottom: "16px",
                backgroundColor: "#fafafa",
              }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "8px 16px",
                }}>
                  <div style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "6px"
                  }}>
                    <strong>Profile Collection</strong><br />
                    {door.collection || "-"}
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "6px"
                  }}>
                    <strong>Finish Type</strong><br />
                    {door.finish || "-"}
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "6px"
                  }}>
                    <strong>Surface Texture</strong><br />
                    {door.texture || "-"}
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "6px"
                  }}>
                    <strong>Colour / Decor</strong><br />
                    {door.color === "Other" ? door.customColor || "Custom" : door.color || "-"}
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "6px"
                  }}>
                    <strong>Height (mm)</strong><br />
                    {door.height || "-"}
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "6px"
                  }}>
                    <strong>Width (mm)</strong><br />
                    {door.width || "-"}
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "6px"
                  }}>
                    <strong>Thickness (mm)</strong><br />
                    {door.thickness || "-"}
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "6px"
                  }}>
                    <strong>Quantity</strong><br />
                    {door.quantity || "-"}
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "6px"
                  }}>
                    <strong>Glass Type</strong><br />
                    {door.glassType || "-"}
                  </div>

                  <div>
                    <strong>Hardware / Extras</strong><br />
                    {door.extras || "-"}
                  </div>
                </div>
              </div>
            ))}
          </Section>


          {/* Notes */}
          <Section className="section">
            <h2>Additional Notes</h2>
            <Text>{notes || "No additional notes provided."}</Text>
          </Section>

          {/* Footer */}
          <Section className="footer">
            <Text>
              Thank you for choosing <strong>VinylPro Doors</strong>.<br />
              We’ll review your order and contact you with confirmation shortly.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default EmailTemplate;
