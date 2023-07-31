class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :reviews

  # has_many :reviews
  # has_many :places, through: :reviews

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
        created_at: review.created_at,
        updated_at: review.updated_at
      }
    end
  end



end
