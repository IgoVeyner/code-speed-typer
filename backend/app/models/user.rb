class User < ApplicationRecord
  has_many :scores
  has_many :codes, through: :scores
end
