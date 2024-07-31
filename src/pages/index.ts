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

export const ProcessingBuy = lazyLoad(
    () => import("./cart/views/ProcessingBuy"),
    (module) => module.ProcessingBuy,
);

export const ProductDetail = lazyLoad(
    () => import("./productdetail/views/ProductDetail"),
    (module) => module.ProductDetail,
);

export const Search = lazyLoad(
    () => import("./search/views/Search"),
    (module) => module.Search,
);

export const Setting = lazyLoad(
    () => import("./setting/views/Setting"),
    (module) => module.Setting,
);

export const YourOrder = lazyLoad(
    () => import("./yourorder/views/YourOrder"),
    (module) => module.YourOrder,
);
