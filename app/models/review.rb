class Review < ApplicationRecord
  belongs_to :user
  belongs_to :place

  
  validates :title, presence: true
  validates :body, presence: true, length: { maximum: 500 }
  validates :safe, inclusion: [true, false]
  validates :budget_friendly, inclusion: [true, false]
  
  # def booleanValid
  #   value.present? || [true, false].include?(boolean_value)
  # end

end
