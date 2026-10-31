function calculateTotal(scores) { // scores=[]
    return scores.reduce((total, score) => total + score, 0);
}

function calculatePercentage(total, maxTotal) {
    if (maxTotal <= 0) {
        return null;
    }

    return (total / maxTotal) * 100;
}

function getGrade(percentage) {
    if (percentage < 0 || percentage > 100) {
        return null;
    }

    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function isPassing(percentage) {
    return percentage !== null && percentage >= 50;
}

function calculateResult(scores, maxTotal) {

    const total = calculateTotal(scores);
    const percentage = calculatePercentage(total, maxTotal);
    const grade = getGrade(percentage);
    const passed = isPassing(percentage);

    return {total, percentage, grade, passed};
}

module.exports = {calculateTotal, calculatePercentage, getGrade, isPassing, calculateResult};