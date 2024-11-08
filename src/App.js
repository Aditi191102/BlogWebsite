import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {

  const {fetchBlog} = useContext(AppContext);

  useEffect(()=>{
    fetchBlog();
  },[]);

  return (<div>
    <Header/>
    <Blogs/>
    <Footer/>
  </div>);
}
