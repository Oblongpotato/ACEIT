"""website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from register.views import signaction
from login.views import loginaction
from login import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', signaction),
    path('login/', loginaction),
    path('', views.index),
    path('login/test/', views.test),
    path('login/index/', views.indexes),
    path('login/blog1/', views.blog1),
    path('login/blog2/', views.blog2),
    path('login/blog3/', views.blog3),
    path('login/blogs2page/', views.blogs2page),
    path('login/blogs/', views.blogs),
    path('login/dbms/', views.dbms),
    path('login/ds/', views.ds),
    path('login/os/', views.os),
    path('login/amazon/', views.amazon),
    path('login/google/', views.google),
    path('login/delloite/', views.delloite),
    path('login/guide/', views.guide),
    path('login/notes/', views.notes),
    path('login/notes2/', views.notes2),
    path('login/videos/', views.videos),
    path('login/videos2/', views.videos2),
    path('login/osquiz/', views.osquiz),
    path('login/dsquiz/', views.dsquiz),
    path('login/dbmsquiz/', views.dbmsquiz),
    path('login/osans/', views.osans),
    path('login/dsans/', views.dsans),
    path('login/dbmsans/', views.dbmsans),


]
