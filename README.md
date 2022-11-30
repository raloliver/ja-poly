# ja-poly

### hibernate 

![hibernate](https://zkph6a.dm.files.1drv.com/y4m7pugbDa-qEEDGKC5bXKdMtONE976E4tREBEM2E3QsIQxakKGWW-QBgZvIjfHiQMBaLSknLw-8m9mST3sMgNGBv4aYseU0J7bR2jOY-AoDT0MBL-UKKHaL4s3AAunLhsvTq-nP0CMLBwjH3VIHqw4RGhuDPe6pvNnA1wuvFJdv1Ela-TDW_CQc-zh-haPDusv9Vx7nIlbZpOuKeVc5QHdQA/JA%20Poly%20-%20Hibernate.png?psid=1)

> Um Data Mapper é uma camada de acesso a dados que executa transferência bidirecional de dados entre um armazenamento de dados persistente e uma representação de dados na memória.

```
#SESSION FACTORY / SESSION / OBJETO#
#DATA MAPPER (camada de acesso a dados)#

Session session = sessionFactory.openSession();
session.beginTransaction();

Person person = new Person("John", "Doe");
session.save(person);
session.getTransaction().commit();
session.close();
``` 