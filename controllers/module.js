// Define the questions for savings module
var savingsQuestions = [   
    {
      // Question type 0 = fill in blank, 1 = multiple choice
      type: 1,
      prompt: "Setting a budget is an important part of saving. This allows you to control and track your spending, while setting a realistic amount to save.",
      question: "Where is the best place to store your cash savings?",
      choices: [
        "Under the mattress", 
        "A safe deposit box", 
        "Chequing account", 
        "Savings account"
      ],
      correctAnswer: "Savings account"
    }, 
    {
      type: 1,
      prompt: "An online savings account is a savings account that only operates online and therefore tends to offer higher interest rates than regular brick-and-mortar institutions, which have higher overhead costs. ",
      question: "Which of the following is an online financial institution?",
      choices: [
        "Royal Bank", 
        "Scotiabank", 
        "Wealthsimple", 
        "Bank of Canada"
      ],
      correctAnswer: "Wealthsimple"
    },    
    {
      type: 1,
      prompt: "Different financial institutions' savings accounts have different interest rates: Wealthsimple 1%, RBC 0.05%, CIBC 0.10%. Higher rates mean more money earned in your account.",
      question: "Why do RBC and CIBC pay so much less interest than Wealthsimple?",
      choices: [
        "They are bigger companies", 
        "Actually, they pay more interest", 
        "They are brick-and-mortar institutions", 
        "They don't want to pay more"
      ],
      correctAnswer: "They are brick-and-mortar institutions"
    },
    {
      type: 0,
      prompt: "A Registered Retirement Savings Plan is an account that lets you defer and reduce your taxes for when you retire.",
      question: "Saving money in an RRSP will help you after you _____.",
      choices: [
        "stop working", 
        "graduate", 
        "have a child", 
        "get married"
      ],
      correctAnswer: "stop working"
    },    
    {
      type: 0,
      prompt: "A Tax-Free Savings Account lets you grow your investments tax free on the gains you make over time.",
      question: "A TFSA is a _____ Savings Account.",
      choices: [
        "Transferable", 
        "Tenfold", 
        "Tax-Free", 
        "Tax-Forced"
      ],
      correctAnswer: "Tax-Free"
    }
]

// Define the questions for investing module
var investmentQuestions = [  
  {
    // Question type 0 = fill in blank, 1 = multiple choice
    type: 1,
    prompt: "Investing involves committing money in order to earn a financial return. This essentially means that you invest money to make money and achieve your financial goals. Financial institutions offer investment products such as ETFs, Stocks, and Mutual Funds.",
    question: "If you invest money to make money, which of the following is the best investment?",
    choices: [
      "Mutual Funds", 
      "Cars", 
      "Shoes", 
      "Cash"
    ],
    correctAnswer: "Mutual Funds"
  }, 
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
