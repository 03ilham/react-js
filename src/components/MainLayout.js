import React from "react";
import styled from "styled-components";
import Footers from "./layout/Footers";
import Headers from "./layout/Headers";
import Main from "./layout/Main";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "../pages/Home";
import Counter03 from "./Counter03"
import Todo from "../pages/Todo";
import Productlist from "./ParentChild/ProductList"
import ProductRedux from "../pages/ProductRedux";
import FoodList from "../latihan/FoodList";
import SignIn from "./sigin/SignIn";
import VillaList from "../latihan/VillaList.js";

const MainSidebar = styled.div`
  display: grid;
  margin: 1rem auto;
  grid-template-columns: 180px 2fr;
  grid-template-areas:  "aside main main";

  aside{
      grid-area: aside;
  }


  main {
    grid-area: main;
  }
`;

export default function MainLayout() {
  return (
    <BrowserRouter>
      <Headers />
      <Navbar />
      <MainSidebar>
        <Sidebar />
        <Main>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/counter" component={Counter03}/>
                <Route exact path="/product" component={FoodList}/>
                <Route exact path="/todo" component={VillaList}/>
                <Route exact path="/redux" component={ProductRedux}/>
            </Switch>
        </Main>
      </MainSidebar>
      <Footers />
    </BrowserRouter>
  );
}
