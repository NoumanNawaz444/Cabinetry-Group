import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";

function EmailTemplate({
  name,
  email,
  phone,
  message,
  service,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}) {
  return (
    <Html>
      <Head>
        <title>Apex Building Services — New Inquiry</title>
        <style>
          {`
            body {
              margin: 0;
              padding: 0;
              background-color: #f8f9fa;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .container {
              max-width: 600px;
              margin: 24px auto;
              background-color: #ffffff;
              border-radius: 12px;
              box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            .header {
              background-color: #dc2626; /* red-600 */
              color: #ffffff;
              text-align: center;
              padding: 28px 20px;
            }
            .header h1 {
              margin: 0;
              font-size: 26px;
              font-weight: 700;
              letter-spacing: 0.5px;
            }
            .header p {
              margin: 6px 0 0;
              font-size: 14px;
              color: #fca5a5; /* lighter red tone */
            }
            .section {
              padding: 24px;
              color: #111827; /* gray-900 */
            }
            .section h2 {
              font-size: 18px;
              margin-bottom: 10px;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 4px;
              color: #dc2626; /* red-600 */
            }
            .section p {
              margin: 6px 0;
              font-size: 15px;
              line-height: 1.6;
            }
            .footer {
              background-color: #f3f4f6;
              text-align: center;
              padding: 16px 20px;
              font-size: 13px;
              color: #6b7280;
            }
          `}
        </style>
      </Head>

      <Body>
        <Container className="container">
          <Section className="header">
            <h1>Apex Building Services</h1>
            <p>New service inquiry from {name}</p>
          </Section>

          <Section className="section">
            <h2>Contact Information</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Service Interested In:</strong> {service}</p>
          </Section>

          <Section className="section">
            <h2>Customer Message</h2>
            <p>{message}</p>
          </Section>

          <Section className="footer">
            <Text>
              Thank you for contacting <strong>Apex Building Services</strong>.
              <br />
              We’ll be in touch shortly to discuss your project and next steps.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default EmailTemplate;
