import random
import datetime
import json
import urllib.request
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django_seed import Seed
from django.utils.crypto import get_random_string
from django.contrib.auth.models import User, Group
from .models import Project
from .models import Document
from .models import Sheet
from .models import Style
from .models import Task
from .models import Member
from .models import Setting


# Create your views here.
seeder = Seed.seeder()
supername = 'admin'


def isSeeded():
    if len(User.objects.filter(username=supername)) > 0:
        return True
    else:
        return False


# create functions
def createSetting(data):
    setting = Setting()
    setting.key = data['key']
    setting.value = data['value']
    setting.save()


# Seed main function
def seed(request):
    if isSeeded():
        return HttpResponse("Already seeded!")

    # Create group
    Group.objects.get_or_create(name='Manager')
    manager_group = Group.objects.get(name='Manager')
    Group.objects.get_or_create(name='Member')
    member_group = Group.objects.get(name='Member')

    print(str(Group.objects.count()) + " groups created.")

    # Create users
    User.objects.create_superuser(
        supername, 'admin@gmail.com', '123456')
    manager = User.objects.create_user(username="manager",
                                     email="manager@gmail.com", password="123456")
    member = User.objects.create_user(username="member",
                                     email="member@gmail.com", password="123456")
    User.objects.create_user(username="user3",
                             email="user3@gmail.com", password="123456")
    
    manager_group.user_set.add(manager)
    member_group.user_set.add(member)

    for i in range(3):
        username = seeder.faker.name()
        if len(User.objects.filter(username=username)) == 0:
            User.objects.create_user(username=seeder.faker.name(),
                                     email=seeder.faker.email(), password="123456")

    print(str(User.objects.count()) + " users created.")

    # Create projects
    users = User.objects.all()
    userCount = len(users)

    def randomUser():
        return users[random.randint(0, userCount - 1)]

    for user in users:
        count = random.randint(0, 5)
        for i in range(count):
            project = Project()
            project.user = user
            project.name = seeder.faker.word()
            project.save()
    
    print(str(Project.objects.count()) + " projects created")

    # Create documents
    projects = Project.objects.all()
    projectCount = len(projects)

    def randomProject():
        return projects[random.randint(0, projectCount - 1)]

    for project in projects:
        document1 = Document()
        document1.project = project
        document1.type = Document.DOCUMENT_BLANK
        document1.save()
        document2 = Document()
        document2.project = project
        document2.type = Document.DOCUMENT_TASKS
        document2.save()

    print(str(Document.objects.count()) + " documents created.")

    # Create sheets
    documents = Document.objects.all()
    documentCount = len(documents)

    def randomDocument():
        return documents[random.randint(0, documentCount - 1)]

    for document in documents:
        count = random.randint(0, 3)
        for i in range(count):
            sheet = Sheet()
            sheet.document = document
            sheet.name = seeder.faker.word()
            sheet.save()

    print(str(Sheet.objects.count()) + " sheets created.")

    # Create styles
    sheets = Sheet.objects.all()
    sheetCount = len(sheets)

    def randomSheet():
        return sheets[random.randint(0, sheetCount - 1)]

    for sheet in sheets:
        count = random.randint(0, 3)
        for i in range(count):
            style = Style()
            style.sheet = sheet
            style.column = random.randint(0, 5)
            style.row = random.randint(0, 5)
            style.style = "text-align: 'center'"
            style.save()

    print(str(Style.objects.count()) + " styles created.")

    # Create tasks
    for user in users:
        count = random.randint(0, 20)
        for i in range(count):
            task = Task()
            task.user = user
            task.sheet = randomSheet()
            task.name = seeder.faker.text()
            task.completion = random.randint(0, 100)
            task.start_date = seeder.faker.date_time()
            task.due_date = seeder.faker.date_time()
            task.status = random.randint(1, 3)
            task.comment = seeder.faker.text()
            task.save()

    print(str(Task.objects.count()) + " tasks created.")

    # Create members
    for project in projects:
        count = random.randint(0, 5)
        member = Member()
        member.project = project
        member.user = project.user
        member.type = Member.MEMBER_OWNER
        member.save()
        for i in range(count):
            member = Member()
            member.project = project
            member.user = randomUser()
            member.type = random.randint(1, 4)
            member.save()

    print(str(Member.objects.count()) + " members created.")

    # Create Setting
    createSetting({'key': 'title', 'value': 'Dexplan Site'})
    

    return HttpResponse("Seeding done!")
