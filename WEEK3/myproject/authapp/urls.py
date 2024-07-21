from django.contrib import admin
from django.urls import path, include
from authapp import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),  # Ensure this is the only 'admin/' entry
    path('', auth_views.home, name='home'),
    path('register/', auth_views.register, name='register'),
    path('login/', auth_views.user_login, name='login'),
    path('logout/', auth_views.user_logout, name='logout'),
    path('home/', auth_views.home, name='home'),
]
