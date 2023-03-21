import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import {SERVER_URL} from '../constants.js'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddStudent from './AddStudent';

class Admin extends Component {
  constructor(props) {
      super(props);
      this.state = {
          student_id: null,
          name: '',
          email: '',
          statusCode: -1,
          status: ''
      };
  };

  addStudent = (name, email) => {

      const token = Cookies.get('XSRF-TOKEN');
      
      fetch(`${SERVER_URL}/student?name=${name}&email=${email}`,
          {
              method: 'POST',
              headers: { 'Content-Type': 'application/json',
                  'X-XSRF-TOKEN': token  },
          }).then(res => {
            if(res.ok) {
              toast.success("Student added", {
                position: toast.POSITION.BOTTOM_LEFT
              });
              console.log('Post http status =' + res.status);
              this.setState({name: name, email: email, statusCode: 0, status: null});

            } 
            else {
              toast.error("Error adding student", {
                position: toast.POSITION.BOTTOM_LEFT
              });
              console.error('Post http status =' + res.status);
            }

          }).catch(err => {
            toast.error("Error adding student", {
              position: toast.POSITION.BOTTOM_LEFT
            });
            console.error(err);
          }
      )
  }

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Admin
                        </Typography>
                        <AddStudent addStudent={this.addStudent} /> 
                    </Toolbar>
                </AppBar>
                

                <ToastContainer autoClose={1500} />
            </div>
        );
    }
}

export default Admin;