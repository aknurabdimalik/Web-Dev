from django.http import JsonResponse
from .models import Product, Category
from .data import load_data


def products_list(request):
    products = Product.objects.all()
    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category.name,
            "rating": p.rating,
            "likes": p.likes,
            "link": p.link,
            "image": p.image,
            "images": [p.image]
        }
        for p in products
    ]
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    p = Product.objects.get(id=id)
    data = {
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category": p.category.name,
        "rating": p.rating,
        "likes": p.likes,
        "link": p.link,
        "image": p.image,
        "images": [p.image]
    }
    return JsonResponse(data)


def categories_list(request):
    categories = Category.objects.all()
    data = [
        {"id": c.id, "name": c.name}
        for c in categories
    ]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    c = Category.objects.get(id=id)
    return JsonResponse({
        "id": c.id,
        "name": c.name
    })


def category_products(request, id):
    products = Product.objects.filter(category_id=id)

    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "category": p.category.name,
            "rating": p.rating,
            "likes": p.likes,
            "image": p.image,
            "link": p.link,
            "images": [p.image]
        }
        for p in products
    ]

    return JsonResponse(data, safe=False)
def load(request):
    load_data()
    return JsonResponse({"status": "ok"})

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def delete_product(request, id):
    if request.method == "DELETE":
        try:
            product = Product.objects.get(id=id)
            product.delete()
            return JsonResponse({"message": "deleted"})
        except Product.DoesNotExist:
            return JsonResponse({"error": "not found"}, status=404)