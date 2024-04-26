import "./App.css";
import Web from "./components/Navbar";
import Slider from "./components/Slider";
import Cards from "./components/cards";
import Des from "./components/Des";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Products from "./components/Products";
 import Dom from "./components/Dom";
import Effect from "./components/Effect";
import Addition from "./components/Addition";
import Memo from "./components/Memo";
import Provider from "./components/Provider";
import Fake from "./components/Fake";
import ListApp from "./components/ListApp";
import Quotes from "./components/Quotes";
import Weather from "./components/Weather";
 
import {
  BrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  redirect,
} from "react-router-dom";
import { useState } from "react";
import TodoApp from "./components/Todo";
import Nav from "./components/Navbar";
import Task from "./components/Task";
import Home from "./components/Home";
import BasicTextFields from "./components/BasicTextFields.js";
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";
import Applications from "./components/Applications.js";
  
function App() {
   
  return (
    <div>
      
      <BrowserRouter>
        
        <Routes>
          <Route element= {<TodoApp />} path="/todo"/> 
          <Route element= {<Form />} path="/form"/>
           <Route element = {<Weather/>} path="/WeatherApp"/>
          <Route element = {<Slider/>} path="/ShopCart"/>
          <Route element = {<Task/>} path="/Cart"/>
          <Route element = {<Home/>} path="/home"/>
          <Route element = {<BasicTextFields/>} path="/muiform"/>
          <Route element = {<ResponsiveAppBar/>} path="/portfolio"/>
          <Route element={<Applications/>} path="/" />
        </Routes>
      </BrowserRouter>
    
    </div>

  );
}

export default App;
