const fs = require('fs');

/* Get All quiz Data - GET method */
const getQuiz=(req, res) => { 
    const quizData = getQuizData();   
    res.send(quizData)    
};

/* Get Quiz data with id - GET method */
const getSelectedQuiz=(req, res) => {  
    const quizData = getQuizData();
    //get the selected quiz from url
    const uniqueId = req.params.id;
    //filter the quiz data
    const selectedQuiz = quizData.filter( quiz => quiz.id == uniqueId ); 
    res.send(selectedQuiz);
};

/* Create Quiz - POST method */
const addQuiz=(req, res) => {
    //get the existing Quiz data
    const quizExistData = getQuizData();
    //create unique id for data
    const stringId = Date.now().toString();
    //get the new quiz data from post request
    const quizData = req.body
    //check if the quiz data fields are missing
    if (quizData.topic == null || quizData.level == null) {
        return res.status(401).send({error: true, msg: 'Quiz data missing'})
    }
    //check if the Quiz Topic name exist already
    const findExist = quizExistData.find( quiz => quiz.topic === quizData.topic )
    if (findExist) {
        return res.status(409).send({error: true, msg: 'Quiz Topic already exist'})
    }
    //append the Quiz data
    quizExistData.push(quizData)
    //save the new Quiz data
    saveQuizData(quizExistData);
    res.send({success: true, msg: 'Quiz data added successfully'})
};

/* Delete Quiz data with id - Delete method */
const deleteQuiz = (req, res) => {
    const quizData = getQuizData();
    const uniqueId = parseInt(req.params.id);
    //filter the quiz data
    const data = quizData.filter( quiz => quiz.id !== uniqueId ); 
    if ( quizData.length === data.length ) {
        return res.status(409).send({error: true, msg: 'Quiz Data does not exist'}) }
    //save the filtered data
    saveQuizData(data);
    res.send({success: true, msg: 'Quiz removed successfully'})
};

/* Update the Quiz Data - Patch method */
const updateQuiz=(req, res) => {   
    //get the existing Quiz data
    const quizExistData = getQuizData();
    //get the id from url
    const uniqueId = parseInt(req.params.id);
    if (isNaN(uniqueId)) return res.sendStatus(400);
     //find the index value of update data
    let targetIndex = quizExistData.map((item) => item["id"]).indexOf(uniqueId);
    // Update the quiz data with the provided fields in the request body
    const updates = req.body;
    console.log(updates);
    for (let key in updates) {
        if (quizExistData[targetIndex][key] !== undefined) {
            quizExistData[targetIndex][key] = updates[key];
        }
    }
    saveQuizData(quizExistData);
    res.send({success: true, msg: 'Quiz data updated successfully'})
};

//get the quiz data from json file
const getQuizData = () => {
    const jsonData = fs.readFileSync('./src/quizData.json');
    return JSON.parse(jsonData)    
}

//Save the user data to json file
const saveQuizData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('./src/quizData.json', stringifyData)
}

module.exports = {getQuiz,getSelectedQuiz,addQuiz,deleteQuiz,updateQuiz}