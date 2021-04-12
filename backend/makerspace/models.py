from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)

class Comment(models.Model):
    content = models.CharField(max_length=500)
    post = models.ForeignKey(Post, models.CASCADE, related_name="comments")