from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User, Group
from .models import Project
from .models import Document
from .models import Sheet
from .models import Style
from .models import Task
from .models import Member
from .models import Setting

# Create your views here.


def hello(request):
    return HttpResponse("Hello world!")


def users(request):
    users = User.objects.all()

    return JsonResponse(list(users.values()), safe=False)


def projects(request):
    user_id = request.GET.get('id')
    projects = Project.objects.filter(user_id=user_id)

    return JsonResponse(list(projects.values()), safe=False)

def documents(request):
    project_id = request.GET.get('id')
    documents = Document.objects.filter(project_id=project_id)

    return JsonResponse(list(documents.values()), safe=False)


def sheets(request):
    document_id = request.GET.get('id')
    sheets = Sheet.objects.filter(document_id=document_id)

    return JsonResponse(list(sheets.values()), safe=False)


def styles(request):
    sheet_id = request.GET.get('id')
    styles = Style.objects.filter(sheet_id=sheet_id)

    return JsonResponse(list(styles.values()), safe=False)

def tasks(request):
    sheet_id = request.GET.get('id')
    tasks = Task.objects.filter(sheet_id=sheet_id)

    return JsonResponse(list(tasks.values()), safe=False)

def members(request):
    project_id = request.GET.get('id')
    members = Member.objects.filter(project_id=project_id)

    return JsonResponse(list(members.values()), safe=False)