from rest_framework import generics
from .models import Order
from .serializers import OrderSerializer

# listAPIview is prewired to accept get requests


class OrderListAPIView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

# Create your views here.
