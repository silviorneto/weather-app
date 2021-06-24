import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCity } from "../../store/modules/getCity/actions";

import AppLogo from "../AppLogo";

import { AppBar, Toolbar, IconButton, InputBase } from "@material-ui/core/";
import { fade, makeStyles } from "@material-ui/core/styles";
import { AiOutlineSearch } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuItems: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {},
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    minWidth: "136px",
    [theme.breakpoints.up("md")]: {
      minWidth: "450px",
    },
  },
}));

export default function AppMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const apiKey = useSelector((state) => state.apiKey);
  const [currentCity, setCurrentCity] = useState("");

  const handleChange = (e) => {
    setCurrentCity(e.target.value);
  };

  const submitCity = (e) => {
    e.preventDefault();

    if (currentCity) {
      dispatch(searchCity(currentCity));
    }

    setCurrentCity("");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menuItems}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <AppLogo />
          </IconButton>

          {apiKey && (
            <>
              <form onSubmit={submitCity}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <AiOutlineSearch />
                  </div>
                  <InputBase
                    onChange={handleChange}
                    value={currentCity}
                    placeholder="Digite uma cidade"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </form>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
