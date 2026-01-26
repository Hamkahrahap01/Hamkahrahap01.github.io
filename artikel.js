// File: artikel.js - Artikel Mendalam & Navigasi
const kontenArtikel = `
    <div id="artikel-1" style="margin-top: 50px; border-top: 3px solid #3b82f6; padding-top: 30px;">
        <h2 style="color: #0f172a; text-align: left;">Pentingnya Keamanan Siber 2026</h2>
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" style="width: 100%; border-radius: 12px; margin: 20px 0;">
        <p style="text-align: left; line-height: 1.8; color: #475569;">Konten mendalam mengenai proteksi data dan enkripsi untuk keamanan digital jangka panjang.</p>
    </div>

    <div id="artikel-2" style="margin-top: 50px; border-top: 3px solid #10b981; padding-top: 30px;">
        <h2 style="color: #0f172a; text-align: left;">Optimasi Digital untuk UMKM</h2>
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" style="width: 100%; border-radius: 12px; margin: 20px 0;">
        <p style="text-align: left; line-height: 1.8; color: #475569;">Strategi efektif bagi pelaku usaha kecil untuk bersaing di pasar global melalui SEO organik.</p>
    </div>

    <div id="artikel-3" style="margin-top: 50px; border-top: 3px solid #f59e0b; padding-top: 30px;">
        <h2 style="color: #0f172a; text-align: left;">Peluang AI di Tahun 2026</h2>
        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" style="width: 100%; border-radius: 12px; margin: 20px 0;">
        <p style="text-align: left; line-height: 1.8; color: #475569;">Eksplorasi kecerdasan buatan dalam meningkatkan efisiensi kerja dan inovasi teknologi terbaru.</p>
    </div>

    <a href="#" style="position: fixed; bottom: 85px; right: 20px; background-color: #0f172a; color: white; border-radius: 50%; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 9998; text-decoration: none; font-size: 20px;">↑</a>
`;

document.getElementById('daftar-artikel').innerHTML = kontenArtikel;
