from django.db import models
from django.db.models.fields.related import ForeignKey

# Create your models here.

class User(models.Model):
    name = models.CharField(100)
    profile_picture = models.ImageField(upload_to="./users/profile_pictures/")

class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    cover_image = models.ImageField(upload_to="./projects/cover_images/")
    authors = models.ManyToManyField(User)

class Comment(models.Model):
    content = models.CharField(max_length=500)
    post = models.ForeignKey(Post, models.CASCADE, related_name="comments")