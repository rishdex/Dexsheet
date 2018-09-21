from django.contrib import admin
from .models import Project
from .models import Document
from .models import Sheet
from .models import Style
from .models import Task
from .models import Member
from .models import Setting

# Register your models here.


admin.site.register(Project)
admin.site.register(Document)
admin.site.register(Sheet)
admin.site.register(Style)
admin.site.register(Task)
admin.site.register(Member)
admin.site.register(Setting)
