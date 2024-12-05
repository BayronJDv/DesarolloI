from django.urls import path
from .views import SearchView

urlpatterns = [
    # Endpoint para buscar productos con paginación y filtros
    path('products/', SearchView.as_view(), name='product-search'),
]

