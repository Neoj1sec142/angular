from rest_framework import generics, status
from .models import Contact, ContactEmail, ContactSocial
from .serializers import ContactSerializer, CreateContactSerializer, ContactEmailSerializer, ContactSocialSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class ContactListCreateView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateContactSerializer
        return ContactSerializer

class ContactDetail(APIView):
    def get(self, request, pk):
        try:
            contact = Contact.objects.get(pk=pk)
        except Contact.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        emails = ContactEmail.objects.filter(contact=contact.id)
        socials = ContactSocial.objects.filter(contact=contact.id)
        data = ContactSerializer(contact).data
        data['socials'] = ContactSocialSerializer(socials, many=True).data
        data['emails'] = ContactEmailSerializer(emails, many=True).data
        return Response(data)

class ContactNames(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        # extract the id and name fields only
        data = [{'id': c['id'], 'name': c['name']} for c in serializer.data]
        return Response(data)

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
