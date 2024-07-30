import React from 'react';
import styled from 'styled-components'; // Make sure to install this if not already

const Container = styled.div`
  padding: 20px;
  background-color:white;
  background-size: cover;
  color: rgb(30,129,176);
  min-height: 100vh;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: rgb(30,129,176);
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Heading>Privacy Policy</Heading>
      <Paragraph>
        This Privacy Policy describes how your personal information is collected, used, and shared when you use our website or services. 
        We are committed to protecting your privacy and ensuring a safe online experience.
        <br/><br/>
        Information We Collect: We may collect personal information such as your name, email address, phone number, and other details you provide.
        <br/><br/>
        How We Use Your Information: We use your information to improve our services, communicate with you, and provide you with updates and offers.
        <br/><br/>
        Sharing Your Information: We do not share your information with third parties without your consent, except as required by law.
        <br/><br/>
        Security: We take appropriate measures to protect your information from unauthorized access, alteration, or destruction.
        <br/><br/>
        Changes to This Policy: We may update this policy from time to time, and changes will be posted on this page.
        <br/><br/>
        Contact Us: If you have any questions about this policy, please contact us at [your email address].
      </Paragraph>
    </Container>
  );
};

export default PrivacyPolicy;
