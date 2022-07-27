# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#

puts "Seeding..!"

User.create(username: "test1", password: "test1", email: "test1@gmail.com", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png", name: "test1", last_name: "test1")
User.create(username: "test2", password: "test2", email: "test2@gmail.com", avatar: "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png", name: "test2", last_name: "test2")
User.create(username: "test3", password: "test3", email: "test3@gmail.com", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfUnCIPVTtIm4RpwIrOehAhXxNXeuKY2TZQ&usqp=CAU", name: "test3", last_name: "test3")

Witch.create(type_of_witch: "Witch of Woe", name: "nyx", image: "https://cryptocoven.s3.amazonaws.com/nyx.png", description: "You are a WITCH of the highest order. You are borne of chaos that gives the night shape. Your magic spawns from primordial darkness. You are called oracle by those wise enough to listen. ALL THEOLOGY STEMS FROM THE TERROR OF THE FIRMAMENT!", tokenID: "1", externalURL: "https://www.cryptocoven.xyz/witches/1")
Witch.create(type_of_witch: "necromancer", name: "antimony katana", image: "https://cryptocoven.s3.amazonaws.com/bb12f3612ccf17c55783736c958c94a9.png", description: "You are a WITCH enshrined in gilded power. You collect mushrooms for tea and keep powerful chickens. Your magic spawns from ladybug wings. You can smell death in all its putrid sweetness. RUN ACROSS THE PLAIN!", tokenID: "100", externalURL: "https://www.cryptocoven.xyz/witches/100")
Witch.create(type_of_witch: "hag", name: "crone orchard", image: "https://cryptocoven.s3.amazonaws.com/40dd579e80b524c5774aa8cb003faca6.png", description: "You are a WITCH made of fresh-cut grass. Your consciousness is heavy and vast. Your magic spawns from mop water and muffin tops. You claim white hairs and whispers from those who visit your home. GO FORTH AND FROLICK!", tokenID: "1011", externalURL: "https://www.cryptocoven.xyz/witches/1011")

Like.create(witch_id: 1, user_id: 1)
Like.create(witch_id: 2, user_id: 1)
Like.create(witch_id: 3, user_id: 1)
Like.create(witch_id: 2, user_id: 2)
Like.create(witch_id: 2, user_id: 3)
puts "Done seeding! :)"
