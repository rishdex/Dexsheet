from django.db import models
from django.contrib.auth.models import User, Group

# Create your models here.


class ProjectManager(models.Manager):
    use_in_migrations = True


class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    objects = ProjectManager()

    def __str__(self):
        return self.name


class DocumentManager(models.Manager):
    use_in_migrations = True


class Document(models.Model):
    DOCUMENT_BLANK = 1
    DOCUMENT_TASKS = 2

    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    type = models.PositiveSmallIntegerField()
    objects = DocumentManager()


class SheetManager(models.Manager):
    use_in_migrations = True


class Sheet(models.Model):
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    objects = SheetManager()


class StyleManager(models.Manager):
    use_in_migrations = True


class Style(models.Model):
    sheet = models.ForeignKey(Sheet, on_delete=models.CASCADE)
    column = models.IntegerField()
    row = models.IntegerField()
    style = models.CharField(max_length=255)
    objects = StyleManager()


class TaskManager(models.Manager):
    use_in_migrations = True


class Task(models.Model):
    TASK_NOTSTARTED = 1
    TASK_INPROGRESS = 2
    TASK_COMPLETED = 3

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sheet = models.ForeignKey(Sheet, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    completion = models.PositiveSmallIntegerField(default=0)
    start_date = models.DateTimeField()
    due_date = models.DateTimeField()
    status = models.PositiveSmallIntegerField()
    comment = models.TextField()
    objects = TaskManager()


class MemberManager(models.Manager):
    use_in_migrations = True


class Member(models.Model):
    MEMBER_OWNER = 1
    MEMBER_READER = 2
    MEMBER_WRITER = 3
    MEMBER_ADMIN = 4

    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.PositiveSmallIntegerField()
    objects = MemberManager()


class SettingManager(models.Manager):
    use_in_migrations = True


class Setting(models.Model):
    key = models.CharField(max_length=255)
    value = models.CharField(max_length=255)
    objects = SettingManager()
