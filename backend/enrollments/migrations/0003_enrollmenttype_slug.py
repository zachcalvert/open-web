# Generated by Django 3.2.2 on 2021-05-14 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enrollments', '0002_auto_20210514_1817'),
    ]

    operations = [
        migrations.AddField(
            model_name='enrollmenttype',
            name='slug',
            field=models.SlugField(blank=True, max_length=30, null=True),
        ),
    ]
