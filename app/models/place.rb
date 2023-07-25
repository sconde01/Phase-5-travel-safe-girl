class Place < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  belongs_to :business

  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true, length: { maximum: 500 }
  validates :image_url, presence: true
  validates :safety_features, presence: true, length: { maximum: 100 }
  
end
