import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const AddTransaction = () => {
  const classes = useStyles();

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    setText("");
    setAmount("");
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="tag"
          label="Tag"
          name="tag"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoComplete="text"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="amount"
          label="Amount (+ve for income -ve for expense)"
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          className={classes.submit}
          fullWidth
          variant="contained"
          color="primary"
        >
          Add Transaction
        </Button>
      </form>
    </>
  );
};
