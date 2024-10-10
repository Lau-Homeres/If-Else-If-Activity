const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your score: ', score => {
    score = parseInt(score);

    
  if (score >= 90 && score <= 100) {
        console.log('Excellent!');
    } else if (score >= 80 && score <= 89) {
        console.log('Good!');
    } else if (score >= 70 && score <= 79) {
        console.log('Fair!');
    } else if (score <= 69)  {
        console.log('Needs Improvement!');
    } else { 
        console.log('Invalid input');
    }
    

    // Close the readline interface
    readline.close();
});