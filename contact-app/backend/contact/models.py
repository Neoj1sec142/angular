from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=25)
    address = models.TextField(default='')
    city_state = models.TextField(default='')
    reference = models.TextField(default='')
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.name
    
class ContactEmail(models.Model):
    class Category(models.TextChoices):
        WORK = 'Work'
        PERSONAL = 'Personal'
        JOBSEARCH = 'Job Search'
        MARKETING = 'Marketing'
        PHOTOGRAPHY = 'Photography'
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE)
    email = models.EmailField(null=False, blank=False)
    category = models.CharField(max_length=50, choices=Category.choices, default=Category.PERSONAL)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return f'{self.category}: {self.email}'
    
class ContactSocial(models.Model):
    class Category(models.TextChoices):
        FACEBOOK = 'Facebook'
        INSTAGRAM = 'Instagram'
        TWITTER = 'Twitter'
        LINKEDIN = 'LinkedIN'
        GITHUB = 'Github'
        YOUTUBE = 'Youtube'
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE)
    social = models.CharField(max_length=150)
    category = models.CharField(max_length=50, choices=Category.choices, default=Category.YOUTUBE)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return f'{self.category}: {self.social}'
