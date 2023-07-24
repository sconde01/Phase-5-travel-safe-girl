class Review < ApplicationRecord
  belongs_to :user
  belongs_to :place

  validates :title, presence: true
  validates :body, presence: true, length: { maximum: 500 }
  validates :safe, presence: true
  validates :budget_friendly, presence: true

end
