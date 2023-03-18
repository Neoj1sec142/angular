from django.contrib import admin
from .models import Contact, ContactEmail, ContactSocial

admin.site.register(Contact)
admin.site.register(ContactEmail)
admin.site.register(ContactSocial)

