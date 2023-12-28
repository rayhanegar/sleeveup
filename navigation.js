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
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error opening index.html:", error);
        }
    });

    document.getElementById("perusahaanBtn").addEventListener("click", function() {
        try {
            window.location.href = "company.html";
        } catch (error) {
            console.error("Error opening company.html:", error);
        }
    });

    document.getElementById("cvstudioBtn").addEventListener("click", function() {
        try {
            window.location.href = "cvstudio.html";
        } catch (error) {
            console.error("Error opening cvstudio.html:", error);
        }
    });

    document.getElementById("sinaustudioBtn").addEventListener("click", function() {
        try {
            window.location.href = "sinau.html";
        } catch (error) {
            console.error("Error opening sinau.html:", error);
        }
    });

    document.getElementById("rekomendasiBtn").addEventListener("click", function() {
        try {
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error opening index.html:", error);
        }
    });

    document.getElementById("profileBtn").addEventListener("click", function() {
        try {
            window.location.href = "profile.html";
        } catch (error) {
            console.error("Error opening profile.html:", error);
        }
    })
});
