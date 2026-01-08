import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Loader } from "./components/Loader";

import styles from "./App.module.css";
import "./global.css";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage }))
);

const TransactionPage = lazy(() =>
  import("./pages/TransactionPage").then((module) => ({
    default: module.TransactionPage,
  }))
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <div className={styles.app}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/transaction/:id" element={<TransactionPage />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
