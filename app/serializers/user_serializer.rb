class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :reviews

  def reviews
    object.reviews.map do |review|
      {
        id: review.id,
        review_title: review.title,
        review_body: review.body,
        safe: review.safe,
        budget_friendly: review.budget_friendly,
        place_id: review.place.id,
        place_name: review.place.name,
        created_at: review.created_at
      }
    end
  end
end
