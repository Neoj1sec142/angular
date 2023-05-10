from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    profile = models.OneToOneField('Profile', on_delete=models.CASCADE, null=True, blank=True, related_name='user_profile')
    groups = models.ManyToManyField(
        'auth.Group',
        blank=True,
        related_name='user_custom_set',
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_query_name='user_custom'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        related_name='user_custom_set',
        help_text='Specific permissions for this user.',
        related_query_name='user_custom'
    )
    def __str__(self):
        return self.username
    
class Profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    address = models.CharField(max_length=150, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    state = models.CharField(max_length=50, null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    twitter = models.CharField(max_length=50, null=True, blank=True)
    def __str__(self):
        return f'{self.owner} Profile'