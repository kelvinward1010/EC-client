import { createBrowserRouter } from "react-router-dom";
import {
    cartUrl,
    layoutUrl,
    processUrl,
    productdetailUrl,
    searchUrl,
    signinUrl,
    signupUrl,
} from "./urls";
import { Layout } from "../pages/app/Layout";
import { ErrorBoundaryPage } from "../components/error/boundary-error";
import {
    Cart,
    Home,
    ProcessingBuy,
    ProductDetail,
    Search,
    Signin,
    Signup,
} from "../pages";

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
            {
                path: cartUrl,
                element: <Cart />,
            },
            {
                path: processUrl,
                element: <ProcessingBuy />,
            },
            {
                path: productdetailUrl,
                element: <ProductDetail />,
            },
            {
                path: searchUrl,
                element: <Search />,
            },
        ],
    },
]);
