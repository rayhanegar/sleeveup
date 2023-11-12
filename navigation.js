document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("exploreBtn").addEventListener("click", function() {
        try {
            window.location.href = "explore.html"
        } catch (error) {
            console.error("Error opening explore.html:", error);
        }
    });
    document.getElementById("sleeveUpNav").addEventListener("click", function() {
        try {
            window.location.href = "homepage.html"
        } catch (error) {
            console.error("Error opening explore.html:", error);
        }
    })
});
