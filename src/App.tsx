import { ErrorInfo } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const errorHandler = (error: Error, info: ErrorInfo) => {
    console.log("Logging", error, info);
  };

  return (
    <div className=''>
      <Layout className='background font-montserrat'>
        <ErrorBoundary FallbackComponent={ErrorPage} onError={errorHandler}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </Layout>
      <div
        className='fixed w-full top-0 left-0 h-screen custom-radial -z-10'
        aria-hidden={true}></div>
    </div>
  );
};

export default App;
