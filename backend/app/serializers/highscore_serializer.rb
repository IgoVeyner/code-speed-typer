class HighscoreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score_id
  belongs_to :score
end
