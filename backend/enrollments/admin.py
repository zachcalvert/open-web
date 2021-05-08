from django.contrib import admin

from enrollments.models import Enrollment


class EnrollmentAdmin(admin.ModelAdmin):
    model = Enrollment
    list_display = ('name',)
    list_filter = ('organizer',)


admin.site.register(Enrollment, EnrollmentAdmin)
