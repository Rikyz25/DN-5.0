package exercise2;

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    @Test
    public void testAdd() {
        Calculator calculator = new Calculator();
        int sum = calculator.add(15, 10);
        assertEquals(25, sum);
    }
    @Test
    public void testSubtract() {
        Calculator calculator = new Calculator();
        int difference = calculator.subtract(20, 8);
        assertEquals(12, difference);
    }
    @Test
    public void testMultiply() {
        Calculator calculator = new Calculator();
        int product = calculator.multiply(6, 7);
        assertEquals(42, product);
    }
    @Test
    public void testDivide() {
        Calculator calculator = new Calculator();
        int quotient = calculator.divide(20, 5);
        assertEquals(4, quotient);
    }
}
