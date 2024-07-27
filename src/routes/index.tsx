import { createBrowserRouter } from "react-router-dom";
import { layoutUrl, signinUrl, signupUrl } from "./urls";
import { Layout } from "../pages/app/Layout";
import { ErrorBoundaryPage } from "../components/error/boundary-error";
import { Home, Signin, Signup } from "../pages";

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        errorElement: (
            <Layout>
                <ErrorBoundaryPage />
            </Layout>
        ),
        children: [
            {
                path: layoutUrl,
                element: <Home />,
            },
            {
                path: signinUrl,
                element: <Signin />,
            },
            {
                path: signupUrl,
                element: <Signup />,
            },
        ],
    },
]);
