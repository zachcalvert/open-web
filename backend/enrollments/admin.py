from django.contrib import admin

from enrollments.models import Enrollment, EnrollmentType


class EnrollmentAdmin(admin.ModelAdmin):
    model = Enrollment
    list_display = ('title', 'enrollment_type', 'filled_seats', 'max_seats', 'start_time', 'end_time')
    list_filter = ('organizer',)


class EnrollmentTypeAdmin(admin.ModelAdmin):
    model = EnrollmentType
    list_display = ('name', 'slug')
    readonly_fields = ['slug',]


admin.site.register(Enrollment, EnrollmentAdmin)
admin.site.register(EnrollmentType, EnrollmentTypeAdmin)

