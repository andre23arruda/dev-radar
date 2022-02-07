from rest_framework import serializers
from .models import Dev, Tech


class TechSerializer(serializers.ModelSerializer):
    '''Tech Serializer'''
    class Meta:
        model = Tech
        fields = '__all__'


class DevSerializer(serializers.ModelSerializer):
    '''Dev Serializer'''
    techs = serializers.SerializerMethodField()
    def get_techs(self, obj):
        return ', '.join([ tech.name.title() for tech in obj.techs.all() ])

    class Meta:
        model = Dev
        fields = '__all__'
