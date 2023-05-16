# views.py
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from users.models import User

class PostList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = ()
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PostCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    serializer_class = PostSerializer
    def post(self, request):
        data = request.data.copy()
        user_pk = data['author']
        
        data['author_id'] = user_pk
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
        
        
        
        
    
class CommentList(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    
class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = ()
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer