 import Nav from "./Nav"
 import Home from "./home"
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 export default function App() {
  return (
    <Router>
      <Nav />
      <Home />
    </Router>
  )
}