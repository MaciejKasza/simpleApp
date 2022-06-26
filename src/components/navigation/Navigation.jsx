import React from "react";
import { FcTodoList } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaList,
  FaUserEdit,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavigationStyled } from "./Navigation.styled";
import { useAuth } from "../../contexts/AuthContext";

const Navigation = (props) => {
  const { logout } = useAuth();
  return (
    <NavigationStyled>
      <Link to="/">
        <div className="logo">
          <FcTodoList />
          <h2>APP</h2>
        </div>
      </Link>
      <ul>
        <li className="">
          <NavLink to="/">
            <FaHome />
            <span>Dasboard</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/users">
            <FaUsers />
            <span>Użytkownicy</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/products">
            <FaList />
            <span>Produkty</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/settings">
            <FaUserEdit />
            <span>Ustawienia</span>
          </NavLink>
        </li>
        <li className="">
          <Link to="" onClick={logout}>
            <FaSignOutAlt />
            <span>Wyloguj</span>
          </Link>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
