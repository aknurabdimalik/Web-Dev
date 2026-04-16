from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_list),
    path('products/<int:id>/', views.product_detail),
    path('categories/', views.categories_list),
    path('categories/<int:id>/', views.category_detail),
    path('products/<int:id>/delete/', views.delete_product),
    path('load/', views.load),
    path('categories/<int:id>/products/', views.category_products),
]