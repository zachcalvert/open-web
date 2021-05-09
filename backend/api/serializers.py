from django.contrib.auth.models import User, Group
from rest_framework import serializers

from enrollments.models import Enrollment
from events.models import Event


class UserSerializer(serializers.HyperlinkedModelSerializer):
    group = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'group']

    def get_group(self, obj):
        return str(obj.groups.first())


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'url', 'name']



class EnrollmentSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.SerializerMethodField()

    class Meta:
        model = Enrollment
        fields = ['id', 'name']

    def get_id(self, obj):
        return obj.identifier


class EventSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = ['id', 'url', 'name', 'date', 'location', 'description', 'organizer']

    def get_id(self, obj):
        return obj.identifier
