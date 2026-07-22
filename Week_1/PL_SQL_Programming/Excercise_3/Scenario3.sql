CREATE OR REPLACE PROCEDURE TransferFunds(
    p_source_account IN NUMBER,
    p_destination_account IN NUMBER,
    p_transfer_amount IN NUMBER
)
AS
    sourceBalance NUMBER;
BEGIN
    SELECT Balance
    INTO sourceBalance
    FROM Accounts
    WHERE AccountID = p_source_account;

    IF sourceBalance >= p_transfer_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_transfer_amount
        WHERE AccountID = p_source_account;

        UPDATE Accounts
        SET Balance = Balance + p_transfer_amount
        WHERE AccountID = p_destination_account;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');

    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient balance.');
    END IF;
END;
/