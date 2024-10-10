import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <>
      <nav >
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center", backgroundColor:"#5235a88f", color:"white"}}>
          <a  href="/users" style={{fontSize:"xx-large", fontFamily:"fantasy"}}>
            Back Office Pannel
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span ></span>
          </button>
          <div  id="navbarNavAltMarkup" style={{display:"flex", flexDirection:"row"}}>
            <div class="navbar-nav" style={{display:"flex", flexDirection:"row"}}>
              <Button
                color="black"
                sx={{ textTransform: "capitalize" }}
                component={Link}
                to="/users"
                style={{fontSize:"large", fontFamily:"cursive"}}
              >
                Users
              </Button>
              <Button
                color="black"
                sx={{ textTransform: "capitalize" }}
                component={Link}
                to="/task-lists"
                style={{fontSize:"large", fontFamily:"cursive"}}
              >
                Task Lists
              </Button>
              <Button
                color="black"
                sx={{ textTransform: "capitalize" }}
                component={Link}
                to="/tasks"
                style={{fontSize:"large", fontFamily:"cursive"}}
              >
                Tasks
              </Button>
              <Button
                color="black"
                sx={{ textTransform: "capitalize" }}
                component={Link}
                onClick={onLogout}
                style={{fontSize:"large", fontWeight:"bold", fontFamily:"cursive"}}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;