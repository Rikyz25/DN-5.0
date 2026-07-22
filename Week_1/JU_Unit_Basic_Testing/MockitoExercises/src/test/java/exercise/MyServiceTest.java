package exercise;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.InOrder;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }

    @Test
    public void testArgumentMatching() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.processData(anyString())).thenReturn("Processed");

        MyService service = new MyService(mockApi);
        String result = service.processInput("hello");

        assertEquals("Processed", result);
        verify(mockApi).processData(eq("hello"));
    }

    @Test
    public void testHandlingVoidMethods() {
        ExternalApi mockApi = mock(ExternalApi.class);
        doNothing().when(mockApi).doSomething(anyString());

        MyService service = new MyService(mockApi);
        service.saveData("test data");

        verify(mockApi).doSomething("test data");
    }

    @Test
    public void testMultipleReturns() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("First Call", "Second Call");

        MyService service = new MyService(mockApi);

        assertEquals("First Call", service.fetchData());
        assertEquals("Second Call", service.fetchData());
    }

    @Test
    public void testVerifyingInteractionOrder() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData();
        service.saveData("done");

        InOrder inOrder = inOrder(mockApi);
        inOrder.verify(mockApi).getData();
        inOrder.verify(mockApi).doSomething("done");
    }

    @Test
    public void testVoidMethodWithExceptions() {
        ExternalApi mockApi = mock(ExternalApi.class);
        doThrow(new RuntimeException("API failure")).when(mockApi).performAction();

        MyService service = new MyService(mockApi);

        assertThrows(RuntimeException.class, service::executeAction);
        verify(mockApi).performAction();
    }
}
