import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

// Currently not in use

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/eslint-logo.svg").default,
    description: (
      <>
        Our ESLint extensions was designed with the very good user experience
        in-mind, and focuses on standards while make sure everyone understand
        why those standards were chosen.
      </>
    ),
  },
  {
    title: "Standard enables you Grow Fast",
    description: (
      <>
        ESLint makes sure everyone are following standards programmatically,
        which reduces human errors, improves code quality, and makes code
        reviews focus on what's matter.
      </>
    ),
    Svg: require("@site/static/img/eslint-logo.svg").default,
  },
  {
    title: "Powered by Community",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        ESLint is consistently getting{" "}
        <a href="https://www.npmtrends.com/eslint-vs-prettier-vs-tslint">
          popularity
        </a>
        , We have researched the whole eco-system to find the best recipe we can
        to help spreading standards that can be easily understood
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
