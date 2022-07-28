# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#

puts "Seeding..!"

User.create(username: "test1", password: "test1", email: "test1@gmail.com", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png", name: "test1", last_name: "test1")
User.create(username: "test2", password: "test2", email: "test2@gmail.com", avatar: "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png", name: "test2", last_name: "test2")
User.create(username: "test3", password: "test3", email: "test3@gmail.com", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfUnCIPVTtIm4RpwIrOehAhXxNXeuKY2TZQ&usqp=CAU", name: "test3", last_name: "test3")

Witch.create(name: "nyx", image: "https://cryptocoven.s3.amazonaws.com/nyx.png",tokenID: "1")
Witch.create(name: "antimony katana", image: "https://cryptocoven.s3.amazonaws.com/bb12f3612ccf17c55783736c958c94a9.png",tokenID: "100")
Witch.create(name: "crone orchard", image: "https://cryptocoven.s3.amazonaws.com/40dd579e80b524c5774aa8cb003faca6.png", tokenID: "1011")

Like.create(witch_id: 1, user_id: 1)
Like.create(witch_id: 2, user_id: 1)
Like.create(witch_id: 3, user_id: 1)
Like.create(witch_id: 2, user_id: 2)
Like.create(witch_id: 2, user_id: 3)
puts "Done seeding! :)"
