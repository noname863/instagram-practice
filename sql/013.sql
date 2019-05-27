USE gram_database;
SELECT USER.NAME
FROM PHOTO_POST
       JOIN USER ON USER.USER_ID = PHOTO_POST.USER_ID
WHERE DATE(PHOTO_POST.CREATION_DATE) = CURRENT_DATE()
GROUP BY PHOTO_POST.USER_ID
HAVING COUNT(*) > 3;