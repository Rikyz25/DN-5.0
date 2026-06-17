package Algorithms_DataStructures.Excercise_7;

public class FinancialForecast {

    public static double predictFutureValue(double currentAmount,
                                            double annualGrowthRate,
                                            int remainingYears) {

        if (remainingYears == 0) {
            return currentAmount;
        }

        double nextYearAmount =
                currentAmount * (1 + annualGrowthRate);

        return predictFutureValue(
                nextYearAmount,
                annualGrowthRate,
                remainingYears - 1
        );
    }

    public static void main(String[] args) {

        double initialInvestment = 10000;
        double annualGrowthRate = 0.10;
        int forecastYears = 5;

        double predictedValue = predictFutureValue(
                initialInvestment,
                annualGrowthRate,
                forecastYears
        );

        System.out.printf(
                "Future Value after %d years = ₹%.2f",
                forecastYears,
                predictedValue
        );
    }
}