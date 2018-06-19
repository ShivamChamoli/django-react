from django.shortcuts import render
from django.http import HttpResponse
from . import urls
from .models import Partner

# Create your views here.
def index(request):
    return HttpResponse("Hi")

#def partners(request):
#    var partners = []

def returnAllPartners(request):
    partner_list = Partner.objects.all()
    output = ', '.join([p.partner_name for p in partner_list])
    return HttpResponse(output)

def getPartner(request, partner_id):
    return HttpResponse("You're looking at partner %s." % partner_id)
    