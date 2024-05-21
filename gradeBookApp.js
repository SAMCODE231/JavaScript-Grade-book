// Function to calculate the average of an array of scores
function getAverage(scores) {
    let sum = 0;

    // Sum up all the scores in the array
    for (const score of scores) {
        sum += score;
    }

    // Return the average score
    return sum / scores.length;
}

// Function to determine the letter grade for a given score
function getGrade(score) {
    if (score === 100) {
        return "A++"; // Perfect score gets an A++
    } else if (score >= 90) {
        return "A"; // Scores from 90 to 99 get an A
    } else if (score >= 80) {
        return "B"; // Scores from 80 to 89 get a B
    } else if (score >= 70) {
        return "C"; // Scores from 70 to 79 get a C
    } else if (score >= 60) {
        return "D"; // Scores from 60 to 69 get a D
    } else {
        return "F"; // Scores below 60 get an F
    }
}

// Function to check if a given score is a passing grade
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

// Function to generate a message for a student about their grade compared to the class average
function studentMsg(totalScores, studentScore) {
    // Calculate the class average score
    const average = getAverage(totalScores);
    // Determine the student's letter grade
    const grade = getGrade(studentScore);
    
    // Construct the message based on whether the student passed or failed
    if (grade !== "F") {
        return "Class average: " + average + ". Your grade: " + grade + ". You passed the course.";
    } else {
        return "Class average: " + average + ". Your grade: " + grade + ". You failed the course.";
    }
}

// Test the studentMsg function with a sample set of scores and a student's score
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
