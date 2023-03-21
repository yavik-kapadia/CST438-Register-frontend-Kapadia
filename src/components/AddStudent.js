import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import { Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogActions } from '@mui/material';
import { TextField } from '@mui/material';


const AddStudent = ({ addStudent }) => {
  const [open, setOpen] = useState(false);
  const [studentname, setStudentName] = useState('');
  const [studentemail, setStudentEmail] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    addStudent(studentname, studentemail);
    handleClose();
  };

  // on


  return (
    <div>
      <Button variant="outlined" color="primary" style={{ margin: 10 }} onClick={handleClickOpen}>
        Add Student
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" onChange={(e) => setStudentName(e.target.value)} />
          <TextField fullWidth label="Email" name="email" onChange={(e) => setStudentEmail(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>Cancel</Button>
          <Button color="primary" onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddStudent;
