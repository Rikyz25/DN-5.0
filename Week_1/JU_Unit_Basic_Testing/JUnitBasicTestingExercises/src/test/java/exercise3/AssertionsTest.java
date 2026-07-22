package exercise3;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {
    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);
        assertTrue(10 > 5);
        assertFalse(10 < 5);
        String studentName = null;
        assertNull(studentName);
        Object account = new Object();
        assertNotNull(account);
    }
}
