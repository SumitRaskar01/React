// server.js
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());            
app.use(express.json());   

app.get("/api", (req,res) =>{
    res.json("Server Working")
})


app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;


  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("New contact submission:", { name, email, message });


  res.json({ success: "Message received. We'll get back to you soon!" });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
