# urls.py
from django.urls import path
from .views import *


urlpatterns = [
    path('posts/', PostList.as_view(), name='post-create'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    # path('posts/<int:post_pk>/comments/', PostCommentListView.as_view(), name='post-comment-list'),
    path('comments/', CommentList.as_view(), name='comment-create'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
]