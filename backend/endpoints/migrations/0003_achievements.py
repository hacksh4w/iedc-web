# Generated by Django 3.0.5 on 2020-05-05 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('endpoints', '0002_contactform_imageservice'),
    ]

    operations = [
        migrations.CreateModel(
            name='Achievements',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('content', models.TextField()),
                ('image', models.ImageField(upload_to='achievements')),
            ],
        ),
    ]
