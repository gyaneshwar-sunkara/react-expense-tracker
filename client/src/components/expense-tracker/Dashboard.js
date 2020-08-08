import React from "react";
import { Header } from "./components/expense-tracker/Header";
import { Balance } from "./components/expense-tracker/Balance";
import { IncomeExpenses } from "./components/expense-tracker/IncomeExpenses";
import { TransactionList } from "./components/expense-tracker/TransactionList";
import { AddTransaction } from "./components/expense-tracker/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

export default function Dashboard() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
