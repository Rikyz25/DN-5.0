package exercise;

public class MyService {
    private final ExternalApi externalApi;

    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public String fetchData() {
        return externalApi.getData();
    }

    public void saveData(String data) {
        externalApi.doSomething(data);
    }

    public String processInput(String input) {
        return externalApi.processData(input);
    }

    public void executeAction() {
        externalApi.performAction();
    }
}
