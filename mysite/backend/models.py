from django.db import models

#
import datetime
from django.utils import timezone

# Create your models here.

class Partner(models.Model):
    partner_name = models.CharField('Partner Name', max_length=200)
    contact_name = models.CharField('Contact Name', max_length=100)
    comments = models.CharField('Comments', max_length=200,default='')
    def __str__(self):
        return self.partner_name
    def print_contact_name(self):
        return contact_name

# Mock class for datatypes types for

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.question_text

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    def __str__(self):
        return self.choice_text