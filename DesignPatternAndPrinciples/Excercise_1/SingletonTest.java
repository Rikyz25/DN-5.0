package Excercise_1;
public class SingletonTest {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application started");
        logger2.log("User logged in");

        System.out.println(logger1 == logger2);
        System.out.println(logger1.hashCode());
        System.out.println(logger2.hashCode());
    }
}