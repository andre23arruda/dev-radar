from rest_framework import status, viewsets
from rest_framework.response import Response
import requests

from .models import Dev, Tech
from .serializers import DevSerializer


def get_techs(techs_text: str):
    '''
        Cria Techs a partir de uma string separada por vírgulas.
        Retorna lista de Techs
    '''
    techs = techs_text.split(',')
    techs = [ tech.strip().lower() for tech in techs ] # minúsculo
    techs_obj_list = []
    for tech in techs:
        obj, _ = Tech.objects.get_or_create(name=tech)
        techs_obj_list.append(obj)
    return techs_obj_list


class DevsViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Dev to be viewed or edited.'''
    queryset = Dev.objects.all()
    serializer_class = DevSerializer

    def create(self, serializer):
        '''Create Dev'''
        data = serializer.data
        dev = self.queryset.filter(username=data['username'])

        try:
            if dev.exists():
                dev = dev.first()
            else:
                response = requests.get(f'https://api.github.com/users/{ data["username"] }')
                dev_data = response.json()
                dev = Dev.objects.create(
                    username=data['username'],
                    name=data['name'],
                    avatar=dev_data['avatar_url'],
                    bio=dev_data['bio'],
                    latitude=data['latitude'],
                    longitude=data['longitude']
                )
                techs = get_techs(data['techs'])
                dev.techs.set(techs)

            serializer = DevSerializer(dev)
            return Response(serializer.data)

        except:
            return Response(
                {'data': 'Deu ruim!!'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )