import { lazyLoad } from "../utils/loadable";

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const Signup = lazyLoad(
    () => import("./sign-up/Signup"),
    (module) => module.Signup,
);

export const Signin = lazyLoad(
    () => import("./sign-in/Signin"),
    (module) => module.Signin,
);

export const Cart = lazyLoad(
    () => import("./cart/views/Cart"),
    (module) => module.Cart,
);

export const ProductDetail = lazyLoad(
    () => import("./productdetail/views/ProductDetail"),
    (module) => module.ProductDetail,
);
