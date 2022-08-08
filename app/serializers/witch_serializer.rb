class WitchSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :tokenID, :number_of_likes


  def number_of_likes
    self.object.likes.count
  end
end
