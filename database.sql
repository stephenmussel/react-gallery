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
    ('Milly-la-Foret, France', 'images/food-5.jpg', 'Rotisserie chicken for dinner.');