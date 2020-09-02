import { React, ReactDOM } from "./CONST";
import App from "./App";
import "./index.css";
import DiffPage from "./pages/Demo2";

// ReactDOM.render(<DiffPage />, document.getElementById("root"));
ReactDOM.createRoot( document.getElementById("root")).render(<DiffPage />);

console.log("version", React.version); //sy-log
