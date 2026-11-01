const {calculateTotal,calculatePercentage,getGrade,isPassing,calculateResult , mainDriver, stubCalculateTotal} = require("../src/GradeCalculator");


describe("Student Grade Calculator", function () {

    let scores;
    let maxTotal;

    beforeAll(function () {
        maxTotal = 300;
    });

    beforeEach(function () {
        scores = [80, 70, 90];
    });

    afterEach(function () {
        scores = null;
    });

    afterAll(function () {
        maxTotal = null;
    });


    describe("Unit Testing", function () {

        it("should calculate the total of student scores", function () {
            expect(calculateTotal(scores)).toBe(240);
        });

        it("should return zero for an empty array", function () {
            expect(calculateTotal([])).toBe(0);
        });

        it("should calculate the percentage correctly", function () {
            expect(calculatePercentage(240, 300)).toBe(80);
        });

        it("should throw an error when the maximum total is zero", function () {
            expect(() => calculatePercentage(100, 0)).toThrowError(RangeError,"Maximum total must be greater than zero.");
        });

        it("should return a grade A for 95 percent", function () {
            expect(getGrade(80)).toBe("B");
        });

        it("should return null for an invalid percentage", function () {
            expect(getGrade(110)).toBeNull();
        });

        it("should return a non-null grade for a valid percentage", function () {
            expect(getGrade(75)).not.toBeNull();
        });

        it("should return true when the student passes", function () {
            expect(isPassing(80)).toBeTrue();
        });

        it("should return false when the student fails", function () {
            expect(isPassing(40)).toBeFalse();
        });

        //ignored
        xit("should calculate student expenses when the feature is implemented", function () {
            expect(studentExpenses).toBe(5000);
        });

    });


    describe("Integration Testing", function () {

        it("should calculate the complete student result", function () {
            const result = calculateResult(scores, maxTotal);

            expect(result).toEqual({
                total: 240,
                percentage: 80,
                grade: "B",
                passed: true
            });
        });

    });



});