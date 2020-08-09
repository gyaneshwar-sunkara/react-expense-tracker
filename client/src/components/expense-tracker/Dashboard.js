import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

import { GlobalContext } from "../../context/GlobalState";

function Auth(props) {
  if (props.auth) {
    return <Redirect to="/" />;
  }
  return null;
}

export default function Dashboard() {
  const { signedIn, signIn } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <Auth auth={!signedIn} />
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </React.Fragment>
  );
}
