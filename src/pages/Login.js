import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { externalApi, config } from "./../utils/utils.js"
import { useHistory } from 'react-router-dom';

const SignInSide = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.username) errors.username = 'username harus diisi!';
    if (!formData.password) errors.password ='password! harus diisi!';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    axios.post(externalApi()+'/api/login', formData, config())
      .then(response => {
        localStorage.setItem('token', response.data.data.token);

        const token = localStorage.getItem('token');
        if(token) {
          axios.get(externalApi()+'/api/check-login', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then(response => {
            console.log("1")
            localStorage.setItem('dataLogin', JSON.stringify(response.data.data));
            history.push('/admin/dashboard')
          })
          .catch(error => {
            console.log("2")
            history.push('/login');
          })
          .finally(() => {
            setLoading(false);
          });
        }else{
          console.log("3")
          history.push('/login');
        }
      })
      .catch(error => window.alert(error.response.data.message))
      .finally(() => {
        setLoading(false);
      });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Check if the user is logged in
    const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
    if(dataLogin) {
      if(dataLogin.type === "DKC") {
        history.push('/admin/dashboard');
      }else if(dataLogin.type === "DKR") {
        history.push('/admin/structure-dkr');
      }
    }
    
  }, []);

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundColor: "#4040A1",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{ my: 8, mx: 4 }}>
          <Typography component="h1" variant="h5" align="center" fontWeight="bold">
            Welcome
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              size="small"
              value={formData.username} 
              onChange={handleInputChange}
              error={!!errors.username}
              helperText={errors.username ? errors.username : ''}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
              value={formData.password} 
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password ? errors.password : ''}
            />
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#4040A1' }}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Login'}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignInSide;