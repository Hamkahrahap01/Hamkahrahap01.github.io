// File: konten.js - Menyimpan konten berat secara terpisah
const htmlKontenTambahan = `
    <div id="project-3" style="margin-top: 40px; border-top: 2px dashed #e2e8f0; padding-top: 30px;">
        <h3 style="color: #0f172a; font-size: 1.4rem; margin-bottom: 12px;">Keamanan Siber & Akselerasi Performa</h3>
        <p style="text-align: left; line-height: 1.6; color: #475569;">Fokus pada penguatan lapisan keamanan siber dan akselerasi sistem transmisi data untuk menjaga kepercayaan pengguna.</p>
    </div>

    <div id="testimonial-section" style="margin-top: 40px; background: #f8fafc; padding: 25px; border-radius: 15px; border-left: 5px solid #3b82f6;">
        <p style="text-align: left; line-height: 1.6; color: #475569; font-style: italic;">"Ketelitian Hamkahrahap01 dalam arsitektur kode membawa hasil signifikan pada trafik organik kami." - Andi Darmawan</p>
    </div>

    <div id="faq-section" style="margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 30px;">
        <h3 style="color: #0f172a; font-size: 1.4rem; margin-bottom: 20px; text-align: left;">FAQ Portofolio</h3>
        <p style="text-align: left; font-weight: bold;">Bagaimana pendekatan SEO Anda?</p>
        <p style="text-align: left; color: #475569;">Saya menerapkan strategi SEO On-Page mendalam dengan penempatan kata kunci strategis.</p>
    </div>
`;

// Memasukkan seluruh konten di atas ke elemen dengan ID 'extra-content'
document.getElementById('extra-content').innerHTML = htmlKontenTambahan;
