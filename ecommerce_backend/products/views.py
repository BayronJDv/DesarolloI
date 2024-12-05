from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Q
from .models import Product

class SearchView(APIView):
    def get(self, request):
        # Obtener los parámetros de consulta
        category = request.query_params.get('category', None)
        keyword = request.query_params.get('keyword', None)
        page = request.query_params.get('page', 1)
        page_size = request.query_params.get('page_size', 8)  # Por defecto 8 productos por página

        # Crear consulta base
        products = Product.objects.all()

        # Filtro por categoría (si existe)
        if category:
            products = products.filter(category__icontains=category)

        # Filtro por palabra clave en nombre o descripción
        if keyword:
            products = products.filter(
                Q(name__icontains=keyword) | Q(description__icontains=keyword)
            )

        # Configuración de la paginación
        paginator = Paginator(products, page_size)
        try:
            products_page = paginator.page(page)
        except PageNotAnInteger:
            return Response({"error": "Invalid page number, must be an integer."}, status=400)
        except EmptyPage:
            return Response({"error": "Page number out of range."}, status=404)

        # Serialización de productos
        results = [
            {
                "id": product.id,
                "name": product.name,
                "category": product.category,
                "brand": product.brand,
                "price": float(product.price),
                "stock": product.stock,
                "imageurl": product.imageurl,
            }
            for product in products_page
        ]

        # Respuesta con datos de paginación
        return Response({
            "products": results,
            "total_pages": paginator.num_pages,
            "current_page": int(page),
            "total_products": paginator.count,
        })
