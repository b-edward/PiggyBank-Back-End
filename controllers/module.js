// Define the questions for savings module
var savingsQuestions = [   
    {
      type: 1,
      prompt: "",
      question: "Setting a budget is an important part of saving. This allows you to control and track your spending, while setting a realistic amount to save. Where is the best place to store your cash savings?",
      choices: [
        "Under the mattress", 
        "A safe deposit box", 
        "Chequing account", 
        "Savings account"
      ],
      correctAnswer: "Savings account"
    }, 
    {
      type: 0,
      prompt: "",
      question: "An online savings account is a savings account that only operates online and therefore tends to offer higher interest rates than regular brick-and-mortar banks, which have higher overhead costs. Which of the following is an online financial institution?",
      choices: [
        "Royal Bank", 
        "Scotiabank", 
        "Wealthsimple", 
        "Bank of Canada"
      ],
      correctAnswer: "Wealthsimple"
    },    
    {
      type: 0,
      prompt: "",
      question: "An online savings account is a savings account that only operates online and therefore tends to offer higher interest rates than regular brick-and-mortar banks, which have higher overhead costs. Which of the following is an online financial institution?",
      choices: [
        "Royal Bank", 
        "Scotiabank", 
        "Wealthsimple", 
        "Bank of Canada"
      ],
      correctAnswer: "Wealthsimple"
    },
    {
      type: 0,
      prompt: "",
      question: "Saving money in an RRSP will help you after you _____.",
      choices: [
        "retire", 
        "graduate", 
        "lose your job", 
        "get married"
      ],
      correctAnswer: 0
    },    
    {
      type: 0,
      prompt: "",
      question: "A TFSA is a _____ Savings Account.",
      choices: [
        "Transferable", 
        "Tenfold", 
        "Tax-Free", 
        "Tax-Forced"
      ],
      correctAnswer: 2
    }
]

// Define the questions for investing module
var investmentQuestions = [  
  {
    id: 0,
    type: 1,
    question: "A good rule of thumb is to save at least 20% of your income each month for emergencies, life events, and retirement. If you start out saving only $50 from your paycheck each month, how much would you have saved after 2 years?",
    choices: [
      "$300", 
      "$400", 
      "$1000", 
      "$1200"
    ],
    correctAnswer: "$1200",
    module: "savings"
  }    
]

exports.getQuestions = async (req, res, next) => {
 const module = req.params.module;
 if (module === "savings") {
  res.status(200).json({
    data: savingsQuestions 
  });
 } else {
  res.status(200).json({
    data: investmentQuestions 
  }); 
}
};
