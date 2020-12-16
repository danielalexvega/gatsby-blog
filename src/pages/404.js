import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title='Our bad' />
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>Sorry, the page you tried cannot be found.</h3>
        <Link to="/" className="btn">
          Back Home.
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage;
