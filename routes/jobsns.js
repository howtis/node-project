const router = require('express').Router();
const multer = require('multer');
const path   = require('path');
const fs     = require('fs');

const imagePath = '/var/lib/jobsns/images';
const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        if (!fs.existsSync(imagePath))
            fs.mkdirSync(imagePath, { recursive: true });
        
        callback(null, imagePath);
    }
});

const upload = multer({ storage: storage });
router
    .post('/saveImage', upload.single('image'), (request, response) => {
        response.json(request.file);
    })

    .get('/getImage/:image', (request, response) => {
        const image = request.params.image;
        fs.readFile(path.join(imagePath, image), (err, data => {
            response.send(data);
        }))
    });

module.exports = router;