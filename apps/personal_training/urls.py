from django.urls import path
from . import handlers

urlpatterns = [
    path("request-personal-training", handlers.personal_training_requests_handler),
    path(
        "personal-training-requests-data", handlers.personal_training_requests_fetcher
    ),
]
