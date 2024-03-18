import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const DashboardOverview: React.FC = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Salary Balance
            </Typography>
            <Typography variant="h4">$5,000</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Income
            </Typography>
            <Typography variant="h4">$8,000</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Deductions
            </Typography>
            <Typography variant="h4">$2,000</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Spending
            </Typography>
            <Typography variant="h4">$3,000</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardOverview;
