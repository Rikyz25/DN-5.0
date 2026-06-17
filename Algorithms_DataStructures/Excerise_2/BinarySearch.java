package Algorithms_DataStructures.Excerise_2;

public class BinarySearch {

    public static Product findProductById(Product[] sortedCatalog, int targetProductId) {

        int left = 0;
        int right = sortedCatalog.length - 1;

        while (left <= right) {

            int middleIndex = left + (right - left) / 2;
            int currentProductId = sortedCatalog[middleIndex].getProductId();

            if (currentProductId == targetProductId) {
                return sortedCatalog[middleIndex];
            }

            if (targetProductId < currentProductId) {
                right = middleIndex - 1;
            } else {
                left = middleIndex + 1;
            }
        }

        return null;
    }
}
