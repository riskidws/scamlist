export async function onRequestGet() {
    // Ini adalah API Google Sheets rahasia Anda. 
    // Karena ini berjalan di server Cloudflare, pengunjung TIDAK AKAN bisa melihat link ini.
    const GOOGLE_API_URL = "https://script.google.com/macros/s/AKfycbw3N2MJgxpEImx3fnRemFUD8NL-yzFy0kdaarceoh6SuGFL2HLbvo1-tLMYSwy29BQMcA/exec";
    
    try {
        const response = await fetch(GOOGLE_API_URL);
        const data = await response.json();
        
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
                // Mengizinkan website Anda membaca data ini
                "Access-Control-Allow-Origin": "*", 
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Gagal mengambil data server" }), { 
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
