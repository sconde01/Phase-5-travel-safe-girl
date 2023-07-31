class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :location, :description, :category,  :safety_features
  # ,:reviews

  has_many :reviews
  has_many :users, through: :reviews

  belongs_to :business

  # def reviews
  #   object.reviews.map do |review|
  #     {
  #       id: review.id,
  #       title: review.title,
  #       body: review.body,
  #       safe: review.safe,
  #       budget_friendly: review.budget_friendly,
  #       place_id: review.place.id,
  #       user_id: review.user.id,
  #       username: review.user.username,
  #       place_name: review.place.name,
  #       created_at: review.created_at
  #     }
  #   end
  # end


end
