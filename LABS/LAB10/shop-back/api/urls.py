from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views_set import CategoryViewSet, ProductViewSet
from .views import fbv
from .views import cbv
from .views import mixins
from .views import generics as generic_views

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path('', include(router.urls)),

    path('fbv/products/', fbv.product_list),
    path('fbv/products/<int:product_id>/', fbv.product_detail),

    path('cbv/products/', cbv.ProductListAPIView.as_view(), name='products-list'),
    path('cbv/products/<int:product_id>/', cbv.ProductDetailAPIView.as_view(), name='products-detail'),

    path('mixins/products/', mixins.ProductListAPIView.as_view(), name='mixins-product-list'),
    path('mixins/products/<int:product_id>/', mixins.ProductDetailAPIView.as_view(), name='mixins-product-detail'),

    path('generics/products/', generic_views.ProductListAPIView.as_view(), name='generics-product-list'),
    path('generics/products/<int:product_id>/', generic_views.ProductDetailAPIView.as_view(), name='generics-product-detail'),
    path('generics/categories/', generic_views.CategoryListAPIView.as_view(), name='generics-category-list'),
    path('generics/categories/<int:category_id>/', generic_views.CategoryDetailAPIView.as_view(), name='generics-category-detail'),
    path('generics/categories/<int:category_id>/products/', generic_views.CategoryProductsAPIView.as_view(), name='generics-category-products')
]