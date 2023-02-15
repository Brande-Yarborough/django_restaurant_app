from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer

# listAPIview is prewired to accept get requests


class ItemListAPIView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

# Create your views here.
