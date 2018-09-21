from django.conf.urls import url, include
from . import views
from . import seeds

urlpatterns = [
    url(r'^hello', views.hello),
    url(r'^seed', seeds.seed),
]
