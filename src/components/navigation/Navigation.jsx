import React from "react";
import { FcTodoList } from "react-icons/fc";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <FaHome />
            Dasboard
          </Link>
        </li>
        <li className="">
          <Link to="/users">
            <FaUsers />
            Użytkownicy
          </Link>
        </li>
        <li className="">
          <Link to="/products">
            <FaList />
            Produkty
          </Link>
        </li>
        <li className="">
          <Link to="/settings">
            <FaUserEdit />
            Ustawienia
          </Link>
        </li>
        <li className="">
          <Link to="" onClick={logout}>
            <FaSignOutAlt />
            Wyloguj
          </Link>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
