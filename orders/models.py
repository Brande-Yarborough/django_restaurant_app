from django.db import models

# Create your models here.


class Order(models.Model):
    last_name = models.CharField(max_length=255)
    sub_total = models.DecimalField(max_digits=4, decimal_places=2)
    items = models.JSONField(null=True)

    def __str__(self):
        return self.last_name
