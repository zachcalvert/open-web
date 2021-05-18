"""open_web URL Configuration
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken import views as drf_views

from api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'enrollments', views.EnrollmentViewSet)
router.register(r'enrollment_types', views.EnrollmentTypeViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('open-enrollments/<int:organization_id>/', views.get_open_enrollments),
    path('api-token-auth/', drf_views.obtain_auth_token),
    path('current-user/', views.CurrentUserView.as_view()),
    path('djstripe/', include('donations.urls'))
]

admin.site.site_header = "Open Web Admin"
admin.site.site_title = "Open Web Admin Portal"
admin.site.index_title = "Open Web Administration"
