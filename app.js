const express = require('express');
const cors = require('cors');
require('dotenv').config();

const kategoriRoutes = require('./routes/kategoriRoutes');
const layananRoutes = require('./routes/layananRoutes');
const konsultasiRoutes = require('./routes/konsultasiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Main Route
app.get('/', (req, res) => {
    res.json({ message: 'Selamat datang di API Rahman Editing' });
});

// Routes
app.use('/kategori', kategoriRoutes);
app.use('/layanan', layananRoutes);
app.use('/konsultasi', konsultasiRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
