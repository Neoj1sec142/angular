# urls.py
from .serializers import *
from django.urls import path
from .views import *

urlpatterns = [
    
    path('posts/', PostList.as_view(), name='post-list'),
    # path('posts/new/', PostCreate.as_view(), name='post-create'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    path('comments/', CommentList.as_view(), name='comment-list'),
    # path('comments/new/', PostList.as_view(), name='comment-create'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
]