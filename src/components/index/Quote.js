import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import quoteimg from "../../images/tango_citat.svg";
import { QuoteWrapper } from "./styles/QuoteStyles";

const Quote = () => {
  const {
    quote: { acf: quote},
  }
  = useStaticQuery(graphql`
    query {
      quote: wordpressPage(wordpress_id: { eq: 47 }) {
        acf {
          citat_1_text
          citat_1_author
        }
      }
    }
  `);

  return (
    <QuoteWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={quoteimg} alt="quote"/>
            <h6>{quote.citat_1_text}</h6>
            <p className="tango-thin-text tango-text-white">{quote.citat_1_author}</p>
          </div>
        </div>
      </div>
    </QuoteWrapper>
  )
}

export default Quote;
