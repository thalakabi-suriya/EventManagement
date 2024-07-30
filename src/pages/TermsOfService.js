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

const TermsOfService = () => {
  return (
    <Container>
      <Heading>Terms of Service</Heading>
      <Paragraph>
        Welcome to our website. By using our services, you agree to the following terms and conditions. 
        Please read them carefully before using our services.
        <br/><br/>
        Acceptance of Terms: By accessing or using our services, you agree to comply with and be bound by these Terms of Service.
        <br/><br/>
        Use of Services: You agree to use our services only for lawful purposes and in accordance with these terms.
        <br/><br/>
        User Responsibilities: You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
        <br/><br/>
        Limitation of Liability: We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.
        <br/><br/>
        Changes to Terms: We may update these terms from time to time. Changes will be posted on this page, and continued use of the services constitutes acceptance of the updated terms.
        <br/><br/>
        Contact Us: If you have any questions or concerns about these terms, please contact us at [your email address].
      </Paragraph>
    </Container>
  );
};

export default TermsOfService;
