//define the questiosn here
var savingsQuestions = [
    {
      id: 0,
      type: 0,
      question: "A TFSA is a _____ Savings Account.",
      choices: [
        "Transferable", 
        "Tenfold", 
        "Tax-Free", 
        "Tax-Forced"
      ],
      correctAnswer: 2,
      module: "savings"
    },    
    {
      id: 1,
      type: 0,
      question: "Saving money in an RRSP will help you after you _____.",
      choices: [
        "retire", 
        "graduate", 
        "lose your job", 
        "get married"
      ],
      correctAnswer: 0,
      module: "savings"
    },    
    {
      id: 2,
      type: 1,
      question: "Which product provides the safest way to save money for the future?",
      choices: [
        "Mutual Funds", 
        "Bitcoin", 
        "Stocks", 
        "GICs"
      ],
      correctAnswer: "GICs",
      module: "savings"
    },    
    {
      id: 3,
      type: 1,
      question: "What is an Emergency Fund??",
      choices: [
        "credit cards", 
        "easily-accessed source of funds", 
        "a loan from Mom and Dad", 
        "cash under the mattress"
      ],
      correctAnswer: "easily-accessed source of funds",
      module: "savings"
    },    
    {
      id: 4,
      type: 0,
      question: "?",
      choices: [
        "Mutual Funds", 
        "Bitcoin", 
        "Stocks", 
        "GICs"
      ],
      correctAnswer: "GICs",
      module: "savings"
    },    
    {
      id: 5,
      type: 1,
      question: "?",
      choices: [
        "Mutual Funds", 
        "Bitcoin", 
        "Stocks", 
        "GICs"
      ],
      correctAnswer: "GICs",
      module: "savings"
    },    
    {
      id: 6,
      type: 1,
      question: "?",
      choices: [
        "Mutual Funds", 
        "Bitcoin", 
        "Stocks", 
        "GICs"
      ],
      correctAnswer: "GICs",
      module: "savings"
    },    
    {
      id: 7,
      type: 0,
      question: "?",
      choices: [
        "Mutual Funds", 
        "Bitcoin", 
        "Stocks", 
        "GICs"
      ],
      correctAnswer: "GICs",
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
