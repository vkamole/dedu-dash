import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";

const RecentTransactions: React.FC = () => {
  const transactions = [
    { id: 1, date: "2024-10-15", description: "Salary Deposit", amount: 5000 },
    { id: 2, date: "2024-10-18", description: "Rent Payment", amount: -1500 },
    { id: 3, date: "2024-10-20", description: "Utilities Bill", amount: -200 },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Transactions
        </Typography>
        <List>
          {transactions.map((transaction) => (
            <ListItem key={transaction.id}>
              <ListItemText
                primary={transaction.description}
                secondary={`${
                  transaction.date
                } - KES ${transaction.amount.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
