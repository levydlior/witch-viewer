class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar, :name, :last_name
end
