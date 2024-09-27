import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import AddInfoForm from "@/components/features/auth/forms/addInfo";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const Services = () => {
  // State to control the Dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Head>
        <title>DeduDash - Our Services</title>
        <meta
          name="description"
          content="Explore the range of services DeduDash offers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.servicesSection}>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.description}>
            Explore the range of services offered by DeduDash to help you manage
            your finances efficiently.
          </p>

          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <h3>Adding Financial Info</h3>
              <p>
                Submit your financial details, including salary, deductions, and
                expenses, to get a personalized overview of your finances.
              </p>
              <button className={styles.button} onClick={openDialog}>
                Add Financial Info
              </button>
            </div>

            <div className={styles.serviceItem}>
              <h3>Track Deductions</h3>
              <p>
                Keep a record of your deductions and stay on top of your
                finances with our easy-to-use tracking tools.
              </p>
              <button className={styles.button} disabled>
                Track Deductions (Coming Soon)
              </button>
            </div>

            <div className={styles.serviceItem}>
              <h3>Generate Financial Reports</h3>
              <p>
                Generate detailed reports of your income, deductions, and
                spending to better understand your financial health.
              </p>
              <button className={styles.button} disabled>
                Generate Reports (Coming Soon)
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Dialog for Adding Financial Info */}
      <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth maxWidth="sm">
        <DialogContent>
          <AddInfoForm onClose={closeDialog} />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default Services;