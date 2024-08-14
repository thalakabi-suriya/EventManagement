from django.contrib.auth.models import AbstractUser
from django.db import models

class User(models.Model):
    firstname=models.CharField(max_length=125)
    lastname=models.CharField(max_length=125)
    email=models.CharField(max_length=125)
    password=models.CharField(max_length=125)

    def __str__(self):
        return self.email


class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    eventType = models.CharField(max_length=100)
    eventDate = models.DateField()
    additionalInfo = models.TextField()
    place = models.CharField(max_length=100)
    time = models.TimeField()

    def __str__(self):
        return f"{self.name} - {self.eventType}"

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    imageUrl = models.CharField(max_length=255)  # Assuming imageUrl is a URL or identifier
    place = models.CharField(max_length=100)
    time = models.TimeField()

    def __str__(self):
        return self.title
