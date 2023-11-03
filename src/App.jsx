import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "./todos/Layout";
import TodoList from "./todos/TodoList";
import TodoCreate from "./todos/TodoCreate";
import TodoUpdate from "./todos/TodoUpdate";
import Product from "./components/Product";
import RQproduct from "./components/RQproduct";
import Home from "./components/Home";
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
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                listStyle: "none",
                padding: "20px",
              }}
            >
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
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodoList />} />
            <Route path="/todo/create" element={<TodoCreate />} />
            <Route path="/todo/:id/update" element={<TodoUpdate />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
};

export default App;
