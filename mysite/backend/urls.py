from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # ex: /partner/5/
    path('partners', views.Partners.returnAllPartners,name='returnAllPartners'),
    path('partner/<int:partner_id>/', views.Partners.getPartner, name='getPartner'),
    # ex: /polls/5/results/
    #path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    #path('<int:question_id>/vote/', views.vote, name='vote'),
]
