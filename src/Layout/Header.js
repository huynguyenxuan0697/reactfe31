import React from 'react'
import {Nav,NavItem, NavbarBrand,Navbar  } from "reactstrap";
import {Link  } from "react-router-dom";
const Header = () => {
    return (
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand>Elearning</NavbarBrand>
            <Nav className="ml-5" navbar>
                <NavItem>
                    <Link to="/course-list">Danh sách khóa học</Link>
                </NavItem>
                <NavItem className="mx-5">
                    <Link to="/student-list">Danh sách sinh viên</Link>
                </NavItem>
                <NavItem>
                    <Link to="/hook">Demo Hook</Link>
                </NavItem>
            </Nav>
        </Navbar>
        <Navbar color="light" light expand="md">
            <Nav className="container">
                <NavItem >
                    <Link to="/login"className="btn btn-success">Đăng nhập</Link>
                </NavItem>
                <NavItem >
                    <Link to="/signin" className="btn btn-primary">Đăng ký</Link>
                </NavItem>
            </Nav>
        </Navbar>
        </div>
    )
}
export  default Header