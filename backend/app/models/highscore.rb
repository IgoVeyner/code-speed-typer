class Highscore < ApplicationRecord
  belongs_to :score
  belongs_to :code
end
