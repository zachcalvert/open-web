from django.contrib.auth.models import User, Group
from rest_framework import serializers

from enrollments.models import Enrollment, EnrollmentType


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


class EnrollmentTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EnrollmentType
        fields = ['id', 'name', 'slug']
        extra_kwargs = {
            'url': {'lookup_field': 'name'}
        }


class EnrollmentSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.SerializerMethodField()
    enrollment_type = serializers.SerializerMethodField()

    class Meta:
        model = Enrollment
        fields = ['id', 'title', 'enrollment_type', 'filled_seats', 'max_seats', 'start', 'end', 'description']

    def get_id(self, obj):
        return obj.identifier

    def get_enrollment_type(self, obj):
        return obj.enrollment_type.name

    def to_internal_value(self, data):
        internal_value = super(EnrollmentSerializer, self).to_internal_value(data)
        organizer_id = self.context['request'].user.groups.first().id
        enrollment_type_name = data.get("enrollment_type")
        et, _ = EnrollmentType.objects.get_or_create(name=enrollment_type_name)
        internal_value.update({
            "organizer_id": organizer_id,
            "enrollment_type_id": et.id
        })
        return internal_value
