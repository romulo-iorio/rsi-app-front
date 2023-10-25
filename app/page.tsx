import { useMemo } from "react";
import Link from "next/link";

import pages from "./routes";
import PageLayout from "./components/PageLayout";

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
