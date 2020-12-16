import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

const Success = () => {
  return (
    <Layout>
      <SEO title='You did it!' />
      <section className="success-page">
        <div className="page-center">
          <h2>Your Submission was recieved!</h2>
          <Link to="/" className="btn">Back Home</Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success;
