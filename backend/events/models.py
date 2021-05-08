import uuid

from django.contrib.auth.models import Group
from django.db import models


class Event(models.Model):
    identifier = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    organizer = models.ForeignKey(Group, null=True, on_delete=models.SET_NULL)
    date = models.DateTimeField(null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
