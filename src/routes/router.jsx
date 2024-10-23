import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout.jsx";

const App = lazy(() => import("../App"));
const About = lazy(() => import("../Components/About/About.jsx"));
const Projects = lazy(() => import("../Components/Projects/Projects.jsx"));
const ContactForm = lazy(() => import("../Components/Contact/ContactForm.jsx"));
const Skills = lazy(() => import("../Components/Skills/Skills.jsx"));
const ProjectDetails = lazy(() =>
  import("../Components/Projects/ProjectDetails.jsx")
);

const Loading = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/aboutMe",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/contactMe",
        element: <ContactForm />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);

export default router;
