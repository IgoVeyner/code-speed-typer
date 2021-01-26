class Code < ApplicationRecord
  has_many :scores
  has_many :users, through: :scores
  has_many :highscores
end
