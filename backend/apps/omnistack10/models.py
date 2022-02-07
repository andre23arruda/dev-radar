from django.db import models


class Tech(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{ self.name }'


class Dev(models.Model):
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=50)
    bio = models.TextField(blank=True, null=True)
    avatar = models.CharField(max_length=500)
    latitude = models.FloatField()
    longitude = models.FloatField()
    techs = models.ManyToManyField(Tech, null=True, blank=True)

    def __str__(self):
        return f'{ self.name }'