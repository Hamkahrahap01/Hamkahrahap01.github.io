// File: artikel.js - Artikel Mendalam dengan Daftar Isi & Navigasi Pintas
const kontenArtikel = `
    <div id="artikel-1" style="margin-top: 50px; border-top: 4px solid #3b82f6; padding-top: 30px;">
        <h2 style="color: #0f172a; text-align: left; font-size: 1.6rem;">Pentingnya Keamanan Siber dalam Transformasi Digital 2026</h2>
        
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #1e293b;">📌 Daftar Isi:</p>
            <ul style="margin: 0; padding-left: 20px; color: #3b82f6; font-size: 0.9rem; line-height: 1.6;">
                <li>Urgensi Perlindungan Data Pribadi</li>
                <li>Teknologi Enkripsi Modern 2026</li>
                <li>Langkah Mitigasi Serangan Siber</li>
            </ul>
        </div>

        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" style="width: 100%; border-radius: 12px; margin-bottom: 20px;">
        <p style="text-align: left; line-height: 1.8; color: #475569;">
            Keamanan siber adalah pilar utama dalam membangun kepercayaan di dunia digital. Hamkahrahap01 memastikan setiap baris kode yang dibangun memiliki lapisan proteksi untuk menjaga privasi pengguna.
        </p>
    </div>

    <div id="artikel-2" style="margin-top: 50px; border-top: 4px solid #10b981; padding-top: 30px;">
        <h2 style="color: #0f172a; text-align: left; font-size: 1.6rem;">Strategi Optimasi Website untuk Pertumbuhan UMKM</h2>
        
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #1e293b;">📌 Daftar Isi:</p>
            <ul style="margin: 0; padding-left: 20px; color: #10b981; font-size: 0.9rem; line-height: 1.6;">
                <li>Pentingnya Mobile-First Design</li>
                <li>Optimasi Kecepatan Loading di HP</li>
                <li>Memanfaatkan SEO Lokal secara Gratis</li>
            </ul>
        </div>

        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" style="width: 100%; border-radius: 12px; margin-bottom: 20px;">
        <p style="text-align: left; line-height: 1.8; color: #475569;">
            Bagi UMKM, kehadiran website yang cepat dan responsif adalah kunci untuk menjangkau pasar yang lebih luas tanpa biaya iklan yang membengkak.
        </p>
    </div>

    <div id="artikel-3" style="margin-top: 50px; border-top: 4px solid #f59e0b; padding-top: 30px;">
        <h2 style="color: #0f172a; text-align: left; font-size: 1.6rem;">Peluang Implementasi Artificial Intelligence di Tahun 2026</h2>
        
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #1e293b;">📌 Daftar Isi:</p>
            <ul style="margin: 0; padding-left: 20px; color: #f59e0b; font-size: 0.9rem; line-height: 1.6;">
                <li>Evolusi AI dalam Pengembangan Web</li>
                <li>Otomatisasi Tugas Rutin dengan AI</li>
                <li>Masa Depan Interaksi Manusia & Mesin</li>
            </ul>
        </div>

        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" style="width: 100%; border-radius: 12px; margin-bottom: 20px;">
        <p style="text-align: left; line-height: 1.8; color: #475569;">
            Implementasi AI memungkinkan terciptanya solusi yang lebih personal dan cerdas, membuka peluang baru bagi inovasi teknologi yang lebih inklusif.
        </p>
    </div>

    <a href="#" style="position: fixed; bottom: 85px; right: 20px; background-color: #0f172a; color: white; border-radius: 50%; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 9998; text-decoration: none; font-size: 20px;">↑</a>
`;

document.getElementById('daftar-artikel').innerHTML = kontenArtikel;
