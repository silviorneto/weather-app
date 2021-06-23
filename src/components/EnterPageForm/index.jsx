import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAPIKey } from "../../store/modules/getAPIKey/actions";
import { getAPIKeyThunk } from "../../store/modules/getAPIKey/thunks";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";
import { Error } from "./styles";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "75%",
    maxWidth: "400px",
    height: "35vh",
    margin: " 2vh auto",
    textAlign: "center",
  },
  title: {
    margin: "0 0 1.5vh",
  },
  button: {
    display: "block",
    margin: "2vh auto",
  },
  smallText: {
    width: "75%",
    margin: "0 auto",
  },
}));

export default function EnterPageForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [key, setKey] = useState("");
  const [keyError, setKeyError] = useState(false);

  const submitKey = (e) => {
    e.preventDefault();

    if (key && key.length === 32) {
      setKeyError(false);
      dispatch(getAPIKeyThunk(key));
      history.push("/");
    } else {
      setKeyError(true);
    }

    console.log(keyError, key);
  };

  const funcTest = (key) => {
    setKey(key);
    console.log(key);
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <h2 className={classes.title}>Insira a sua API Key abaixo</h2>
      <form onSubmit={submitKey}>
        <TextField
          onChange={(e) => funcTest(e.target.value)}
          required
          id="standard-required"
          label="API Key"
          defaultValue=""
        />

        {keyError && <Error>Favor informar uma chave válida</Error>}

        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Enviar
        </Button>
      </form>

      <p className={classes.smallText}>
        <small>
          Caso não possua uma API Key, siga as instruções neste{" "}
          <a
            href="https://openweathermap.org/appid"
            rel="noopener"
            target="__blank"
          >
            link
          </a>
          .
        </small>
      </p>
    </Paper>
  );
}
