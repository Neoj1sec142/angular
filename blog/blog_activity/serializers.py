from rest_framework import serializers
from .models import Post, Comment
from users.models import User

class CommentSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())
    class Meta:
        model = Comment
        fields = ['id', 'author', 'text', 'date_created', 'post']

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Post
        fields = ['id', 'title', 'text', 'link', 'comments', 'date_created', 'date_modified', 'author']
