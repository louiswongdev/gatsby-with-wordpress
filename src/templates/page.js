import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PageSideBar from '../components/page/PageSideBar';
import BreadCrumb from '../components/BreadCrumb';
import PageHero from '../components/PageHero';

const PageContent = styled.article`
  margin: 20px 0 0 0;
`;

// data prop is data returned from our pageQuery below
const PageTemplate = ({ data, pageContext }) => (
  <Layout>
    { data.currentPage.featured_media ? (
      <PageHero
        img={data.currentPage.featured_media.localFile.childImageSharp.fluid}
      />
    ) : null }
    <BreadCrumb parent={data.parent} />
    <div className="container">
      <div className="row" style={{ marginBottom: '40px'}}>
        <PageSideBar 
          parentChildren={data.parentChildren}
          currentPage={data.currentPage}
          parent={data.parent}
        >
          {data.children}
        </PageSideBar>
        <PageContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title}} />
          <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }}/>
        </PageContent>
      </div>
    </div>
  </Layout>
);

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!, $parent: Int!, $wpId: Int!) {  
    currentPage: wordpressPage(id: { eq: $id }) {
      id
      title
      content
      wordpress_parent
      acf {
        education
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    # grab all children of parent (if parent exists)
    # use when we're on a child page and want to show menu on sidebar
    parentChildren: allWordpressPage(
      filter: { wordpress_parent: { eq: $parent } }
    ) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    # on parent page and we want to show some children on the menu
    children: allWordpressPage(filter: { wordpress_parent: { eq: $wpId } }) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    parent: wordpressPage(wordpress_id: { eq: $parent }) {
      title
      link
    }
  }
`;