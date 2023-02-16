# Generated by Django 4.1.7 on 2023-02-16 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_rename_order_order_items_rename_name_order_last_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='last_name',
            new_name='customer_name',
        ),
        migrations.AddField(
            model_name='order',
            name='email',
            field=models.EmailField(
                default='admin@example.com', max_length=254),
            preserve_default=False,
        ),
    ]
