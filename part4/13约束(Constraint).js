/*

13、约束(Constraint)

13.1、什么是约束？常见的约束都有哪些？
    在创建表的时候，可以给表的字段添加相应的约束，添加约束的目的是为了保证表中数据的合法性、有效性、完整性。
    常见的约束有哪些？
        非空约束(not null)：约束的字段不能为null
        唯一约束(unique)：约束的字段不能重复
        主键约束(primary key)：约束的字段既不能为null，又不能重复(简称：PK)
        外键约束(foreign key)：... (简称：FK)
        检查约束(check)：注意Oracle数据库有check约束，但是mysql没有，目前mysql不支持该约束。

13.2、非空约束 not null
    drop table if exists t_user;
    create table t_user(
        id int,
        username varchar(255) not null,
        password varchar(255)
    );
    insert into t_user(id,password) values(1,'123');
    ERROR 1364 (HY000): Field 'username' doesn't have a default value

    insert into t_user(id,username,password) values(1,'lisi','123');

13.3、唯一性约束 unique
    *唯一约束修饰的字段具有唯一性，不能重复，可以为NULL。
    *案例：给某一列添加unique
        drop table if exists t_user;
        create table t_user(
            id int,
            username varchar(255) unique // 【列级约束】
        );
        insert into t_user(id,username) values(1, 'zs');
        insert into t_user(id,username) values(2, 'zs');
        ERROR 1062 (23000): Duplicate entry 'zs' for key 't_user.username'

        insert into t_user(id) values(2);
        insert into t_user(id) values(3);
        insert into t_user(id) values(4);
    *案例：字段联合唯一性约束
        drop table if exists t_user;
        create table t_user(
            id int,
            usercode varchar(255),
            username varchar(255),
            unique(usercode,username) // 多个字段联合起来添加1个约束unique 【表级约束】
        );

        insert into t_user values(1,'111','zs');
        insert into t_user values(2,'222','ls');
        insert into t_user values(3,'333','zs');
        select * from t_user;
        insert into t_user values(4,'111','zs');
        ERROR 1062 (23000): Duplicate entry '111-zs' for key 't_user.usercode'

        与之不同
        drop table if exists t_user;
        create table t_user(
            id int,
            usercode varchar(255) unique,
            username varchar(255) unique
        );
        insert into t_user values(1,'111','zs');
        insert into t_user values(2,'111','ls');
        ERROR 1062 (23000): Duplicate entry '111' for key 't_user.usercode'
    *注意：not null约束只有列级约束，没有表级约束。
    
13.4、主键约束 primary key
    
    *怎么给一张表添加主键约束呢？
        drop table if exists t_user;
        create table t_user(
            id int primary key,
            username varchar(255),
            email varchar(255)
        );
        insert into t_user(id,username,email) values(1,'zs','zs@163.com');
        insert into t_user(id,username,email) values(2,'ls','ls@163.com');
        insert into t_user(id,username,email) values(3,'ww','ww@163.com');
        select * from t_user;
        +----+----------+------------+
        | id | username | email      |
        +----+----------+------------+
        |  1 | zs       | zs@163.com |
        |  2 | ls       | ls@163.com |
        |  3 | ww       | ww@163.com |
        +----+----------+------------+

        insert into t_user(id,username,email) values(1,'jack','jack@163.com');
        ERROR 1062 (23000): Duplicate entry '1' for key 't_user.PRIMARY'
        
        insert into t_user(username,email) values('jack','jack@163.com');
        ERROR 1364 (HY000): Field 'id' doesn't have a default value
        
        根据以上的测试得出：id是主键，因为添加了主键约束，主键字段中的数据不能为NULL，也不能重复。
        主键的特点：不能为NULL，也不能重复。
        
    *主键相关的术语？
        主键约束：primary key
        主键字段：id字段添加primary key之后，id叫做主键字段
        主键值：id字段中的每一个值都是主键值

    *主键有什么作用？
        - 表的设计三范式中有要求，第一范式就要求任何一张表都应该有主键。
        - 主键的作用：主键值是这行记录在这张表当中的唯一标识。（例如一个人的身份证号码。）

    *主键的分类？
        根据主键字段的字段数量来划分：
            单一主键（推荐使用，常用的。）
            复合主键（多个字段联合起来添加一个主键约束）（复合主键不建议使用，因为复合主键违背三范式。）
        根据主键性质来划分：
            自然主键：主键值最好是一个和业务没有任何关系的自然数。（推荐使用）
            业务主键：主键值和系统的业务挂钩，例如：拿着银行卡的卡号做主键，拿着身份证号码作为主键。（不推荐使用）
                     最好不要拿着和业务挂钩的字段作为主键，以防业务发生改变时主键随之改变，容易出现主键重复。
    
    *一张表的主键约束只能有1个。（牢牢记住。）

    *使用表级约束方式定义主键：
        drop table if exists t_user;
        create table t_user(
            id int,
            username varchar(255),
            primary key(id)
        );
        insert into t_user(id,username) values(1,'zs');
        insert into t_user(id,username) values(2,'ls');
        insert into t_user(id,username) values(3,'ww');
        select * from t_user;
        
        insert into t_user(id,username) values(3,'ww');
        ERROR 1062 (23000): Duplicate entry '3' for key 't_user.PRIMARY'

        以下为复合主键：
            drop table if exists t_user;
            create table t_user(
                id int,
                username varchar(255),
                password varchar(255),
                primary key(id,username)
            );

    *mysql提供主键值自增：auto_increment（非常重要。）
        drop table if exists t_user;
        create table t_user(
            id int primary key auto_increment, // id字段自动维护一个自增的数字，从1开始，以1递增。
            username varchar(255)
        );
        insert into t_user(username) values('a');
        insert into t_user(username) values('b');
        insert into t_user(username) values('c');
        insert into t_user(username) values('d');
        select * from t_user;

        提示：Oracle当中也提供了一个自增机制，叫做：序列(sequence)对象。

13.5、外键约束
    
    *相关术语：
        外键约束：foreign key
        外键字段：添加有外键约束饿字段
        外键值：外键字段中的每一个值

    *业务背景：
        请设计数据库表，用来维护学生和班级的信息？
            第一种方案：一张表存储所有数据
            no(pk)      name        classno         classname
            ----------------------------------------------------------------
            1           zs          101             厦门海沧实验小学一年级1班
            2           ls          101             厦门海沧实验小学一年级1班
            3           ww          102             厦门海沧实验小学一年级2班
            4           zl          103             厦门海沧实验小学一年级2班
            缺点：冗余。【不推荐】

            第二重方案：两张表（班级表和学生表）
            t_class 班级表
            cno(pk)     cname
            ------------------------------------
            101         厦门海沧实验小学一年级1班
            102         厦门海沧实验小学一年级2班

            t_student 学生表
            sno(pk)     sname       classno(该字段添加外键约束fk)
            ------------------------------------------------
            1           zs          101
            2           ls          101
            3           ww          102
            4           zl          102

    *将以上表的建表语句写出来：
        t_student表中的classno字段引用t_class表中的cno字段，此时t_student表叫做子表，t_class表叫做父表。
        操作顺序要求：
            删除数据的时候，先删除子表，再删除父表。
            添加数据的时候，先添加父表，再添加子表。
            创建表的时候，先创建父表，再创建子表。
            删除表的时候，先删除子表，再删除父表。

        drop table if exists t_student;
        drop table if exists t_class;

        create table t_class(
            cno int,
            cname varchar(255),
            primary key(cno)
        );

        create table t_student(
            sno int,
            sname varchar(255),
            classno int,
            primary key(sno),
            foreign key(classno) references t_class(cno)        // 记住了
        );

        insert into t_class values(101, '厦门海沧实验小学一年级1班');
        insert into t_class values(102, '厦门海沧实验小学一年级2班');

        insert into t_student values(1, 'zs', 101);
        insert into t_student values(2, 'ls', 101);
        insert into t_student values(3, 'ww', 102);
        insert into t_student values(4, 'zl', 102);

        select * from t_class;
        select * from t_student;

        insert into t_student values(5, 'mq', 103);
        ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`my_db_01`.`t_student`, CONSTRAINT `t_student_ibfk_1` FOREIGN KEY (`classno`) REFERENCES `t_class` (`cno`))

    *外键值可以为NULL吗？外键值可以为NULL。
        insert into t_student(sno, sname) values(5, 'mq');
        select * from t_student;
        +------+-------+---------+
        | sno  | sname | classno |
        +------+-------+---------+
        |    1 | zs    |     101 |
        |    2 | ls    |     101 |
        |    3 | ww    |     102 |
        |    4 | zl    |     102 |
        |    5 | mq    |    NULL |
        +------+-------+---------+

    *外键字段引用其他表的某个字段的时候，被引用的字段必须是主键吗？
        注意：被引用的字段不一定是主键，但至少具有unique约束。（唯一约束。）（重复了的话，到底引用了谁？分不清！）



*/ 