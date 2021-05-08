from django.contrib import admin

from events.models import Event


class EventAdmin(admin.ModelAdmin):
    model = Event
    list_display = ('name', 'organizer', 'date')
    list_filter = ('organizer',)


admin.site.register(Event, EventAdmin)
