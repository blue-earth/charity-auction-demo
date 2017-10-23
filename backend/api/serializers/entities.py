from rest_framework import serializers

from api.serializers.storage import MediumSerializer
from entity.models import Charity
from entity.models import Donor
from entity.models import DonorMedium
from entity.models import Product
from entity.models import ProductMedium


class CharitySerializer(serializers.ModelSerializer):
    logo = serializers.SerializerMethodField()

    class Meta:
        model = Charity
        fields = ('pk', 'title', 'description', 'logo')
        read_only_fields = ('pk',)

    def get_logo(self, obj):
        return obj.logo.url if obj.logo else None


class DonorMediumSerializer(serializers.ModelSerializer):
    medium = MediumSerializer()

    class Meta:
        model = DonorMedium
        fields = ('pk', 'medium')


class DonorSerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField()

    class Meta:
        model = Donor
        fields = ('pk', 'title', 'description', 'type', 'charity', 'media')
        read_only_fields = ('pk',)

    def get_media(self, obj):
        return DonorMediumSerializer(obj.donormedium_set.all(), many=True).data


class ProductMediumSerializer(serializers.ModelSerializer):
    medium = MediumSerializer()

    class Meta:
        model = ProductMedium
        fields = ('pk', 'medium')


class ProductSerializer(serializers.ModelSerializer):
    donor_details = serializers.SerializerMethodField()
    media = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('pk', 'title', 'description', 'donor', 'donor_details', 'media',)
        read_only_fields = ('pk',)

    def get_donor_details(self, obj):
        return DonorSerializer(obj.donor).data

    def get_media(self, obj):
        return ProductMediumSerializer(obj.productmedium_set.all(), many=True).data