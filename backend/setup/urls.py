from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from omnistack10.views import DevsViewSet

router = routers.DefaultRouter()
router.register('dev-radar/devs', DevsViewSet, basename='Devs')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
