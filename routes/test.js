const router       = require('express').Router();
const asyncHandler = require('../util/asyncHandler');
const testService  = require('../service/test');

router
    .get('/insert', asyncHandler(async (request, response) => {
        const value = request.query.value;
        
        const results = await testService.insert(value);
        response.json(results[0]);
    }))

    .get('/select', asyncHandler(async (request, response) => {
        const results = await testService.select();
        response.json(results[0]);
    }))

    .get('/update', asyncHandler(async (request, response) => {
        const value = request.query.value;
        const id    = request.query.id;
        
        const results = await testService.update(value, id);
        response.json(results[0]);
    }))

    .get('/delete', asyncHandler(async (request, response) => {
        const id = request.query.id;
        
        const results = await testService.deletes(id);
        response.json(results[0]);
    }));

module.exports = router;