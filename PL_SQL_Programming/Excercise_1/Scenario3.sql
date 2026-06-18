DECLARE
BEGIN
    FOR loanRecord IN (
        SELECT c.Name,
               l.LoanID,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' ||
            loanRecord.LoanID ||
            ' for ' ||
            loanRecord.Name ||
            ' is due on ' ||
            TO_CHAR(loanRecord.DueDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/