class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :safe, :budget_friendly
  
  belongs_to :user
  belongs_to :place
end
