const MealModel = require('./MealModel');

//get
module.exports.getMeal = async (req, res) => {
    const myMeal = await MealModel.find();
    res.send(myMeal)
}

//post
module.exports.saveMeals = async (req, res) => {
    const { title } = req.body;
    MealModel.create ({title})
        .then ((data) => {
            console.log('meal added');
            res.send(data);
        })
}

//delete
module.exports.deleteMeal = async (req,res) => {
    const { _id } = req.body;
    MealModel.findByIdAndDelete(_id)
        .then ( () => res.send ('deleted a meal'))
}

//edit
module.exports.editMeal = async (req,res) => {
    const { _id, title } = req.body;
    MealModel.findByIdAndUpdate(_id, { title })
        .then ( () => res.send ('edited a meal'))
}