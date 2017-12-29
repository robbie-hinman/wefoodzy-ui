import React from "react";
import Footer from "../Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import "./App.css";

const App = ({ params }) => (
  <div className="appContainer">
    <AddTodo />
    <VisibleTodoList filter={params.filter || "all"} />
    <Footer />
  </div>
);

export default App;
