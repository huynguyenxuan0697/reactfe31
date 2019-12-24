import React,{Fragment} from 'react';
import Header from './Layout/Header';
import BaiTapLayout from './components/BaiTapLayout';
import Databinding from './Databinding/Databinding';
import DatabindingClass from './Databinding/DatabindingClass';
import BtCar from './Databinding/btCar';
import BtVongLap from './Databinding/BtVongLap';
import Phim from './components/Phim';
import BaiTapSanPham from './Props/BaiTapSanPham';

import QuanLySinhVien from './QuanLySinhVienRedux/QuanLySinhVien';
import Burger from './Burger/Burger';
import DemoClass, { DemoHooks } from './Hooks/DemoHooks';
import  QuanLyKhoaHoc  from './Elearning/QuanLyKhoaHoc';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import PageNotFound from './Layout/PageNotFound';
import ChiTietKhoaHoc from './Elearning/ChiTietKhoaHoc';
import SignIn from './Elearning/SignIn';
import Login from './Elearning/Login';
function App() {
  const greeting = "HELLO!!!";
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>        
          <Switch>
            <Route path="/course-list" component={QuanLyKhoaHoc}/>
            <Route path="/student-list" component={QuanLySinhVien}/>
            <Route path="/hook" component={DemoHooks}/>
            <Route path="/chitiet/:makh" component={ChiTietKhoaHoc}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/login" component={Login}/>
            <Route path="/" component={PageNotFound}/>
          </Switch>        
      </BrowserRouter>
      {/* <BaiTapLayout greetingProp={greeting}/> */}
      {/* 
      <Databinding/> */}
      {/* <DatabindingClass/> */}
      {/* <BtCar/> */}
      {/* <BtVongLap/> */}
      {/* <Phim/> */}
      {/* <BaiTapSanPham/> */}
      {/* <Test/> */}
      {/* <Burger/> */}
      {/* <DemoClass/>
      <DemoHooks/> */}
      {/* <QuanLySinhVien/> */}
    
    </div>
  );
}

export default App;
