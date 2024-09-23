import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { GoogleFonts } from "next-google-fonts";
import styles from "../styles/Home.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Login } from "@mui/icons-material";
import { useState } from "react";
import LoginDialog from "@/components/features/auth/forms/login";

export default function Home() {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const handleLoginButtonClick = () => {
    setOpenLoginDialog(true);
  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" />
      <div className={styles.container} style={{ flexDirection: "column" }}>
        <h1 className={styles.title} style={{ color: "#FFFFFF" }}>
          Welcome to DeduDash!
        </h1>
        <div style={{ marginTop: 20 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLoginButtonClick}
            endIcon={
              <Login
                style={{
                  color: "#000000",
                  alignContent: "center",
                  marginBottom: 1,
                }}
              />
            }
            sx={{
              "&:hover": {
                transform: "translateY(-5px)",
                transition: "transform 0.3s ease",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              },
              borderRadius: 4,
            }}
          >
            CLICK HERE TO LOGIN
          </Button>
        </div>
      </div>
      <LoginDialog open={openLoginDialog} onClose={handleCloseLoginDialog} />
    </>
  );
}
