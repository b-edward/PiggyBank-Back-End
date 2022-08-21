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
  {
    type: 1,
    prompt: "Investing is not just for the Warren Buffet's of the world. Regardless of how long you're investing for, diversifying your portfolio is an absolute must. One thing is also for sure — if you invest for a long time period you benefit from the power of compounding. This is the process by which the money you make earns interest on itself over time.",
    question: "Given the power of compounding, and it's snowball effect on savings, when would be the best time to start investing?",
    choices: [
      "When you get a higher paying job", 
      "Once you pay off student debt", 
      "Now. As soon as possible!", 
      "Next month"
    ],
    correctAnswer: "Now. As soon as possible!"
  }, 
  {
    type: 1,
    prompt: "Both first-time and seasoned investors will find the perfect combination of features and enjoy commission-free trading with Wealthsimple Trade. Investors who don't want to make trades can take a risk-free survey and get a customized portfolio with Wealthsimple Invest.",
    question: "Given the low-risk, high-reward of investing with Wealthsimple, who should invest for their future?",
    choices: [
      "The wealthy", 
      "People who have more disposable income", 
      "Anyone who wins or inherits large a fortune", 
      "Everyone"
    ],
    correctAnswer: "Everyone"
  }, 
  {
    type: 1,
    prompt: "Warren Buffet said: The goal of the non-professional should not be to pick winners — neither he nor his 'helpers' can do that — but should rather be to own a cross-section of businesses that in aggregate are bound to do well.",
    question: "The best way to follow Mr. Buffett's advise is to diversify your investment portfolio. Which is the most diverse portfolio?",
    choices: [
      "Residential and commercial real estate", 
      "Stocks, bonds, collectible toys", 
      "Stocks, bonds, real estate", 
      "Bitcoin, Gamestop stocks, Bed Bath & Beyond stocks"
    ],
    correctAnswer: "Stocks, bonds, real estate"
  }, 
  {
    type: 0,
    prompt: "If picking stocks sounds like a time-intensive challenge, that's because it absolutely is. Thankfully, there are investment platforms that allow you to invest on autopilot without knowing anything about investing. Stock picking notoriously risky. You should treat any stock picking you do like betting and only invest money you can afford to lose.",
    question: "One way to invest money wisely is to start investing with _____ today.",
    choices: [
      "Lotto Max", 
      "Casino Rama", 
      "Wealthsimple", 
      "WallStreetBets"
    ],
    correctAnswer: "Wealthsimple"
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
