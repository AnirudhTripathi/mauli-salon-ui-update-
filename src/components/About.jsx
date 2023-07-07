import React from "react";
import "../styles/About.style.js";
import Img from "../assets/about.jpg";

import {
  AboutContainer,
  AboutUs,
  Main,
  Image,
  AllText,
  Button,
  ButtonContainer,
} from "../styles/About.style.js";
import Footer from "./Footer.jsx";
const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutUs>
          <Main>
            <Image src={Img} alt="" />
            <AllText>
              <h4>About Us</h4>
              <h1>Here is Our team of Mauli Salon n Spa</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                corrupti mollitia accusantium dolorum necessitatibus error,
                deserunt ipsam totam doloremque provident labore quod
                consequatur fugiat? Vitae atque voluptates perspiciatis
                provident libero eaque eius nobis excepturi magnam. Quis quidem
                neque ex a delectus aperiam quo, quos corporis impedit adipisci
                perferendis veritatis quod.
              </p>
              <ButtonContainer>
                <Button>Our Team</Button>
                <Button className="btn2">Show More</Button>
              </ButtonContainer>
            </AllText>
          </Main>
        </AboutUs>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
