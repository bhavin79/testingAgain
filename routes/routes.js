//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes

/*
import the router and create the follow routes using the GET http method

'/aboutme';
'/mystory';
'/educationhistory'

export the router */

import { Router} from "express";
const router = Router();

router.route("/aboutme").get( async(req,res) =>{
    try {
        const myInformation = {
            "firstName": "Bhavin Pragji",
            "lastName": "Patanwadia",      
            "biography": "Born and raised in Mumbai, India, Bhavin was always fascinated by technology from a young age. As a child, he spent most of his free time tinkering with computers and learning about their inner workings. He had a curious and analytical mind and was always asking questions about how things worked. \nGrowing up, Bhavin also developed a passion for music. He enjoyed listening to a wide variety of genres, from classic rock to electronic music. Recently, he decided to take his interest in music to the next level and started learning to play the guitar.",
            "favoriteMovies": ["Batman", "Little Forest", "Avengers", "The Man From Toronto"],
            "hobbies": ["Reading", "Coding", "Playing Guitar"],
            "fondestMemory": "Sorry, need authorization to access"
          };
          res.status(200).json(myInformation);
    } catch (error) {
        res.status(500).json({"Error": error});
    }
    
});

router.route("/mystory").get(async(req, res)=>{
    try {
        
        const myStory = {
            "storyTitle": "First True Love",
            "storyGenre": "Fiction, Love",
            "story": "Lila had never left her small town before, but when she visited New York City for the first time, everything changed.\nThe city's energy, lights, and sounds captivated her. She wandered through Central Park, explored museums, and ate at hole-in-the-wall restaurants. \nThe city seemed to hold endless possibilities, and Lila fell in love. As she stood on the observation deck of the Empire State Building, gazing out at the skyline, she knew she had to come back. \nShe left a piece of her heart in New York City and couldn't wait to return someday."
          };
          res.status(200).json(myStory);

    } catch (error) {
        res.status(500).json({"Error": error})
    }
});

router.route("/educationhistory").get(async(req, res )=>{
    try {
        const myEducationHistory =[
            {
              "schoolName": "NMIMS University",
              "degreeEarned": "BTech in Information Technology",
              "numberOfYearsAttended": 3,
              "favoriteClasses": ["Data Structure and Algorithms", "Human Computer Interaction", "Computer Networks", "Mobile Application Development"],
              "favoriteSchoolMemory": "My fondest memory from my bachelors is  LOCKDOWN!!!"
            },
            {
                "schoolName": "MSBTE",
                "degreeEarned": "Diploma in Computer Engineering",
                "numberOfYearsAttended": 3,
                "favoriteClasses": [ "Java Programming", "Data Structure and Algorithms", "Computer Graphics", "Software testing"],
                "favoriteSchoolMemory": "Traditional day at school where everyone brought & shared their regional homeMade food. My Favourite is Khaman Dhokla"
              },
              {
                "schoolName": "Thakur school",
                "degreeEarned": "H.S. Diploma",
                "numberOfYearsAttended": 4,
                "favoriteClasses": [ "Physics", "Geometry", "Algebra"],
                "favoriteSchoolMemory": "Practing and performing a dance at the Annual Day 2015. The fondest part was practicing and having fun with my BOIS"
              }
        ];
        res.status(200).json(myEducationHistory);
    } catch (error) {
        res.status(500).json({"Error": error});
    }

});
export {router};