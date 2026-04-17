from django.contrib import admin

from .models import Page


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ("slug", "title", "updated_at")
    search_fields = ("slug", "title")

# Register your models here.
