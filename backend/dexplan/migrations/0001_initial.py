# Generated by Django 2.1 on 2018-09-22 15:49

import dexplan.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.PositiveSmallIntegerField()),
            ],
            managers=[
                ('objects', dexplan.models.DocumentManager()),
            ],
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.PositiveSmallIntegerField()),
            ],
            managers=[
                ('objects', dexplan.models.MemberManager()),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            managers=[
                ('objects', dexplan.models.ProjectManager()),
            ],
        ),
        migrations.CreateModel(
            name='Setting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.CharField(max_length=255)),
                ('value', models.CharField(max_length=255)),
            ],
            managers=[
                ('objects', dexplan.models.SettingManager()),
            ],
        ),
        migrations.CreateModel(
            name='Sheet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('document', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dexplan.Document')),
            ],
            managers=[
                ('objects', dexplan.models.SheetManager()),
            ],
        ),
        migrations.CreateModel(
            name='Style',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('column', models.IntegerField()),
                ('row', models.IntegerField()),
                ('style', models.CharField(max_length=255)),
                ('sheet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dexplan.Sheet')),
            ],
            managers=[
                ('objects', dexplan.models.StyleManager()),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('completion', models.PositiveSmallIntegerField(default=0)),
                ('start_date', models.DateTimeField()),
                ('due_date', models.DateTimeField()),
                ('status', models.PositiveSmallIntegerField()),
                ('comment', models.TextField()),
                ('sheet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dexplan.Sheet')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            managers=[
                ('objects', dexplan.models.TaskManager()),
            ],
        ),
        migrations.AddField(
            model_name='member',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dexplan.Project'),
        ),
        migrations.AddField(
            model_name='member',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='document',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dexplan.Project'),
        ),
    ]
