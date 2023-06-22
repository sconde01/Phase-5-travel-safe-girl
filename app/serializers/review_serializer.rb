class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :safe, :budget_friendly
  has_one :user
  has_one :place
end
