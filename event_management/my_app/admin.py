from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Booking, Event


    
admin.site.register(User)
admin.site.register(Booking)
admin.site.register(Event)
