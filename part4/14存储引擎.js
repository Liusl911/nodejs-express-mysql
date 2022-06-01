/*

1、存储引擎？

    1.1、完整的建表语句
        CREATE TABLE `t_x` (
            `id` int DEFAULT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

        注意：在MySQL当中，凡是标识符是可以使用飘号括起来。最好别用，不适用。

        建表的时候可以指定存储引擎，也可以指定字符集。

        mysql默认使用的存储引擎是InnoDB方式。默认采用的字符集是UTF8。

    2.2、什么是存储引擎？
        存储引擎这个名称只有在mysql中存在。（Oracle中有对应的机制，但是不叫做存储引擎。Oracle中没有特殊的名字，就是“表的储存方式”）

        mysql支持很多存储引擎，每一个存储引擎都对应了一种不同的存储方式。
        每一个存储引擎都有自己的优缺点，需要在合适的时机选择合适的存储引擎。

    2.3、查看当前mysql支持的存储引擎？
        show engines \G

    2.4、常见的存储引擎
        
            Engine: MyISAM
           Support: YES
           Comment: MyISAM storage engine
      Transactions: NO
                XA: NO
        Savepoints: NO

        MyISAM这种存储引擎不支持事物。
        MyISAM是mysql最常用的存储引擎，但是这种存储引擎不是默认的。
        





*/