import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Section } from '@react-email/components';

interface UserEmailTemplateProps {
  name: string;
}

const UserEmailTemplate: React.FC<UserEmailTemplateProps> = ({ name }) => {
  return (
    <Html>
      <Head />
      <Preview>Thank You for Your Message!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={logoHeading} className='text-center m-auto'>Visualize design and Build</Text>
          <Section style={headerSection}>
            <Heading style={heading}>Thank You, {name}!</Heading>
            <Text style={subText}>We’ve received your message.</Text>
          </Section>
          <Section style={footerSection}>
            <Text style={footerText}>We will get back to you as soon as possible!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default UserEmailTemplate;

const main = {
  backgroundColor: '#f4f4f4',
  padding: '10px 0',
};

const container = {
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
};

const headerSection = {
  backgroundColor: '#333333',
  padding: '20px',
  textAlign: 'center' as const,
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  color: '#ffffff',
  margin: '0',
};
const logoHeading = {
  backgroundColor: '#808080',
  fontSize: '14px',
  fontWeight: 'bold' as const,
  color: '#ffffff',
  margin: '0',
};

const subText = {
  fontSize: '16px',
  color: '#ffffff',
  margin: '10px 0 0',
};

const footerSection = {
  backgroundColor: '#eaeaea',
  padding: '20px',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '16px',
  color: '#333333',
};
