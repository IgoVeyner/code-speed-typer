class ScoreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :time, :strikes, :completed, :user_id
  belongs_to :user
end
