import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import RQproduct from "./components/RQproduct";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQProductID from "./components/RQProductID";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/rq-product">RQ Product</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/rq-product" element={<Outlet />}>
              <Route index element={<RQproduct />} />
              <Route path=":ID" element={<RQProductID />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
};

export default App;
