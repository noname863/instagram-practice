USE gram_database;
SELECT USER.USER_ID, USER.NAME
FROM PHOTO_POST
       JOIN USER ON USER.USER_ID = PHOTO_POST.USER_ID
GROUP BY PHOTO_POST.USER_ID
HAVING COUNT(PHOTO_POST.USER_ID) > 3;