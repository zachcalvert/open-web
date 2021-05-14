from django.contrib import admin

from enrollments.models import Enrollment, EnrollmentType


class EnrollmentAdmin(admin.ModelAdmin):
    model = Enrollment
    list_display = ('name', 'enrollment_type', 'max_seats')
    list_filter = ('organizer',)


class EnrollmentTypeAdmin(admin.ModelAdmin):
    model = EnrollmentType
    list_display = ('name', 'slug')
    readonly_fields = ['slug',]


admin.site.register(Enrollment, EnrollmentAdmin)
admin.site.register(EnrollmentType, EnrollmentTypeAdmin)

