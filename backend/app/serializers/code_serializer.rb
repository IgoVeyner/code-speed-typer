class CodeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :line
end
