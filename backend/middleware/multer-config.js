const multer = require("multer");

// Conversion du mime types en type de fichier image => tableau utilisé dans le storage => filename => const extension
const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
};

// Espace de stockage avec le nom du fichier
const storage = multer.diskStorage({
    // La destination du fichier
    destination: (req, file, callback) => {
        callback(null, "images");
    },
    // Le nom du fichier
    filename: (req, file, callback) => {
        // Supprimer les espaces et les remplacer par des "_" dans le nom du fichier
        const name = file.originalname.split(" ").join("_");
        // Récupérer l'extention du fichier grâce au mime type présent dans l'objet file
        const extension = MIME_TYPES[file.mimetype];
        // Création du nom grâce au nom timestamp et extension créés
        callback(null, name + Date.now() + "." + extension);
    },
});

// Indiquer que c'est un fichier unique de type image
module.exports = multer({ storage }).single('image');
