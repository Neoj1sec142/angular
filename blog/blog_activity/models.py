from django.db import models
from users.models import User

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    text = models.TextField()
    link = models.URLField(null=True, blank=True)
    comments = models.ManyToManyField('Comment', blank=True, related_name='post_comments')
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.title

class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_comments')
    text = models.TextField()
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return self.text
