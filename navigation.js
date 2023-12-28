document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("exploreBtn").addEventListener("click", function() {
        try {
            window.location.href = "explore.html";
        } catch (error) {
            console.error("Error opening explore.html:", error);
        }
    });
    
    document.getElementById("sleeveUpNav").addEventListener("click", function() {
        try {
            window.location.href = "homepage.html";
        } catch (error) {
            console.error("Error opening homepage.html:", error);
        }
    });

    document.getElementById("perusahaanBtn").addEventListener("click", function() {
        try {
            window.location.href = "company.html";
        } catch (error) {
            console.error("Error opening company.html:", error);
        }
    });

    document.getElementById("sinaustudioBtn").addEventListener("click", function() {
        try {
            window.location.href = "sinau.html";
        } catch (error) {
            console.error("Error opening sinau.html:", error);
        }
    })
});
