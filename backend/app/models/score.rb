class Score < ApplicationRecord
  belongs_to :code
  belongs_to :user

  validates :time, numericality: { greater_than_or_equal_to: 0 }
  validates :strikes, numericality: { greater_than_or_equal_to: 0 }
end
