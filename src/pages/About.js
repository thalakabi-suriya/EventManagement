import React from 'react';
import styled from 'styled-components'; 

const Container = styled.div`
  padding: 40px;
  background-size: cover;
  color: rgb(30,129,176);
  min-height: 100vh;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Subheading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Paragraph = styled.p`
  color: rgb(30,129,176);
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const About = () => {
  return (
    <Container>
      <Heading>About Us</Heading>
      <Subheading>Transforming Visions into Reality</Subheading>
      <Paragraph>
        At <strong>SSR Event Management</strong>, we are passionate about turning your vision into a memorable experience. With a team of dedicated professionals, we strive to offer unparalleled service in the realm of event planning and management.
        <br/><br/>
        Whether it’s a grand corporate gala, an intimate wedding, a dynamic conference, or a private gathering, we cater to all your event needs with precision and flair. Our expertise spans across venue selection, meticulous event design, exquisite catering, and engaging entertainment. 
        <br/><br/>
        Our mission is to ensure that every detail is seamlessly handled, providing you with a stress-free planning process and an extraordinary event. We take pride in working closely with you to understand your unique requirements and deliver a bespoke experience that exceeds your expectations.
        <br/><br/>
        Thank you for considering <strong>SSR Event Management</strong>. We look forward to crafting an exceptional event that you and your guests will remember for years to come.
      </Paragraph>
    </Container>
  );
};

export default About;
