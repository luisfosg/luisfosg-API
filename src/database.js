import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/luisfosg-api", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(_db => console.log("\n Db is Connected \n"))
    .catch(err => console.log(err))
