from rest_framework import serializers
from .models import User, Booking, Event
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import send_mail
from django.conf import settings
from datetime import datetime, timedelta
import jwt

# Serializer for User, Booking, and Event models
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    def send_password_reset_email(self, user):
        token = self.generate_jwt_token(user)
        reset_link = f"127.0.0.1:3000/reset-password?token={token}"

        subject = 'Password Reset Request'
        message = f'Hi {user.firstname},\n\nClick the link below to reset your password:\n{reset_link}'
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [user.email]

        send_mail(subject, message, from_email, recipient_list)

    def generate_jwt_token(self, user):
        payload = {
            'user_id': user.id,
            'exp': datetime.utcnow() + timedelta(hours=1),  # Token expires in 1 hour
            'iat': datetime.utcnow(),
        }
        token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
        return token

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
