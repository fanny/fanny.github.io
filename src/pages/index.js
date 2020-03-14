import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const Home = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={siteConfig.title}
    }>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img
            src="https://i.imgur.com/QMznITd.jpg4"
            alt="Profile"
            style={{
              borderRadius: '50%',
              maxWidth: 100,
            }}
          />
          <h2 className="hero__title">{siteConfig.title}</h2>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
