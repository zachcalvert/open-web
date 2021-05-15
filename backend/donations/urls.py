"""open_web URL Configuration
"""
from django.urls import include, path

from donations import views


urlpatterns = [
    path('webhook/', views.stripe_webhook, name='stripe_webhook'),
]