import mongoose from "mongoose";

export default (app) => {
    //Define mongodb connection
    let db = mongoose.connect('mongodb://localhost:27017/dev_api_js',
        { useMongoClient: true },
        function (err) {
            if(err){
                console.log(err);                
            }
            else{
                console.log('MongoDB is connected!');                
            }
        });

    //Define a express server
    app.listen(3000, () => {
        console.log('Express server has been started')
    });
}