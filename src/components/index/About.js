import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { AboutWrapper } from "./styles/AboutStyles";

const About = () => {
  const {
    about: { featured_media: about, content: aboutContent },
  } = useStaticQuery(graphql`
    query {
      about: wordpressPage(wordpress_id: { eq: 47 }) {
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      <div className="container-fluid">
        <div className="row">
          <div 
            className="col-md-6 aboutImage"
            style={{
              backgroundImage: `url(${
                about.localFile.childImageSharp.fluid.src
              })`
            }}
          />
          <div className="col-md-6 aboutText">
            <div
              dangerouslySetInnerHTML={{ __html: aboutContent }}
            />
          </div>
        </div>
      </div>
    </AboutWrapper>
  )
};

export default About;
