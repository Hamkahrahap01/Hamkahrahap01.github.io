// File: artikel.js - Daftar Isi Aktif & Navigasi Smooth
const kontenArtikel = `
    <div id="artikel-1" style="margin-top: 50px; border-top: 4px solid #3b82f6; padding-top: 30px;">
        <h2 style="color: #0f172a; text-align: left; font-size: 1.6rem;">Pentingnya Keamanan Siber dalam Transformasi Digital 2026</h2>
        
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #1e293b;">📌 Daftar Isi:</p>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; line-height: 1.6;">
                <li><a href="#sub1-1" style="text-decoration: none; color: #3b82f6;">Urgensi Perlindungan Data Pribadi</a></li>
                <li><a href="#sub1-2" style="text-decoration: none; color: #3b82f6;">Teknologi Enkripsi Modern 2026</a></li>
            </ul>
        </div>

        <h3 id="sub1-1" style="color: #1e293b; font-size: 1.2rem; margin-top: 20px;">Urgensi Perlindungan Data Pribadi</h3>
        <p style="text-align: left; line-height: 1.8; color: #475569;">
            Hamkahrahap01 memastikan setiap baris kode memiliki lapisan proteksi untuk menjaga privasi pengguna secara mendalam.
        </p>

        <h3 id="sub1-2" style="color: #1e293b; font-size: 1.2rem; margin-top: 20px;">Teknologi Enkripsi Modern 2026</h3>
        <p style="text-align: left; line-height: 1.8; color: #475569;">
            Implementasi protokol keamanan terbaru sangat krusial untuk menghadapi tantangan siber yang semakin kompleks.
        </p>
    </div>

    <div id="artikel-2" style="margin-top: 50px; border-top: 4px solid #10b981; padding-top: 30px;">
        <h2 style="color: #0f172a; text-align: left; font-size: 1.6rem;">Strategi Optimasi Website untuk Pertumbuhan UMKM</h2>
        
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #1e293b;">📌 Daftar Isi:</p>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; line-height: 1.6;">
                <li><a href="#sub2-1" style="text-decoration: none; color: #10b981;">Pentingnya Mobile-First Design</a></li>
                <li><a href="#sub2-2" style="text-decoration: none; color: #10b981;">Optimasi Kecepatan Loading</a></li>
            </ul>
        </div>

        <h3 id="sub2-1" style="color: #1e293b; font-size: 1.2rem; margin-top: 20px;">Pentingnya Mobile-First Design</h3>
        <p style="text-align: left; line-height: 1.8; color: #475569;">
            Mengingat tingginya pengguna smartphone, desain yang responsif adalah kunci utama suksesnya sebuah website UMKM.
        </p>

        <h3 id="sub2-2" style="color: #1e293b; font-size: 1.2rem; margin-top: 20px;">Optimasi Kecepatan Loading</h3>
        <p style="text-align: left; line-height: 1.8; color: #475569;">
            Website yang cepat tidak hanya disukai pengunjung, tetapi juga mendapat prioritas lebih tinggi dari algoritma Google.
        </p>
    </div>

    <a href="#" style="position: fixed; bottom: 85px; right: 20px; background-color: #0f172a; color: white; border-radius: 50%; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 9998; text-decoration: none; font-size: 20px;">↑</a>
`;

document.getElementById('daftar-artikel').innerHTML = kontenArtikel;
