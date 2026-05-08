const db = require('../config/db');

// Get all layanan with JOIN kategori
const getAllLayanan = (req, res) => {
    const query = `
        SELECT layanan.*, kategori.nama_kategori 
        FROM layanan 
        JOIN kategori ON layanan.kategori_id = kategori.id
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json(results);
    });
};

// Get single layanan by ID
const getLayananById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM layanan WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Layanan tidak ditemukan' });
        res.json(results[0]);
    });
};

// Create layanan
const createLayanan = (req, res) => {
    const { nama_layanan, harga, deskripsi, kategori_id } = req.body;
    const query = 'INSERT INTO layanan (nama_layanan, harga, deskripsi, kategori_id) VALUES (?, ?, ?, ?)';
    db.query(query, [nama_layanan, harga, deskripsi, kategori_id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ id: results.insertId, ...req.body });
    });
};

// Update layanan
const updateLayanan = (req, res) => {
    const { id } = req.params;
    const { nama_layanan, harga, deskripsi, kategori_id } = req.body;
    const query = 'UPDATE layanan SET nama_layanan = ?, harga = ?, deskripsi = ?, kategori_id = ? WHERE id = ?';
    db.query(query, [nama_layanan, harga, deskripsi, kategori_id, id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Layanan tidak ditemukan' });
        res.json({ message: 'Layanan berhasil diupdate' });
    });
};

// Delete layanan
const deleteLayanan = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM layanan WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Layanan tidak ditemukan' });
        res.json({ message: 'Layanan berhasil dihapus' });
    });
};

module.exports = { 
    getAllLayanan, 
    getLayananById, 
    createLayanan, 
    updateLayanan, 
    deleteLayanan 
};
