-- CREATE DATABASE "react-gallery";

-- Table Structure
CREATE TABLE photos (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(300),
    "title" VARCHAR(100),
    "description" VARCHAR(500),
    "likes" INT DEFAULT 0
);

INSERT INTO photos ("title", "path", "description")
VALUES
    ('Northwoods Minnesota', 'images/nature-2.jpg', 'Fall colors on the North Shore of Minnesota.'),
    ('Ulcinj, Montenegro', 'images/travel-3.jpg', 'Overlook from the Ulcinj Stari Grand hike.'),
    ('Fontainebleau, France', 'images/climbing-2.jpg', 'Skipping along in our favorite forest.'),
    ('Summer In Minnesota', 'images/food-3.jpg', 'Grilling in the backyard.'),
    ('Fontainebleau, France', 'images/climbing-3.jpg', 'Textures in the forest.'),
    ('Milly-la-Foret, France', 'images/food-5.jpg', 'Rotisserie chicken for dinner.'),
    ('Life at the Beach', 'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2019/09/b79raw.jpg', 'When summertime rolls in and the days get hot enough, nothing beats heading to the beach.'),
    ('Meco Beach', 'https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/09/dr9bbn.jpg', 'Another amazing beach in Portugal.'),
    ('Ribeira do Cavalo Beach', 'https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/09/wgwar4.jpg', 'The approach is a 20-minute hike through the national forest.'),
    ('Twin Falls', 'https://www.arkansas.com/sites/default/files/styles/article_x_large/public/2021-12/Triple_Falls_Jasper_ACH_9891_1.jpg?itok=xFS67W78', 'A waterfall near Jasper, Arkansas.'),
    ('Rocklands, South Africa', 'https://climbcation.s3.amazonaws.com/locations/home_thumbs/000/000/128/original/melissa_rocklands2.jpg?1475222004', 'The Cedarburg mountains within the Cape Nature Conservation.'),
    ('Desert Life', 'https://www.timeforkids.com/wp-content/uploads/2017/08/170227012793_hero.jpg?w=1024', 'The life span of camels is 40 years. The young ones are born white in complexion. However, as they keep growing they grow brown skin'),
    ('Sea Turtle', 'https://cdn.mos.cms.futurecdn.net/aDrjRBLrayuq53z5m8S5zk-970-80.jpg.webp', 'Sea turtles, sometimes called marine turtles, are reptiles of the order Testudines and of the suborder Cryptodira.'),
    ('Baby Otters', 'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_800/v1/media/gmg/UNNYXDIF7FGHLMCATJRXSCVHDE.jpg?_a=AJAEtWI0', 'Baby otters delivered at the Jacksonville Zoo.'),
    ('Baby Platypus', 'https://i2.wp.com/www.australiangeographic.com.au/wp-content/uploads/2021/06/179226856_153640433377984_6445247855776959170_n.jpeg?resize=900%2C601&ssl=1', 'A mother typically produces one or two eggs and keeps them warm by holding them between her body and her tail.'),
    ('Barn Owls', 'https://images.newscientist.com/wp-content/uploads/2021/10/29214043/PRI_207378542.jpg?width=800', 'Barn owls keep track of their flight path with place cells.'),
    ('Ocelot', 'https://preview.redd.it/ldy81kv7s9k11.jpg?width=640&crop=smart&auto=webp&s=f2f2897eb8e8fcee5d4b6da625d9344def467c49', 'The ocelot is a medium-sized spotted wild cat that reaches 40–50 cm at the shoulders and weighs between 8 and 15.5 kg.');