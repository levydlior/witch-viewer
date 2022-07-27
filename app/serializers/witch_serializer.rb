class WitchSerializer < ActiveModel::Serializer
  attributes :id, :type_of_witch, :name, :image, :description, :tokenID, :externalURL
end
