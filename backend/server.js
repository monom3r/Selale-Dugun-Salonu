require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.post("/submit-form", async (req, res) => {
    try {
        const formData = {
            access_key: process.env.WEB3FORMS_ACCESS_KEY, 
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };

        console.log("Gönderilen Veri:", JSON.stringify(formData, null, 2));

        const response = await axios.post("https://api.web3forms.com/submit", formData, {
            headers: { "Content-Type": "application/json" }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Hata:", error.response ? error.response.data : error.message);
        res.status(500).json({ success: false, message: "Form gönderilirken hata oluştu." });
    }
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});




