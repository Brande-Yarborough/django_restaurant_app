# Generated by Django 4.1.6 on 2023-02-13 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True,
                 primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('price', models.DecimalField(..., max_digits=4, decimal_places=2)),
                ('category', models.CharField(max_length=255)),
            ],
        ),
    ]