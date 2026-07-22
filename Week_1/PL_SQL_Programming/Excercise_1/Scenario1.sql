DECLARE
BEGIN
    FOR customerRecord IN (
        SELECT c.CustomerID
        FROM Customers c
        WHERE c.Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = customerRecord.CustomerID;
    END LOOP;

    COMMIT;
END;
/