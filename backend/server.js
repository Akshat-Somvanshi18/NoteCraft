import express from "express";
import dotenv from "dotenv";
import {notes} from "./data/notes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000 ;

app.get("/",(req,res)=>{
    res.send("API is running......");
});

app.get("/notes",(req,res)=>{
    res.json(notes);
});

app.get("/notes/:id",(req,res)=>{
    const note = notes.find((n)=>n._id == req.params.id);
    res.send(note);
});

app.listen(PORT,()=>{
    console.log(`Listening to the port number ${PORT}`);
});