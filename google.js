// google.js
function performSearch() {
    var searchInput = document.getElementById("searchInput").value;

    // Google arama URL'sini oluştur
    var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchInput);

    // Tarayıcıyı yeni bir sekmede aç
    window.open(googleSearchUrl, "_blank");
}
