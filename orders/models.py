from django.db import models

# Create your models here.


class Order(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    order = models.JSONField(null=True)

    def __str__(self):
        return self.name
