from django.conf.urls import url, include
from . import views
from . import seeds

urlpatterns = [
    url(r'^hello', views.hello),
    url(r'^seed', seeds.seed),
    url(r'^users', views.users),
    url(r'^projects', views.projects),
    url(r'^documents', views.documents),
    url(r'^sheets', views.sheets),
    url(r'^styles', views.styles),
    url(r'^tasks', views.tasks),
    url(r'^members', views.members),
]
