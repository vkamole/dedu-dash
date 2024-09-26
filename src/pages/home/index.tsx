import React from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import DashboardOverview from "@/components/DashboardOverview";
import Footer from "@/components/Footer";
import Notifications from "@/components/Notifications";
import RecentTransactions from "@/components/RecentTransactions";
import GraphsAndCharts from "@/components/GraphsAndCharts";

const Home = () => {
  return (
    <>
      <Head>
        <title>DeduDash - Home</title>
        <meta name="description" content="Manage your finances with DeduDash" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <DashboardOverview />
        <Notifications />
        <RecentTransactions />
        <GraphsAndCharts />
      </main>

      <Footer />
    </>
  );
};

export default Home;
