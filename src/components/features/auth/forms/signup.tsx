import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Avatar, Box, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

interface SignupDialogProps {
  open: boolean;
  onClose: () => void;
}

const SignupDialog: React.FC<SignupDialogProps> = ({ open, onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignup = () => {
    // Add your signup logic here
    console.log(
      "Signing up with username:",
      username,
      "email:",
      email,
      "and password:",
      password
    );
    // Close the dialog after signup attempt
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "primary.main", mb: 1 }}>
            <PersonAddIcon />
          </Avatar>
          <Typography variant="h6">Create a new account</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Username"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSignup} variant="contained" color="primary">
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignupDialog;
