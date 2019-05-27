DROP DATABASE IF EXISTS gram_database;

CREATE DATABASE IF NOT EXISTS gram_database DEFAULT CHARACTER SET utf8;

GRANT SELECT,INSERT,UPDATE,DELETE
    ON gram_database.*
    TO user1@'%'
    IDENTIFIED BY 'gram';

use gram_database;
CREATE TABLE USER
(
    USER_ID INT         NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NAME    VARCHAR(32) NOT NULL
);

CREATE TABLE PHOTO_POST
(
    USER_ID       INT          NOT NULL,
    POST_ID       INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    DESCRIPTION   VARCHAR(200) NOT NULL,
    CREATION_DATE DATETIME     NOT NULL,
    PHOTO_LINK    TEXT         NOT NULL,
    FOREIGN KEY (USER_ID) REFERENCES USER (USER_ID)
);

INSERT INTO USER (NAME)
VALUES ("Oleg"),
       ("Bogdan"),
       ("Vladimir"),
       ("Pavel"),
       ("Lev"),
       ("Kirill"),
       ("Kirill"),
       ("Oleg"),
       ("Oleg"),
       ("Vladimir");
INSERT INTO PHOTO_POST (USER_ID,
                        DESCRIPTION,
                        CREATION_DATE,
                        PHOTO_LINK)
VALUES (4, "descriptio", "2019-05-01T10:37:10", "image1.jpg"),
       (4, "aaaaa", "2019-05-01T09:24:00", "image2.jpg"),
       (9, "bbbbbb", "2019-05-09T23:00:00", "image3.jpg"),
       (10, "too long description for task 9", "2019-02-23T23:00:00", "image4.jpg"),
       (8, "qfr", "2019-02-23T20:45:10", "image5.jpg"),
       (1, "niuev", "2019-02-23T23:08:00", "image6.jpg"),
       (7, "аооко", "2019-02-23T23:00:00", "image7.jpg"),
       (4, "hello jifjr", "2018-02-23T16:22:00", "image8.jpg"),
       (6, "Коeqovrioriujeiurко", NOW(), "image9.jpg"),
       (1, "oqnernegurqiniо", "2019-05-09T23:00:00", "image10.jpg"),
       (6, "hello", NOW(), "image11.jpg"),
       (5, "another too long description for task 9", NOW(), "image12.jpg"),
       (2, "KOKOKO", "2018-04-02T23:00:00", "image13.jpg"),
       (4, "erinhellotubi", "2018-05-09T02:12:34", "image14.jpg"),
       (4, "ernignigeunrineiv", "2019-05-09T03:12:30", "image15.jpg"),
       (5, "enviuenr", NOW(), "image16.jpg"),
       (3, "KEK", "2019-02-23T23:00:00", "image17.jpg"),
       (6, "hellouhiwefuhwi", NOW(), "image18.jpg"),
       (6, "sfskefuhwi", NOW(), "image19.jpg"),
       (5, "ddlfuhwi", NOW(), "image20.jpg"),
       (5, "dbkequygbkquygrhwi", NOW(), "image21.jpg");
