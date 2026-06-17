package Algorithms_DataStructures.Excerise_2;

public class SearchTest {

    public static void main(String[] args) {

        Product[] productCatalog = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Keyboard", "Electronics"),
                new Product(104, "Backpack", "Accessories"),
                new Product(105, "Smartphone", "Electronics")
        };

        Product searchedProduct =
                LinearSearch.findProductById(productCatalog, 104);

        if (searchedProduct != null) {
            System.out.println(
                    "Product Found: " +
                    searchedProduct.getProductName()
            );
        }

        Product foundProduct =
                BinarySearch.findProductById(productCatalog, 104);

        if (foundProduct != null) {
            System.out.println(
                    "Product Found: " +
                    foundProduct.getProductName()
            );
        }
    }
}
