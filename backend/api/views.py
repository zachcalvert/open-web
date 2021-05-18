from django.contrib.auth.models import User, Group
from django.utils import timezone
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView

from api import serializers
from enrollments.models import Enrollment, EnrollmentType


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


class EnrollmentTypeViewSet(StaffOnlyModelViewSet):
    queryset = EnrollmentType.objects.all()
    serializer_class = serializers.EnrollmentTypeSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'name'

    def get_queryset(self):
        """
        This view should return a list of all the enrollments organized
        for the currently authenticated user's group.
        """
        user = self.request.user
        if user.is_superuser:
            return EnrollmentType.objects.all()

        return EnrollmentType.objects.filter(organizer__in=user.groups.all())


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


@api_view(('GET',))
@permission_classes([permissions.AllowAny,])
def get_open_enrollments(request, organization_id):

    group = Group.objects.get(id=organization_id)
    print(group)
    open_enrollments = Enrollment.objects.filter(
        organizer_id=group.id,
        start__gte=timezone.now(),
        available_seats__gt=0
    )
    print(open_enrollments)

    return Response([
        {
            "identifier": oe.identifier,
            "title": oe.title,
            "start": oe.start,
            "end": oe.end,
            "description": oe.description,
            "available_seats": oe.available_seats,
            "max_seats": oe.max_seats
        } for oe in open_enrollments
    ])