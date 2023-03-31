//An index file that returns a function that attaches all your routes to your app your routes will be defined in routes.js
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/blob/master/lecture_05/routes/index.js
import exp from "constants";
import {router} from "./routes.js";

 const configRoutes =(app)=>{
    app.use("/", router);
    app.use("*",async (req, res)=>{
        res.status(404).json({Error: "Page not found"});
    })
}

export default configRoutes;
