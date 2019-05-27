USE gram_database;
SELECT USER.NAME, TIME(PHOTO_POST.CREATION_DATE), PHOTO_POST.CREATION_DATE, PHOTO_POST.DESCRIPTION
FROM PHOTO_POST
       JOIN USER ON USER.USER_ID = PHOTO_POST.USER_ID
ORDER BY PHOTO_POST.CREATION_DATE DESC
LIMIT 5;