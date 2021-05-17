from django.contrib import admin
from djstripe import models

from donations.models import Donation

admin.site.register(Donation)
admin.site.unregister(models.Account)
admin.site.unregister(models.APIKey)
admin.site.unregister(models.BalanceTransaction)
admin.site.unregister(models.Charge)
admin.site.unregister(models.Coupon)
admin.site.unregister(models.Customer)
admin.site.unregister(models.Dispute)
admin.site.unregister(models.Event)
admin.site.unregister(models.FileUpload)
admin.site.unregister(models.IdempotencyKey)
admin.site.unregister(models.Invoice)
admin.site.unregister(models.PaymentIntent)
admin.site.unregister(models.PaymentMethod)
admin.site.unregister(models.Plan)
admin.site.unregister(models.Price)
admin.site.unregister(models.Product)
admin.site.unregister(models.Refund)
admin.site.unregister(models.SetupIntent)
admin.site.unregister(models.Source)
admin.site.unregister(models.Subscription)
admin.site.unregister(models.TaxRate)
admin.site.unregister(models.Transfer)
admin.site.unregister(models.WebhookEventTrigger)