USE gram_database;
SELECT * FROM PHOTO_POST
WHERE PHOTO_POST.USER_ID = 4 AND DATE (PHOTO_POST.CREATION_DATE) = "2019:05:01";