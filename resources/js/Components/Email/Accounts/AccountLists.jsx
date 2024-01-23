import React from "react";
import Account from "@/Components/Email/Accounts/Account.jsx";

const AccountLists = ({ accounts }) => {
    return (
        accounts.map((account, index) => (
            <Account key={index} account={account} />
        ))
    );
}

export default AccountLists;
