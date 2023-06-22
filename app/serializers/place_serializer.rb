class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :location, :description, :category,  :safety_features
end
