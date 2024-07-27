import { createBrowserRouter } from "react-router-dom";
import { layoutUrl } from "./urls";
import { ErrorBoundaryPage } from "@/components/error/boundary-error";
import { Home } from "@/pages";
import { Layout } from "@/pages/app/Layout";

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
