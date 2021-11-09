import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GalleryScreen from "./screens/GalleryScreen";
import BlogScreen from "./screens/BlogScreen";
import BlogdetailScreen from "./screens/BlogdetailScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import CheckoutAddress from "./screens/CheckoutAddress";
import CheckoutPayment from "./screens/CheckoutPayment";
import OrderCompleted from "./screens/OrderCompleted";
import OffersScreen from "./screens/OffersScreen";
import TrackorderScreen from "./screens/TrackorderScreen";
import FoodPreparing from "./screens/FoodPreparing";
import FoodReady from "./screens/FoodReady";
import OrderhistoryScreen from "./screens/OrderhistoryScreen";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/about" component={AboutScreen}></Route>
          <Route path="/contact" component={ContactScreen}></Route>
          <Route path="/checkout" component={CheckoutScreen}></Route>
          <Route path="/checkoutaddress" component={CheckoutAddress}></Route>
          <Route path="/payment" component={CheckoutPayment}></Route>
          <Route path="/ordercompleted" component={OrderCompleted}></Route>
          <Route path="/offer" component={OffersScreen}></Route>
          <Route path="/track" component={TrackorderScreen}></Route>
          <Route path="/preparing" component={FoodPreparing}></Route>
          <Route path="/foodready" component={FoodReady}></Route>
          <Route path="/history" component={OrderhistoryScreen}></Route>
          <Route path="/blog" component={BlogScreen}></Route>
          <Route path="/blogdetail" component={BlogdetailScreen}></Route>
          <Route path="/gallery" component={GalleryScreen}></Route>
          <Route path="/" exact component={HomeScreen}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
