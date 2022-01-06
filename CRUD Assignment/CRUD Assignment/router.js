let router = require('express').Router();
var dataCont = require('./datacontroller')
router.get('/',(req,res)=>
{
    res.json({
        status : true,
        msg: 'Welcome, API is working..'
    })
})

router.post('/addProduct',dataCont.addProduct)
router.post('/updateProduct',dataCont.updateProduct)
router.post('/deleteProduct',dataCont.deleteProduct)
router.get('/showAllProduct',dataCont.showAllProduct)
router.get('/showProductById',dataCont.showProductById)

module.exports = router