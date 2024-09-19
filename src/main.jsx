import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Contact from "./components/Contact.jsx";
import Process from "./components/Process.jsx";

import order from "./assets/images/order.jpg";
import wait from "./assets/images/await.jpg";
import enjoy from "./assets/images/enjoy.jpg";
import about from "./assets/images/about.jpg";
const cardData = [
  {
    title: "Act",
    description: "Choose the plan that works best for you.",
    imageSrc: order,
  },
  {
    title: "Await",
    description: "We are selecting the best coffee for you.",
    imageSrc: wait,
  },
  {
    title: "Enjoy",
    description: "Have coffee delivered right to your doorstep.",
    imageSrc: enjoy,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/process",
        element: <Process title={"Our Process"} cardData={cardData}></Process>,
      },
      {
        path: "/about",
        element: (
          <About
            image={about}
            overlayOpacity={0.7}
            title="About Our Coffee Shop"
            subtitle="Crafted with Love"
            description="We pride ourselves on selecting the finest beans and providing a warm atmosphere for all coffee lovers."
          ></About>
        ),
      },
      {
        path: "/about/:id",
        element: (
          <About
            image={about}
            overlayOpacity={0.7}
            title="About XYZ Coffee Shop"
            subtitle="Crafted with Love"
            description="We pride ourselves on selecting the finest beans and providing a warm atmosphere for all coffee lovers."
          ></About>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
