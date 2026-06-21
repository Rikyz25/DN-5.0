package exercise4;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setting up test...");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Cleaning up...");
    }

    @Test
    public void testMultiply() {
        int firstNumber = 5;
        int secondNumber = 4;
        int result = calculator.multiply(firstNumber, secondNumber);
        assertEquals(20, result);
    }
}
