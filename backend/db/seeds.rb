User.destroy_all
Score.destroy_all
Code.destroy_all

Code.create(name: "Map", line: "a.map.with_index {|x,i| x * i}")
Code.create(name: "Compact", line: "[\"a\", nil, \"b\", nil, \"c\", nil].compact")