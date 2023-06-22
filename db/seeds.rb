puts 'Seeding 🌱'
Review.destroy_all
User.destroy_all
Place.destroy_all
Business.destroy_all

place1 = Place.create(name: "Chichen Itza", description: "Chichén Itzá is one of Mexico's most important cultural landmarks, famous for its treasure trove of pre-Columbian architecture and artifacts", image_url: "https://www.chichenitza.com/public/assets/img/chichen-itza-02.jpg", category: "Landmark", location: "Yucatan, Mexico", safety_features: "open public space, other solo female travelers")
place2 = Place.create(name: "Na Nirand Romantic Boutique Resort", description: "A charming hideaway nestled in the heart of Chiang Mai. Legendary stories combined with the history of the Charoenprathet road area, the location of the resort, are the inspiration behind the birth of this beautiful gem. The resort is just 5 minutes away from the Night Bazaar, 15 minutes by car to the Chiang Mai International Airport.", image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/20/5c/f3/photo0jpg.jpg?w=1400&h=-1&s=1", category: "Hotel", location: "Chiang Mai, Thailand", safety_features: "public open space, 24hr security and staff")
place3 = Place.create(name: "Grand Circle Island and Haleiwa 9 Hour Tour"  , description: "Ideal for first-time visitors, or those with limited time, this full-day tour takes you all around Oahu, making sure that you don't miss a thing. You'll see top attractions including Diamond Head, Hanauma Bay, Halona Blowhole, the Byodo-In Temple and the surfing beaches of the North Shore. Plus, you'll have time to explore Haleiwa town.", image_url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/94/c0/0d.jpg", category: "Tours", location: "Honolulu, Hawaii, USA", safety_features: "open public space, other solo female travelers")
place4 = Place.create(name: "Reykjavik Food Walk-Local Foodie Adventure in Iceland", description: "Explore a variety of eateries, including restaurants and food trucks, passing by top landmarks such as Parliament House and Hallgrimskirkja along the way. Tastings may include Icelandic hot dogs, cheeses, homemade ice cream, and lots more.", image_url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/fe/66/0a.jpg", category: "Tours", location: "101 Reykjavík, Iceland", safety_features: "open public space, other solo female travelers")
place5 = Place.create(name: "El Compadre", description: "Authentic Mexican food with a great vibe!", image_url: "https://lh3.googleusercontent.com/p/AF1QipND71dwOQ3CSl5Pojh6xDsqPWo_sAoEhgaAxjSv=s1360-w1360-h1020", category: "Restaurant", location: "Los Angeles, CA, USA", safety_features: "open public space, plenty of security, female staff")


places = [place1, place2, place3, place4, place5]


user1 = User.create(username: "Lizzie1", email: "Lizzie@email.com", password: "1234" )
user2 = User.create(username: "Francis2", email: "Franny@email.com", password: "Fran" )
user3 = User.create(username: "Barb3", email: "Barbara@email.com", password: "1234" )
user4 = User.create(username: "Jessica4", email: "Jess@email.com", password: "1234" )
user5 = User.create(username: "Heather5", email: "Heather@email.com", password: "1234" )
user6 = User.create(username: "Eunice6", email: "Eunice@email.com", password: "1234" )

users = [user1, user2, user3, user4, user5, user6]

business1 = Business.create(name: "QM Resorts", image_url: "https://qmresorts.com/wp-content/uploads/2021/07/QM-Resorts-New-Logo.jpg", category: "Hotel" )
business2 = Business.create(name: "Manumission Tour Co.", image_url: "https://static.wixstatic.com/media/11b204_9b16c70550994221b97a68311778de12~mv2.jpg", category: "Tours" )
business3 = Business.create(name: "TWS Restaurant Corporation", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqat8kLozwZzmAWd7-StGZo7W9BL1ZSBrNppCxPi5SRiy2YD3WvyeSHq8ErWyBKqbZPgo&usqp=CAU", category: "Restaurant" )

businesses = [business1, business2, business3]


reviews = ["This place exceeded my expectations!",
"I'm extremely satisfied with this place; it's definitely worth every penny.", "A remarkable place that offers excellent value for the price. I felt safe every step of the way.", 
"I can't imagine going anywhere else. I met people that are now life time friends.",
 "Every girl should go here! It was great! Everyone was welcoming. Met other girlies traveling, awesome!",
"It was okay, I did feel safe, but didn't properly plan for all of the activities.",
"The functionality and versatility of this place are truly impressive.", "This place has revolutionized the way I travel.",
"Highly recommended for anyone looking for a reliable and efficient place to visit.",
"The quality and craftsmanship of this place are top-notch.",
"I have no regrets about visiting this place; it delivers exceptional results.",
"An exceptional place to visit that lives up to its promises and delivers beyond expectations.",
"I'm thoroughly impressed with the features and service of this place.",
"This place has saved me a lot of time and effort; it's incredibly convenient.",
"The customer support at this place is outstanding; they go above and beyond to ensure satisfaction.",
"I've recommended this place to all my friends and family; it's truly worth it.",
"This place has exceeded my expectations in every aspect; I couldn't be happier.",
"If you're in search of a reliable and high-quality place to visit, look no further; this one ticks all the boxes."]

review1 = Review.create(title: "LOVED", body: reviews[0], safe: true, budget_friendly: true, place_id: places.sample.id, user_id: users.sample.id)
review2 = Review.create(title: "Everything!", body: reviews[0], safe: true, budget_friendly: true, place_id: places.sample.id, user_id: users.sample.id)
review3 = Review.create(title: "Have to visit", body: reviews[0], safe: true, budget_friendly: false, place_id: places.sample.id, user_id: users.sample.id)
review4 = Review.create(title: "Amazing place!", body: reviews[0], safe: true, budget_friendly: true, place_id: places.sample.id, user_id: users.sample.id)
review5 = Review.create(title: "MOST FUN", body: reviews[0], safe: true, budget_friendly: true, place_id: places.sample.id, user_id: users.sample.id)
review6 = Review.create(title: "BE SURE TO PACK", body: reviews[0], safe: true, budget_friendly: false, place_id: places.sample.id, user_id: users.sample.id)
review7 = Review.create(title: "Awesome place!", body: reviews[0], safe: true, budget_friendly: true, place_id: places.sample.id, user_id: users.sample.id)
review8 = Review.create(title: "Oh, Yeah!", body: reviews[0], safe: true, budget_friendly: true, place_id: places.sample.id, user_id: users.sample.id)






puts 'Seeding complete! ✅'