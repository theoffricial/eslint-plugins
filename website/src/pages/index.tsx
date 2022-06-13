import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            src={useBaseUrl('img/eslint-logo.svg')}
            width="200"
            height="200"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            ⚡️ Let's plug you in ⚡️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="An opinionated set of ESLint extensions that will help you spread high-standards">
      <HomepageHeader />
      <main>
      <div className={styles.sectionDark}>
          <div className="container padding-vert--md">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="margin-vert--lg text--center">
                  <h2 className={clsx(styles.sectionDarkTitle, "sectionDarkTitle__h2--primary-darker")}>
                    We're currently working in developed a full infrastructure to set standards for different types of projects
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="padding-vert--xl">
          <p className="container">
            <p className="row">
              <p className="col col--10 col--offset-1">
                <h2 className="text--center margin-bottom--xl">Why?</h2>
                <div className="row margin-vert--lg">
                  <div className="col">
                    <h3>Easy to Use</h3>
                    <p>
                    Our ESLint extensions was designed with the very good user experience in-mind, 
        and focuses on standards while make sure everyone understand why those standards were chosen.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Grow Fast</h3>
                    <p>
                    ESLint makes sure everyone are following standards programmatically, which reduces human errors, 
        improves code quality, and makes code reviews focus on what's matter.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Powered by Community</h3>
                    <p>
                    ESLint is consistently getting <a href='https://www.npmtrends.com/eslint-vs-prettier-vs-tslint'>popularity</a>, We have researched the whole eco-system to find the best 
        recipe we can to help spreading standards that can be easily understood
                    </p>
                  </div>
                </div>
              </p>
            </p>
          </p>
        </p>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
