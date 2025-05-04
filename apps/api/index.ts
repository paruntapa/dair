import express from "express";

const app = express();

app.use(express.json());

// Create a new place
app.post("/api/v1/place", (req, res) => {

})

// Get air quality for a place
app.get("/api/v1/place/air-quality", (req,res) => {

})

// Fetch all placess
app.get("/api/v1/places", (req,res) => {

})

// Delete a place
app.delete("/api/v1/place/", (req,res) => {

})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});