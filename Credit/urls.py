from django.urls import re_path
from Credit import views

urlpatterns = [
    re_path(r'^demande$',views.demandeApi),
    re_path(r'^demande/([0-9]+)$',views.demandeApi),
    re_path(r'^agent_de_verification$', views.agent_de_verificationApi),
    re_path(r'^agent_de_verification/([0-9]+)$', views.agent_de_verificationApi)
]
