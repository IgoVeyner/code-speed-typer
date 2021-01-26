class CodeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :line
  has_many :highscores
end
