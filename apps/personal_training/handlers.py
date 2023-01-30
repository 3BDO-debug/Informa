from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from datetime import datetime


@api_view(["POST"])
def personal_training_requests_handler(request):
    fullname = request.data.get("fullname")
    phone_number = request.data.get("whatsappNumber")
    cor = request.data.get("cor")
    paying_region = request.data.get("payingRegion")
    age = request.data.get("age")
    gender = request.data.get("gender")
    weight = int(request.data.get("weight"))
    height = float(request.data.get("height"))
    plan_program = request.data.get("planProgram")
    plan_duration = request.data.get("planDuration")
    followup_package = request.data.get("followUpPackage")
    computed_total_price = float(request.data.get("computedTotalPrice"))
    computed_price_after_sale = (
        float(request.data.get("computedPriceAfterSale"))
        if request.data.get("computedPriceAfterSale")
        else None
    )
    has_sale = bool(computed_price_after_sale)

    if models.PersonalTrainingRequest.objects.filter(phone_number=phone_number):
        client_request = models.PersonalTrainingRequest.objects.filter(
            phone_number=phone_number
        ).order_by("-timestamp")[0]

        days_diff = abs((datetime.now().date() - client_request.timestamp.date()).days)

        if days_diff > 3:
            models.PersonalTrainingRequest.objects.create(
                fullname=fullname,
                phone_number=phone_number,
                cor=cor,
                paying_region=paying_region,
                age=age,
                gender=gender,
                weight=weight,
                height=height,
                plan_program=plan_program,
                plan_duration=plan_duration,
                followup_package=followup_package,
                computed_total_price=computed_total_price,
                computed_price_after_sale=computed_price_after_sale,
                has_sale=has_sale,
            ).save()
        else:
            return Response(status=status.HTTP_200_OK, data={"spamming": True})

    return Response(status=status.HTTP_200_OK)
