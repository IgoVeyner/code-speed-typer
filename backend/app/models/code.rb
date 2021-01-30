class Code < ApplicationRecord
  has_many :scores
  has_many :users, through: :scores
  has_many :highscores

  def self.get_random
    count = Code.count
    num = rand(count) + 1
    Code.find_by_id(num)
  end
end
