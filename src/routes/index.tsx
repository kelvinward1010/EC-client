import { createBrowserRouter } from "react-router-dom";
import { layoutUrl } from "./urls";
import { Layout } from "../pages/app/Layout";
import { ErrorBoundaryPage } from "../components/error/boundary-error";
import { Home } from "../pages";

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
        ],
    },
]);
