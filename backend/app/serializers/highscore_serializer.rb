class HighscoreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :code_id
  belongs_to :code
end
