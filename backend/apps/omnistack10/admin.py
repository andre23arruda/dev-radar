from django.contrib import admin
from django.conf.locale.pt_BR import formats as portuguese
from django.conf.locale.en import formats as english
from rangefilter.filters import DateRangeFilter
from .models import Dev

portuguese.DATE_FORMAT = 'd/m/Y'
english.DATE_FORMAT = 'd/m/Y'


# @admin.register(Dev)
# class DevRegister(admin.ModelAdmin):
#     list_display = ['id', 'name', 'github_username', 'created_at']
#     list_display_links = ['id', 'name', 'github_username']
#     list_filter = [
#         ('created_at', DateRangeFilter),
#     ]
#     list_per_page = 25
#     ordering = ['id']
#     search_fields = ['id', 'name', 'github_username']
