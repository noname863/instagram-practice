USE gram_database;
SELECT * FROM PHOTO_POST
WHERE PHOTO_POST.USER_ID = 6 AND LOCATE("hello", PHOTO_POST.DESCRIPTION);