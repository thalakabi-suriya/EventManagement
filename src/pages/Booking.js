import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Button, MenuItem, Box, Paper } from '@mui/material';

const eventTypes = [
  'Product Launch',
  'Office Get Together',
  'Executive Meeting',
  'Trade Show',
  'Industry Event',
  'College Event',
  'Seminar',
  'Colleagues Event',
  'Corporate Event',
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Fetch existing bookings to determine the next ID
      const response = await fetch('http://localhost:3000/bookings');
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
  
      const bookings = await response.json();
      const nextId = bookings.length > 0 ? Math.max(...bookings.map(b => b.id)) + 1 : 1;
  
      // Add the new ID to the formData
      const newBooking = {
        id: nextId,
        ...formData
      };
  
      // Post the form data to JSON Server
      const postResponse = await fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBooking),
      });
  
      if (!postResponse.ok) {
        throw new Error('Network response was not ok: ' + postResponse.statusText);
      }
  
      const result = await postResponse.json();
      console.log('Booking successful:', result);
  
      // Clear form data or provide feedback
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        additionalInfo: '',
      });
  
      // Optionally navigate to another page or provide user feedback
      alert('Booking submitted successfully!');
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };
  


  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Book Your Event
      </Typography>
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Event Booking Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                sx={{ mb: 2 }}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                sx={{ mb: 2 }}
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                variant="outlined"
                sx={{ mb: 2 }}
                value={formData.phone}
                onChange={handleChange}
                required
                type="tel"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Event Type"
                name="eventType"
                variant="outlined"
                sx={{ mb: 2 }}
                select
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                {eventTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Event Date"
                name="eventDate"
                variant="outlined"
                sx={{ mb: 2 }}
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional Information"
                name="additionalInfo"
                variant="outlined"
                sx={{ mb: 2 }}
                value={formData.additionalInfo}
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Booking Summary
        </Typography>
        <Box sx={{ p: 4, bgcolor: '#f5f5f5', borderRadius: 1 }}>
          <Typography variant="subtitle1">
            <strong>Name:</strong> {formData.name}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Email:</strong> {formData.email}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Phone:</strong> {formData.phone}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Event Type:</strong> {formData.eventType}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Event Date:</strong> {formData.eventDate}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Additional Information:</strong> {formData.additionalInfo}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Booking;
