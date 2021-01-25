class ScoreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :time, :strikes, :completed
end
