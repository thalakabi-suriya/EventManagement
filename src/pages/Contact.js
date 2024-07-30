import React from 'react';
import styled from 'styled-components'; 

const Container = styled.div`
  padding: 20px;
  background-size: cover;
  color: rgb(30,129,176);
  min-height: 100vh;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subheading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: rgb(30,129,176);
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactDetails = styled.div`
  margin-top: 40px;
`;

const DetailItem = styled.div`
  margin: 10px 0;
`;

const Contact = () => {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Paragraph>
        We are here to assist you with all your event planning needs. Feel free to reach out to us through any of the contact details provided below. Our team is always ready to help you create unforgettable experiences.
      </Paragraph>
      <ContactDetails>
        <Subheading>Contact Information</Subheading>
        <DetailItem>
          <strong>Email:</strong> <a href="mailto:contact@ssreventmanagement.com">contact@ssreventmanagement.com</a>
        </DetailItem>
        <DetailItem>
          <strong>Phone:</strong> +1 (123) 456-7890
        </DetailItem>
        <DetailItem>
          <strong>Office Address:</strong> 123 Event Street, City, State, ZIP Code
        </DetailItem>
        <DetailItem>
          <strong>Customer Support:</strong> +1 (234) 567-8901 (24/7 support)
        </DetailItem>
        <DetailItem>
          <strong>Social Media:</strong> 
          <a href="https://www.facebook.com/ssreventmanagement" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
          <a href="https://twitter.com/ssrevents" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
          <a href="https://www.instagram.com/ssreventmanagement" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </DetailItem>
      </ContactDetails>
    </Container>
  );
};

export default Contact;
