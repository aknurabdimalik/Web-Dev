from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


    rating = models.FloatField(default=0)
    likes = models.IntegerField(default=0)
    link = models.TextField()
    image = models.TextField()

    def __str__(self):
        return self.name