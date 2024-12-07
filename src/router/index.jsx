import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "../App";
import { Register, Offer } from "../pages";
const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Register />} />
        <Route path="/obuna" element={<Offer />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default index;
