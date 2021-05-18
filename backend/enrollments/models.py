import uuid

from django.contrib.auth.models import Group
from django.db import models
from django.template.defaultfilters import slugify


class EnrollmentType(models.Model):
    name = models.CharField(max_length=25)
    slug = models.SlugField(max_length=30, null=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(EnrollmentType, self).save(*args, **kwargs)


class Enrollment(models.Model):
    identifier = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    enrollment_type = models.ForeignKey(EnrollmentType, null=True, on_delete=models.SET_NULL)
    organizer = models.ForeignKey(Group, null=True, on_delete=models.SET_NULL)
    max_seats = models.IntegerField(default=100)
    available_seats = models.IntegerField(default=0)
    start = models.DateTimeField(null=True, blank=True)
    end = models.DateTimeField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title
