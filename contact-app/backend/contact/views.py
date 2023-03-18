from rest_framework import generics
from .models import Contact, ContactEmail, ContactSocial
from .serializers import ContactSerializer, CreateContactSerializer, ContactEmailSerializer, ContactSocialSerializer

class ContactListCreateView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateContactSerializer
        return ContactSerializer

class ContactRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class ContactEmailListCreateView(generics.ListCreateAPIView):
    queryset = ContactEmail.objects.all()
    serializer_class = ContactEmailSerializer

class ContactEmailRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactEmail.objects.all()
    serializer_class = ContactEmailSerializer

class ContactSocialListCreateView(generics.ListCreateAPIView):
    queryset = ContactSocial.objects.all()
    serializer_class = ContactSocialSerializer

class ContactSocialRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactSocial.objects.all()
    serializer_class = ContactSocialSerializer
