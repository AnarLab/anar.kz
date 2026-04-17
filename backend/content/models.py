from django.db import models

class Page(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=300, blank=True)
    body = models.TextField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["slug"]

    def __str__(self) -> str:
        return self.slug
