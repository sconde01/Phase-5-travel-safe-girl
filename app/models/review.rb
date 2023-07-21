class Review < ApplicationRecord
  belongs_to :user
  belongs_to :place

  validates :review, presence: true, length: { maximum: 200 }

end
