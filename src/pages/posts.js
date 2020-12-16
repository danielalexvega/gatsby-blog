import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';
import Posts from '../components/Posts';
import SEO from '../components/SEO';

const PostsPage = ({ data }) => {
  const { allMdx: { nodes: posts } } = data;

  return (
    <Layout>
      <SEO title='Posts' />
      <Hero />
      <Posts posts={posts} title="all posts" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        frontmatter {
          author
          category
          slug
          title
          date(formatString: "MMMM Do, YYYY")
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default PostsPage;
