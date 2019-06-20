import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const LatestTrendWrapper = styled.div`
  text-align: center;
  margin: 40px 0;
`;

const LatestTrend = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            title
            excerpt
            slug
          }
        }
      }
    }
  `);

  return (
    <LatestTrendWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Latest Trend</h1>
            <h4>{data.allWordpressPost.edges[0].node.title}</h4>
            <div
              // use dangerouslySetInnerHTML here in react since we are using
              // the HTML returned from wordpress editor 
              dangerouslySetInnerHTML={{
                __html: data.allWordpressPost.edges[0].node.excerpt
              }}
            />
            <Link to={`/trends/${data.allWordpressPost.edges[0].node.slug}/`}>
              <p>Read More</p>
            </Link>
          </div>
        </div>
      </div>
    </LatestTrendWrapper>
  )
};

export default LatestTrend;
