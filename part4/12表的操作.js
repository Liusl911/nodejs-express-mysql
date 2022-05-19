/*

6、创建表：

    建表语句的语法格式：
        create table 表名(
            字段名1 数据类型,
            字段名2 数据类型,
            字段名3 数据类型,
            ...
        );

    关于MySQL当中字段的数据类型？以下只说常见的。
        int         整数型
        bigint      长整型
        float       浮点型
        char        定长字符串
        varchar     可变长字符串
        date        日期类型
        BLOB        二进制大对象（存储图片、视频等流媒体信息）Binary Large Object
        CLOB        字符大对象（存储较大文本，比如：可以存储4G的字符串。）Character Large OBject
        ......

    char和varchar怎么选择？
        在实际开发中，当某个字段中的数据长度不发生改变的时候，是定长的，例如：性别、生日等都是采用char。
        当一个字段的数据长度不确定，例如：姓名、简介等都是采用varchar。

    BLOB和CLOB类型的使用？
        电影表：t_movie
        id(int)      name(varchar)        playtime(date/char)        poster(BLOB)      story(CLOB)
        ------------------------------------------------------------------------------------------------
        1            复仇者联盟4
        2
        3
    
    表名在数据库当中一般建议以：t_或者tbl_开始。

    创建学生表：
        学生信息包括：
            学号、姓名、性别、班级编号、生日
            学号：bigint
            姓名：varchar
            性别：char
            班级编号：varchar
            生日：char

        create table t_student(
            no bigint,
            name varchar(255),
            sex char(1),
            classno varchar(255),
            birth char(10)
        );

7、insert语句插入数据
    语法格式：
        insert into 表名(字段1,字段2,字段3....) values(值1,值2,值3....)
        要求：字段的数量和值的数量相同，并且数据类型要对应相同。

    insert into t_student(no,name,sex,classno,birth) values(1,'zhangsan','1','601','1990-10-12');

    select * from t_student;
    +------+----------+------+---------+------------+
    | no   | name     | sex  | classno | birth      |
    +------+----------+------+---------+------------+
    |    1 | zhangsan | 1    | 601     | 1990-10-12 |
    +------+----------+------+---------+------------+

    insert into t_student(name,sex,classno,birth,no) values('lisi','1','601','1990-11-02',2)

    select * from t_student;
    +------+----------+------+---------+------------+
    | no   | name     | sex  | classno | birth      |
    +------+----------+------+---------+------------+
    |    1 | zhangsan | 1    | 601     | 1990-10-12 |
    |    2 | lisi     | 1    | 601     | 1990-11-02 |
    +------+----------+------+---------+------------+

    insert into t_student(name) values('wangwu'); // 除name字段之外，剩下的字段自动插入NULL。

    select * from t_student;
    +------+----------+------+---------+------------+
    | no   | name     | sex  | classno | birth      |
    +------+----------+------+---------+------------+
    |    1 | zhangsan | 1    | 601     | 1990-10-12 |
    |    2 | lisi     | 1    | 601     | 1990-11-02 |
    | NULL | wangwu   | NULL | NULL    | NULL       |
    +------+----------+------+---------+------------+

    drop table if exists t_student; // 当这个表存在的话删除。
    create table t_student(
        no bigint,
        name varchar(255),
        sex char(1) default 1,
        classno varchar(255),
        birth char(10)
    );

    insert into t_student(name) values('zhangsan');
    select * from t_student;
    +------+----------+------+---------+-------+
    | no   | name     | sex  | classno | birth |
    +------+----------+------+---------+-------+
    | NULL | zhangsan | 1    | NULL    | NULL  |
    +------+----------+------+---------+-------+

    需要注意的地方：
        当一条insert语句执行成功之后，表格当中必然会多一行记录。
        计时多的这一行记录当中某些字段是NULL，后期也没有办法
        再执行insert语句插入数据了，只能使用update进行更新。

    insert into t_student values(1,'Jack','0','602','1991-01-14');
    select * from t_student;
    +------+----------+------+---------+------------+
    | no   | name     | sex  | classno | birth      |
    +------+----------+------+---------+------------+
    | NULL | zhangsan | 1    | NULL    | NULL       |
    |    1 | Jack     | 0    | 602     | 1991-01-14 |
    +------+----------+------+---------+------------+


*/ 