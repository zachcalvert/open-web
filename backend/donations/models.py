from django.db import models


class Donor(AbstractUser):
    customer = models.ForeignKey(
        'djstripe.Customer', null=True, blank=True, on_delete=models.SET_NULL,
        help_text="The user's Stripe Customer object, if it exists"
    )
    donation = models.ForeignKey(
        'djstripe.Payment', null=True, blank=True, on_delete=models.SET_NULL,
        help_text="The user's Stripe Payment object, if it exists"
    )
    subscription = models.ForeignKey(
        'djstripe.Subscription', null=True, blank=True, on_delete=models.SET_NULL,
        help_text="The user's Stripe Subscription object, if it exists"
    )

class Donation(models.Model):
    pass
