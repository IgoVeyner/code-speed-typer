User.destroy_all
Score.destroy_all
Code.destroy_all

# Here for quick testing purposes
# Code.create(name: "", line: "a")

Code.create(name: "Map", line: "a.map.with_index {|x,i| x * i}")
Code.create(name: "Compact", line: "[\"a\", nil, \"b\", nil, \"c\", nil].compact")
Code.create(name: "New", line: "Array.new(4) {Hash.new}")
Code.create(name: "Unshift", line: "arr.unshift(0)")
Code.create(name: "Count", line: "arr.count(2)")
Code.create(name: "Delete If", line: "scores.delete_if {|score| score < 80 }")
Code.create(name: "Difference", line: "[ 1, 1, 2, 2, 3, 3, 4, 5 ].difference([ 1, 2, 4 ])")
Code.create(name: "Drop While", line: "a.drop_while {|i| i < 3 }")
Code.create(name: "Empty?", line: "[].empty?")
Code.create(name: "Fill", line: "a.fill(\"x\")")
Code.create(name: "Include?", line: "a.include?(\"z\")")
Code.create(name: "Intersection", line: "[ \"a\", \"b\", \"z\" ].intersection([ \"a\", \"b\", \"c\" ], [ \"b\" ])")
Code.create(name: "Join", line: "[ \"a\", \"b\", \"c\" ].join(\"-\")")
Code.create(name: "Keep If", line: "a.keep_if {|v| v =~ /[aeiou]/ }")
Code.create(name: "Max", line: "ary.max(2) {|a, b| a.length <=> b.length }")
Code.create(name: "Min", line: "ary.min(2) {|a, b| a.length <=> b.length }")
Code.create(name: "Product", line: "[1,2,3].product([4,5])")
Code.create(name: "Rassoc", line: "a.rassoc(\"two\")")
