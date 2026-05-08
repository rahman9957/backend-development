const db = require('../config/db');

// Get all kategori
const getAllKategori = (req, res) => {
    const query = 'SELECT * FROM kategori';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json(results);
    });
};

// Get single kategori by ID
const getKategoriById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM kategori WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Kategori tidak ditemukan' });
        res.json(results[0]);
    });
};

// Create kategori
const createKategori = (req, res) => {
    const { nama_kategori } = req.body;
    const query = 'INSERT INTO kategori (nama_kategori) VALUES (?)';
    db.query(query, [nama_kategori], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ id: results.insertId, nama_kategori });
    });
};

// Update kategori
const updateKategori = (req, res) => {
    const { id } = req.params;
    const { nama_kategori } = req.body;
    const query = 'UPDATE kategori SET nama_kategori = ? WHERE id = ?';
    db.query(query, [nama_kategori, id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Kategori tidak ditemukan' });
        res.json({ message: 'Kategori berhasil diupdate' });
    });
};

// Delete kategori
const deleteKategori = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM kategori WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Kategori tidak ditemukan' });
        res.json({ message: 'Kategori berhasil dihapus' });
    });
};

module.exports = { 
    getAllKategori, 
    getKategoriById, 
    createKategori, 
    updateKategori, 
    deleteKategori 
};
