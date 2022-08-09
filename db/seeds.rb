# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#

puts "Seeding..!"

User.create(username: "test1", password: "test1", email: "test1@gmail.com")
User.create(username: "test2", password: "test2", email: "test2@gmail.com")
User.create(username: "test3", password: "test3", email: "test3@gmail.com")
User.create(username: "test4", password: "test4", email: "test4@gmail.com")
User.create(username: "test5", password: "test5", email: "test5@gmail.com")
User.create(username: "test6", password: "test6", email: "test6@gmail.com")

Witch.create(name: "nyx", image: "https://cryptocoven.s3.amazonaws.com/nyx.png",tokenID: "1")
Witch.create(name: "antimony katana", image: "https://cryptocoven.s3.amazonaws.com/bb12f3612ccf17c55783736c958c94a9.png",tokenID: "100")
Witch.create(name: "crone orchard", image: "https://cryptocoven.s3.amazonaws.com/40dd579e80b524c5774aa8cb003faca6.png", tokenID: "1011")
Witch.create(name: "mistress gallium", image: "https://cryptocoven.s3.amazonaws.com/35b63b7ac602d6a70fa4f829343bb042.png", tokenID: "1104")
Witch.create(name: "jasmine of the woods", image: "https://cryptocoven.s3.amazonaws.com/cbdab8464f4c305b3f596083faf70dca.png", tokenID: "1092")


Like.create(witch_id: 1, user_id: 1)
Like.create(witch_id: 1, user_id: 2)
Like.create(witch_id: 1, user_id: 3)
Like.create(witch_id: 1, user_id: 4)
Like.create(witch_id: 1, user_id: 6)
Like.create(witch_id: 1, user_id: 5)
Like.create(witch_id: 4, user_id: 1)
Like.create(witch_id: 4, user_id: 2)
Like.create(witch_id: 4, user_id: 3)
Like.create(witch_id: 4, user_id: 4)
Like.create(witch_id: 4, user_id: 5)
Like.create(witch_id: 3, user_id: 1)
Like.create(witch_id: 3, user_id: 2)
Like.create(witch_id: 3, user_id: 3)
Like.create(witch_id: 3, user_id: 4)
Like.create(witch_id: 3, user_id: 5)
Like.create(witch_id: 5, user_id: 1)
Like.create(witch_id: 5, user_id: 2)
Like.create(witch_id: 5, user_id: 3)
Like.create(witch_id: 5, user_id: 4)
Like.create(witch_id: 5, user_id: 5)



puts "Done seeding! :)"
