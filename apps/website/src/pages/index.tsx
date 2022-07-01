import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img
          className={clsx(styles.heroBannerLogo, "margin-vert--md")}
          src={useBaseUrl("img/eslint-logo.svg")}
          width="200"
          height="200"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            ⚡️ Let's plug you in ⚡️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="An opinionated set of ESLint extensions that will help you spread high-standards"
    >
      <HomepageHeader />
      <main>
        <div className={styles.sectionDark}>
          <div className="container padding-vert--md">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="margin-vert--lg text--center">
                  <h2
                    className={clsx(
                      styles.sectionDarkTitle,
                      "sectionDarkTitle__h2--primary-darker"
                    )}
                  >
                    Spreading standards and enforcing them are essential to build at scale
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
                <h2 className="text--center margin-bottom--xl">Why.</h2>
                <div className="row margin-vert--lg">
                  <div className="col">
                    <h3>Noise Cancelling</h3>
                    <p>
                    When the rules of "how we write code" are clear and are being enforced, we can focus on other decisions and processes
                    </p>
                  </div>
                  <div className="col">
                    <h3>Increasing Trust Unconsciously</h3>
                    <p>
                      In every group or organization, people frequently need to see and feel that the vision is clear. 
                      But not less importantly, people should see that the vision is being implemented professionally in practice.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Supporting Fast Growth</h3>
                    <p>
                      Spreading strong standards,
                      ensures that everyone is less likely to face "dirty" or weird code syntax
                      that adds difficulties to problem solving.
                    </p>
                  </div>
                </div>
                <div className="row margin-vert--lg">
                  <div className="col">
                      <h3>Focus on whats matter for you</h3>
                      <p>
                        Implementing solid conventions from scratch takes time.
                        <br/>
                        We put efforts to make conventions are clearest possible, 
                        by ensuring the end-developer will understand our rules and their messages.
                      </p>
                  </div>
                  <div className="col">
                    <h3>Wide Community</h3>
                    <p>
                    ESLint is consistently gaining &nbsp;
                      <a href="https://www.npmtrends.com/eslint-vs-prettier-vs-tslint">
                        popularity
                      </a>
                      , We have researched the whole eco-system to find the best approach for conventions we can create to help spreading standards that can be easily understood
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
