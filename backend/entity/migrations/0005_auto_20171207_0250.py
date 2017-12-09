# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-12-07 02:50
from __future__ import unicode_literals

from django.db import migrations


def forwards(apps, schema_editor):
    Donor = apps.get_model('entity', 'Donor')
    donors = Donor.objects.all()
    for donor in donors:
        donor.charities.add(donor.charity)


def reverse(apps, schema_editor):
    Donor = apps.get_model('entity', 'Donor')
    donors = Donor.objects.all()
    for donor in donors:
        donor.charity = donor.charities.first()
        donor.save()


class Migration(migrations.Migration):

    dependencies = [
        ('entity', '0004_auto_20171207_0250'),
    ]

    operations = [
        migrations.RunPython(forwards, reverse)
    ]