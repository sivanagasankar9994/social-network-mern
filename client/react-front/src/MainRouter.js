import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Menu from "./core/Menu";
import Profile from "./user/Profile";
import Users from "./user/Users";
import EditProfile from "./user/EditProfile";
import EditPost from "./posts/EditPost";
import PrivateRoute from "./auth/PriviteRoute";
import FindPeople from "./user/FindProfile";
import NewPost from "./posts/NewPost";
import SinglePost from "./posts/SinglePost";
import Admin from "./admin/Admin";

const MainRouter = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/admin" component={Admin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <PrivateRoute exact path="/post/create" component={NewPost} />
      <PrivateRoute exact path="/user/:userId" component={Profile} />
      {/* <PrivateRoute exact path="/post/:postId" component={SinglePost} /> */}
      <Route exact path="/post/:postId" component={SinglePost} />
      <PrivateRoute exact path="/user/edit/:userId" component={EditProfile} />
      <PrivateRoute exact path="/post/edit/:postId" component={EditPost} />
      <PrivateRoute exact path="/findpeople" component={FindPeople} />
    
      <Route exact path="/users" component={Users} />
    </Switch>
  </div>
);

export default MainRouter;
