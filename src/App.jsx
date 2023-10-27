import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import RQproduct from "./components/RQproduct";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQProductID from "./components/RQProductID";
import ParallelQuery from "./components/ParallelQuery";
import DynamicParallelQuery from "./components/DynamicParallelQuery";
import DependentQueries from "./components/DependentQueries";

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
              <li>
                <Link to="/parallel">RQ parallel</Link>
              </li>
              <li>
                <Link to="/dy-parallel">RQ Dynamic parallel</Link>
              </li>
              <li>
                <Link to="/rq-dependent">RQ Dependent</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/rq-product" element={<Outlet />}>
              <Route index element={<RQproduct />} />
              <Route path=":ID" element={<RQProductID />} />
            </Route>
            <Route path="/parallel" element={<ParallelQuery />} />
            <Route
              path="/dy-parallel"
              element={<DynamicParallelQuery heroIds={[1, 2]} />}
            />
            <Route
              path="/rq-dependent"
              element={<DependentQueries email="medo@gmail.com" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
};

export default App;
