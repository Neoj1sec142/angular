from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    # followers = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['username', 'is_active', 'id']
    
    
class UserDetailSerializer(serializers.ModelSerializer):
    # followers = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'is_active', 'is_staff', 'email', 'id', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.set_password(validated_data['password'])
        instance.save()
        return instance