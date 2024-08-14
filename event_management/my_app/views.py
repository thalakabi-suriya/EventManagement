from rest_framework import generics, status
from rest_framework.response import Response
from .models import User, Booking, Event
from .serializers import UserSerializer, BookingSerializer, EventSerializer
from datetime import datetime, timedelta

import jwt
from django.core.mail import send_mail
from rest_framework import serializers, status
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView


# ListCreateAPIView for listing and creating users, bookings, and events
class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BookingListView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class EventListView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

# RetrieveUpdateDestroyAPIView for retrieving, updating, and deleting users, bookings, and events
class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BookingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

# View for requesting password reset
class PasswordResetRequestView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        if not email:
            return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
            serializer = UserSerializer()
            token = serializer.generate_jwt_token(user)  # Generate the token
            serializer.send_password_reset_email(user)
            return Response({
                "status": "Password reset email sent",
                "token": token  # Include the token in the response
            }, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


class PasswordResetConfirmView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        token = request.data.get('token')
        new_password = request.data.get('new_password')
        print(new_password)
        print(token)
        try:
            payload = jwt.decode(token, 'django-insecure-wui-!%cfiu6s&fy2qkmk51p1_1&=)tt+(*e(o4xcy4c$oo-yyx', algorithms=['HS256'])
            user_id = payload['user_id']
            user = User.objects.get(id=user_id)
            print(user_id)
            user.password = new_password
            user.save()
            return Response({"status": "Password has been reset successfully"}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError:
            return Response({"error": "Token has expired"}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.InvalidTokenError:
            return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
