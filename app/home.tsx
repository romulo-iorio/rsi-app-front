"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useMemo } from "react";

import type { RouteProps } from "./routes";
import { PageLayout } from "./components";
import pages from "./routes";

import "react-toastify/dist/ReactToastify.css";

const PageWrapper: React.FC<RouteProps> = ({
  isPrivate,
  Component,
  name,
  path,
}) => {
  return (
    <Route
      path={path}
      key={path}
      element={
        <PageLayout title={name} isPrivate={isPrivate}>
          <Component />
        </PageLayout>
      }
    />
  );
};

const Home = () => {
  const Pages = useMemo(() => pages.map(PageWrapper), []);

  return (
    <>
      <BrowserRouter>
        <Routes>{Pages}</Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};

export default Home;
