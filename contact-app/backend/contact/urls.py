from django.urls import path
from .views import ContactListCreateView, ContactRetrieveUpdateDeleteView, \
    ContactEmailListCreateView, ContactEmailRetrieveUpdateDeleteView, \
    ContactSocialListCreateView, ContactSocialRetrieveUpdateDeleteView,\
        ContactDetail, ContactNames

urlpatterns = [
    path('contacts/', ContactListCreateView.as_view(), name='contact_list_create'),
    path('contacts-names/', ContactNames.as_view(), name='contact_names'),
    path('contact/<int:pk>/', ContactDetail.as_view(), name='contact_detail'),
    path('contacts/<int:pk>/', ContactRetrieveUpdateDeleteView.as_view(), name='contact_retrieve_update_delete'),
    path('contact-emails/', ContactEmailListCreateView.as_view(), name='contact_email_list_create'),
    path('contact-emails/<int:pk>/', ContactEmailRetrieveUpdateDeleteView.as_view(), name='contact_email_retrieve_update_delete'),
    path('contact-socials/', ContactSocialListCreateView.as_view(), name='contact_social_list_create'),
    path('contact-socials/<int:pk>/', ContactSocialRetrieveUpdateDeleteView.as_view(), name='contact_social_retrieve_update_delete'),
]