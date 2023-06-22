class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :category
end
