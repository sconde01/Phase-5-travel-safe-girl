class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :safe, :budget_friendly, :image_url

  belongs_to :user
  belongs_to :place
end
