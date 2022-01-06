var model = require('./datamodel');

// Add Product
exports.addProduct = function(req,res)
{
    item = req.body
    model.findOne({model_number:item.model_number})  
    model.findOne({serial_number:item.serial_number})  
    model.findOne({hsn:item.hsn})  
    .then(data=>{
        console.log(data)
        if(data == null)
        {
            var obj = new model()
            obj.product_name = req.body.product_name;
            obj.sku = req.body.sku;
            obj.quantity = req.body.quantity;
            obj.model_number = req.body.model_number;
            obj.serial_number = req.body.serial_number;
            obj.gst = req.body.gst;
            obj.hsn = req.body.hsn;
            obj.save();
            res.status(200).json({
                msg:'Product Successfully Added..'
            })
        }
        else{
            res.status(409).send({
                success : false,
                message : "Product Already Exists..",
                status:409,
                stu:[]
            })
        }
    })
}

// Update Product

exports.updateProduct = function (req,res)
{
    item = req.body
    model.findOne({_id:item._id})
    .then(data=>{
        console.log(data)
        if(data != null)
        {
            data.product_name = item.product_name,
            data.sku = item.sku,
            data.quantity = item.quantity,
            data.gst = item.gst
            data.save()
            res.status(200).send({
                success : true,
                message : "Product is successfully updated..",
                status : 200
            })
        }
        else
        {
            res.status(404).send({
                success : false,
                message : "No Product Found !!",
                status : 404
            })
        }
    })
}

//  Delete Product

exports.deleteProduct = function (req,res)
{
    item = req.body
    model.findOne({_id:item._id})
    .then(data=>{
        console.log(data)
        if(data != null)
        {
            data.deleteOne({_id:item._id})
            res.status(200).send({
                success : true,
                message : "Product is successfully deleted..",
                status : 200
            })
        }
        else
        {
            res.status(404).send({
                success : false,
                message : "No Product Found !!",
                status : 404
            })
        }
    })
}

// select all

exports.showAllProduct = function (req,res)
{
    item = req.body
    model.find({})
    .then(data=>{
        if(data != null)
        {
            console.log(data)
            res.status(200).send({
            message: data
            })
            
        }
        else
        {
            res.status(404).send({
                success : false,
                message : "No Product Found !!",
                status : 404
            })
        }
    })
}

// select by id

exports.showProductById = function (req,res)
{
    item = req.body
    model.findById({_id:item._id})
    .then(data=>{
        if(data != null)
        {
            console.log(data)
            res.status(200).send({
            message: data
            })
            
        }
        else
        {
            res.status(404).send({
                success : false,
                message : "No Product Found !!",
                status : 404
            })
        }
    })
}