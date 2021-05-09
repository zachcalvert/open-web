from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from api import serializers
from enrollments.models import Enrollment
from events.models import Event


class IsAdminUser(permissions.BasePermission):
    """
    Allows access only to admin users.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_staff


class StaffOnlyModelViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAdminUser,)


class CurrentUserView(APIView):
    def get(self, request):
        serializer = serializers.UserSerializer(request.user, context={'request': request })
        return Response(serializer.data)


class UserViewSet(StaffOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        This view should return a list of all the events organized
        for the currently authenticated user's group.
        """
        user = self.request.user
        if user.is_superuser:
            return User.objects.all()
        
        else:
            group = user.groups.first()
            return User.objects.filter(groups__name=group.name)


class GroupViewSet(StaffOnlyModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = serializers.GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class EnrollmentViewSet(StaffOnlyModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = serializers.EnrollmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        This view should return a list of all the enrollments organized
        for the currently authenticated user's group.
        """
        user = self.request.user
        if user.is_superuser:
            return Enrollment.objects.all()

        return Enrollment.objects.filter(organizer__in=user.groups.all())


class EventViewSet(StaffOnlyModelViewSet):
    queryset = Event.objects.all()
    serializer_class = serializers.EventSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """
        This view should return a list of all the events organized
        for the currently authenticated user's group.
        """
        user = self.request.user
        if user.is_superuser:
            return Event.objects.all()

        return Event.objects.filter(organizer__in=user.groups.all())
