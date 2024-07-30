import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';
import './EventCreation.css';
import { useUser } from '../UserContext'; // Import useUser from UserContext

const predefinedEventDetails = [
  {
    title: 'Product Launches',
    description: 'Celebrate your special day with elegance and charm. Our team ensures every detail is perfect, from the venue setup to the catering services. Enjoy a stress-free wedding with our comprehensive planning and coordination services, including floral arrangements, music, photography, and a dedicated event manager to oversee the day.',
    imageUrl: 'https://www.filepicker.io/api/file/wQ03Z8fkRfmtBqq58HVf',
  },
  {
    title: 'Office Get Together',
    description: 'Strengthen team bonds with a well-organized office get-together. Enjoy activities, delicious food, and a relaxing environment. We offer customized team-building exercises, interactive workshops, and recreational activities designed to boost morale and foster collaboration. Our catering options range from casual buffets to formal dinners.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNs5wdwHnQs-mILanDSKyAoxCb0fcfJoiCBhg4EkxN5UC7X2WIVEjOdWRvXAAEUMZZts&usqp=CAU',
  },
  {
    title: 'Executive Meetings',
    description: 'Host a grand reception that leaves a lasting impression. Our services include beautiful decor, music, and fine dining to make your event unforgettable. We offer venue selection, theme planning, guest management, and entertainment options to ensure a memorable experience for you and your guests.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr63HPd_yLMqanH4jt-o24rpxsrJXvRSeW_pb7GLG79Mcyfn5Py7yDaolx2Apw6yn1STA&usqp=CAU',
  },
  {
    title: 'Trade Shows',
    description: 'Celebrate this milestone with a memorable ear function ceremony. We provide traditional setups, catering, and entertainment for your guests. Our packages include venue decoration with traditional themes, live music or DJ, and a variety of culinary options to suit your taste and cultural preferences.',
    imageUrl: 'https://www.filepicker.io/api/file/wQ03Z8fkRfmtBqq58HVf',
  },
  {
    title: 'Industry Event',
    description: 'Organize a professional industry event with top-notch facilities, guest speakers, and networking opportunities for all attendees. We offer comprehensive event management services including venue selection, audio-visual setup, guest speaker arrangements, and marketing support to ensure your event is a success.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNs5wdwHnQs-mILanDSKyAoxCb0fcfJoiCBhg4EkxN5UC7X2WIVEjOdWRvXAAEUMZZts&usqp=CAU',
  },
  {
    title: 'College Events',
    description: 'From orientation to graduation parties, we handle all types of college events with enthusiasm and creativity to ensure a fun-filled experience. Our services include event planning, venue decoration, activity coordination, and food and beverage arrangements to suit the unique needs of students and faculty.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr63HPd_yLMqanH4jt-o24rpxsrJXvRSeW_pb7GLG79Mcyfn5Py7yDaolx2Apw6yn1STA&usqp=CAU',
  },
  {
    title: 'Seminars',
    description: 'Make your birthday party special with custom themes, decorations, and entertainment. We cater to all age groups and preferences. Our packages include themed decorations, party favors, entertainment options such as magicians or DJs, and a variety of menu options to delight your guests.',
    imageUrl: 'https://www.filepicker.io/api/file/wQ03Z8fkRfmtBqq58HVf',
  },
  {
    title: 'Colleagues Event',
    description: 'Host a casual or formal event for your colleagues with our professional event planning services, ensuring a smooth and enjoyable experience. We offer venue selection, event coordination, entertainment options, and catering services to meet the specific needs of corporate events.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNs5wdwHnQs-mILanDSKyAoxCb0fcfJoiCBhg4EkxN5UC7X2WIVEjOdWRvXAAEUMZZts&usqp=CAU',
  },
  {
    title: 'Corporate Events',
    description: 'Reconnect with old friends and make new memories with a well-organized reunion event. We provide everything from venue to activities. Our services include planning and coordination, venue decoration, entertainment, and catering to ensure a nostalgic and enjoyable experience for all attendees.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr63HPd_yLMqanH4jt-o24rpxsrJXvRSeW_pb7GLG79Mcyfn5Py7yDaolx2Apw6yn1STA&usqp=CAU',
  },
];

const EventCreation = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [fetchedEvents, setFetchedEvents] = useState([]);
  const { user } = useUser(); // Access user from context
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setFetchedEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleNavigateToBooking = () => {
    if (user) {
      navigate('/booking'); // Navigate to the booking page
    } else {
      navigate('/login'); // Navigate to the login page
    }
  };

  const allEvents = [...predefinedEventDetails, ...fetchedEvents];

  return (
    <Container className="event-creation">
      <Typography variant="h3" gutterBottom align="center" className="page-title">
        Event Booking
      </Typography>
      <Grid container spacing={4}>
        {allEvents.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="event-card" onClick={() => handleOpenDialog(event)}>
              <CardMedia
                component="img"
                alt={event.title}
                height="200"
                image={event.imageUrl}
                className="event-image"
              />
              <CardContent>
                <Typography variant="h5" component="div" className="event-title">
                  {event.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{selectedEvent?.title}</DialogTitle>
        <DialogContent>
          <img 
            src={selectedEvent?.imageUrl} 
            alt={selectedEvent?.title} 
            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '20px' }} 
          />
          <Typography variant="body1">{selectedEvent?.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Button onClick={handleNavigateToBooking} color="primary">
            Book Now
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EventCreation;
