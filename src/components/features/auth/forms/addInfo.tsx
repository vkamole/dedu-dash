import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface AddInfoFormProps {
  onClose: () => void;
}

const AddInfoForm = ({ onClose }: AddInfoFormProps) => {
  const [formData, setFormData] = useState({
    salary: "",
    deductions: "",
    expenses: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose(); // Close the modal after submission
    // Handle your data submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle>
        <Typography variant="h6" component="div">
          Add Financial Information
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Salary"
            variant="outlined"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Enter your salary"
            type="number"
            fullWidth
            required
          />
          <TextField
            label="Deductions"
            variant="outlined"
            name="deductions"
            value={formData.deductions}
            onChange={handleChange}
            placeholder="Enter your deductions"
            type="number"
            fullWidth
            required
          />
          <TextField
            label="Total Expenses"
            variant="outlined"
            name="expenses"
            value={formData.expenses}
            onChange={handleChange}
            placeholder="Enter your total expenses"
            type="number"
            fullWidth
            required
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </form>
  );
};

export default AddInfoForm;
