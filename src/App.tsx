import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const AddSession = lazy(() => import("./pages/AddSession"));
const Details = lazy(() => import("./pages/Details"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path="add" element={<Suspense fallback={<Loading />}><AddSession /></Suspense>} />
          <Route path="session/:id" element={<Suspense fallback={<Loading />}><Details /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
