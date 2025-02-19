document.addEventListener("DOMContentLoaded", function() {
    const photoContainer = document.getElementById("photo-container");

    // Lista das URLs das imagens no Cloudinary
    const imageUrls = [
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937372/juuuuuuu_keig1q.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937349/juuuuu_smnytb.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937292/juu2_freml9.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937274/juu_tspadg.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937260/ju_rgx2la.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937261/ju1_wjfuyt.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937329/juuu_xrwqmy.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937340/juuuu_sanqcf.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937375/juuuuuuuu_scc32p.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937368/juuuuuu_elcpuy.jpg",
        "https://res.cloudinary.com/dibwfs4cz/image/upload/v1739937285/juu1_hq69oz.jpg"
    ];

    // Cria as imagens e adiciona na galeria
    imageUrls.forEach(function(url) {
        const img = document.createElement("img");
        img.src = url;
        photoContainer.appendChild(img);
    });
});
