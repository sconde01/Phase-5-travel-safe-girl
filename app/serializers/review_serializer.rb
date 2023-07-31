class ReviewSerializer < ActiveModel::Serializer
  # attributes :id, :title, :body, :safe, :budget_friendly, :created_at, :updated_at 
  # # ,:place_name, :place_image

  # belongs_to :user
  # belongs_to :place

  attributes :id, :title, :body, :safe, :budget_friendly, :place_id, :place_name, :place_image, :username, :created_at, :updated_at

  belongs_to :user
  belongs_to :place

  def place_id
    object.place.id
  end

  def place_name
    object.place.name
  end

  def place_image
    object.place.image_url
  end

  def username
    object.user.username
  end
end


