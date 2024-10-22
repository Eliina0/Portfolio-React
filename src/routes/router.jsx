import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import About from "../Components/About/About.jsx";
import Projects from "../Components/Projects/Projects.jsx";
import ContactForm from "../Components/Contact/ContactForm.jsx";
import Skills from "../Components/Skills/Skills.jsx";
import Layout from "./Layout.jsx";
import ProjectDetails from "../Components/Projects/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
