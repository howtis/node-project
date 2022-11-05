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
    },
    filename: (request, file, callback) => {
        callback(null, file.originalname);        
    }
});

const upload = multer({ storage: storage });
router
    .post('/saveImage', upload.single('image'), (request, response) => {
        response.json(request.file);
    })

    .get('/getImage/:image', (request, response) => {
        const image = request.params.image;
        fs.readFileSync(path.join(imagePath, image), (error, data) => {
            if (!error)
                response.send(data);
            
            else {
                console.log(error);
                response.send(error);
            }
        })
    });

module.exports = router;