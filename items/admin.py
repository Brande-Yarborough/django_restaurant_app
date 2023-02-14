from django.contrib import admin

# import from items directory the models.py file
from .models import Item


# Register your models here.
# adds Items table to Django admin site
admin.site.register(Item)
