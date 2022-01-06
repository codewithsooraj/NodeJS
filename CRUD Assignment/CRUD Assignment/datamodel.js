var mongoDb = require('mongoose');
var schema = mongoDb.Schema({
    product_name:{
        type : String,
        require : true

    },
    sku:{
        type : String,
        require : true
    },
    quantity:{
        type : String,
        require : true
    },
    model_number:{
        type : String,
        require : true
    },
    serial_number:{
        type : String,
        require : true
    },
    gst:{
        type : String,
        require : true
    },
    hsn:{
        type : String,
        require : true
    },
    created_at:{
        type : Date,
        default  :Date.now
    }
});

var conn = module.exports = mongoDb.model('Product',schema);
module.exports.get = function(callback, limit){
    conn.find(callback).limit(limit);
};