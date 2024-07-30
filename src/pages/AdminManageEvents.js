import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Paper, Typography } from '@mui/material';

const AdminManageEvents = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting event data:', eventData);
    try {
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to add event: ${errorText}`);
      }

      alert('Event added successfully');
      setEventData({ title: '', description: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Error: ' + error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Events
      </Typography>
      <Paper style={{ padding: '16px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Title"
                name="title"
                variant="outlined"
                value={eventData.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Description"
                name="description"
                variant="outlined"
                value={eventData.description}
                onChange={handleChange}
                required
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date"
                name="imageUrl"
                variant="outlined"
                value={eventData.imageUrl}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Event
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminManageEvents;
