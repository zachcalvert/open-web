from django.contrib.auth.models import AbstractUser
from django.db import models


class Donation(models.Model):
    donor = models.ForeignKey('djstripe.Customer', null=True, blank=True, on_delete=models.SET_NULL)
    payment = models.ForeignKey(
        'djstripe.BalanceTransaction', null=True, blank=True, on_delete=models.SET_NULL,
        help_text="The user's Stripe Subscription object, if it exists"
    )
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
