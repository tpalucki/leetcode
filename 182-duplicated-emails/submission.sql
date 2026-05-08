-- 389 ms
-- Beats 37.01%

SELECT email as 'Email' FROM Person
GROUP BY email
HAVING COUNT(email) > 1