"use client";

import { useMemo } from "react";
import Link from "next/link";

import { PageLayout } from "./components";
import pages from "./routes";

const Home = () => {
  const Pages = useMemo(
    () =>
      pages.map(({ Component, path, name }) => (
        <Link key={path} href={path}>
          <PageLayout title={name}>
            <Component />
          </PageLayout>
        </Link>
      )),
    []
  );

  return <>{Pages}</>;
};

export default Home;
