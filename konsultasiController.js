const db = require('../config/db');

// Get all konsultasi
const getAllKonsultasi = (req, res) => {
    const query = 'SELECT * FROM konsultasi';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json(results);
    });
};

// Get single konsultasi by ID
const getKonsultasiById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM konsultasi WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Konsultasi tidak ditemukan' });
        res.json(results[0]);
    });
};

// Create konsultasi
const createKonsultasi = (req, res) => {
    const { nama, whatsapp, jenis_desain, pesan } = req.body;
    const query = 'INSERT INTO konsultasi (nama, whatsapp, jenis_desain, pesan) VALUES (?, ?, ?, ?)';
    db.query(query, [nama, whatsapp, jenis_desain, pesan], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ id: results.insertId, ...req.body });
    });
};

// Update konsultasi
const updateKonsultasi = (req, res) => {
    const { id } = req.params;
    const { nama, whatsapp, jenis_desain, pesan } = req.body;
    const query = 'UPDATE konsultasi SET nama = ?, whatsapp = ?, jenis_desain = ?, pesan = ? WHERE id = ?';
    db.query(query, [nama, whatsapp, jenis_desain, pesan, id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Konsultasi tidak ditemukan' });
        res.json({ message: 'Konsultasi berhasil diupdate' });
    });
};

// Delete konsultasi
const deleteKonsultasi = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM konsultasi WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Konsultasi tidak ditemukan' });
        res.json({ message: 'Konsultasi berhasil dihapus' });
    });
};

module.exports = { 
    getAllKonsultasi, 
    getKonsultasiById, 
    createKonsultasi, 
    updateKonsultasi, 
    deleteKonsultasi 
};
