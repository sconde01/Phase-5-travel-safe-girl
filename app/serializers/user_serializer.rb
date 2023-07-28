class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :reviews

  has_many :reviews

  def reviews
    object.reviews.map do |review|
      {
        id: review.id,
        title: review.title,
        body: review.body,
        safe: review.safe,
        budget_friendly: review.budget_friendly,
        place_id: review.place.id,
        place_name: review.place.name,
        place_image: review.place.image_url,
        created_at: review.created_at
      }
    end
  end
  # def reviews
  #   object.reviews.map do |review|
  #     {
  #       id: review.id,
  #       review_title: review.title,
  #       review_body: review.body,
  #       safe: review.safe,
  #       budget_friendly: review.budget_friendly,
  #       place_id: review.place.id,
  #       place_name: review.place.name,
  #       place_image: review.place.image_url,
  #       created_at: review.created_at
  #     }
  #   end
  # end

end
