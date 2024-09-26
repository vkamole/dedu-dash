// components/AddInfoForm.tsx

import { useState } from "react";

interface AddInfoFormProps {
  onClose: () => void;
}

const AddInfoForm: React.FC<AddInfoFormProps> = ({ onClose }) => {
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
      <h2>Add Financial Information</h2>
      <div className="form-group">
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="Enter your salary"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="deductions">Deductions</label>
        <input
          type="number"
          id="deductions"
          name="deductions"
          value={formData.deductions}
          onChange={handleChange}
          placeholder="Enter your deductions"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="expenses">Total Expenses</label>
        <input
          type="number"
          id="expenses"
          name="expenses"
          value={formData.expenses}
          onChange={handleChange}
          placeholder="Enter your total expenses"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddInfoForm;
