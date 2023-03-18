from rest_framework import serializers
from .models import Contact, ContactEmail, ContactSocial

class ContactEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactEmail
        fields = ['id', 'email', 'category', 'date_created', 'date_modified']

class ContactSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSocial
        fields = ['id', 'social', 'category', 'date_created', 'date_modified']

class ContactSerializer(serializers.ModelSerializer):
    emails = ContactEmailSerializer(many=True, read_only=True)
    socials = ContactSocialSerializer(many=True, read_only=True)

    class Meta:
        model = Contact
        fields = ['id', 'name', 'phone_number', 'address', 'city_state', 'reference', 'date_created', 'date_modified', 'emails', 'socials']

class CreateContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'phone_number', 'address', 'city_state', 'reference']
