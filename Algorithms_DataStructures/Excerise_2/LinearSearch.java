package Algorithms_DataStructures.Excerise_2;

public class LinearSearch {

    public static Product findProductById(Product[] productCatalog, int targetProductId) {

        for (Product currentProduct : productCatalog) {
            if (currentProduct.getProductId() == targetProductId) {
                return currentProduct;
            }
        }

        return null;
    }
}
