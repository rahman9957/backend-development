-- 1. Create Database
CREATE DATABASE IF NOT EXISTS rahman_editing;
USE rahman_editing;

-- 2. Create Table Kategori
CREATE TABLE kategori (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_kategori VARCHAR(100) NOT NULL
);

-- 3. Create Table Layanan
CREATE TABLE layanan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_layanan VARCHAR(150) NOT NULL,
    harga INT NOT NULL,
    deskripsi TEXT,
    kategori_id INT,
    FOREIGN KEY (kategori_id) REFERENCES kategori(id) ON DELETE CASCADE
);

-- 4. Create Table Konsultasi
CREATE TABLE konsultasi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    jenis_desain VARCHAR(100),
    pesan TEXT
);

-- 5. Insert Sample Data
INSERT INTO kategori (nama_kategori) VALUES ('Desain Grafis'), ('Digital Printing'), ('Merchandise');

INSERT INTO layanan (nama_layanan, harga, deskripsi, kategori_id) VALUES 
('Desain Logo Premium', 250000, 'Paket desain logo eksklusif dengan 3 konsep.', 1),
('Cetak Spanduk / Meter', 35000, 'Cetak spanduk bahan outdoor kualitas tajam.', 2),
('Cetak Kartu Nama', 50000, 'Cetak kartu nama 1 box isi 100 lembar.', 2);

INSERT INTO konsultasi (nama, whatsapp, jenis_desain, pesan) VALUES 
('Rahman', '081234567890', 'Logo Toko', 'Saya ingin membuat logo untuk toko kopi saya.');
