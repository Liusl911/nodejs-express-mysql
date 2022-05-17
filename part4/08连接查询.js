/*

2、连接查询

2.1、什么是连接查询？
    在实际开发中，大部分的情况下都不是从单表中查询数据，一般都是从多张表联合查询取出最终的结果。
    在实际开发中，一般一个业务都会对应多张表，比如：学生和班级，起码两张表。
    stuno    stuname    classno    classname
    ---------------------------------------------
    1        zs         1           山尾小学
    2        ls         1           山尾小学
    ...
    学生和班级信息存储到一张表中，结果就像上面一样，数据会存在大量的重复，导致数据的冗余。

2.2、连接查询的分类？
    根据语法出现的年代来划分的话，包括：
        SQL92(一些老的DBA可能还在使用的语法，DBA：DataBase Administrator，数据库管理员)
        SQL99(比较新的语法)

    根据表的连接方式来划分：包括：
        内连接
            等值连接
            非等值连接
            自连接
        外连接
            左外连接（左连接）
            右外连接（右链接）
        全连接（很少用！）

2.3、在表的连接查询方面有一种现象称为：笛卡尔积现象。（笛卡尔乘积现象）

    案例：找出每一个员工的部门名称，要求显示员工名和部门名。
    select ename,deptno from emp;
    +--------+--------+
    | ename  | deptno |
    +--------+--------+
    | 张三   |      1 |
    | 李四   |      2 |
    | 王五   |      3 |
    | 赵六   |      3 |
    | 吴林   |      4 |
    | 陈金木 |      3 |
    | 李庆   |      3 |
    | 林墨染 |      3 |
    | 王思爽 |      3 |
    | 李可可 |      3 |
    | 张思思 |      3 |
    | 康志勇 |      3 |
    | 秦敏   |      1 |
    | 柳茹茹 |      2 |
    | 赵东   |      1 |
    | 孙乾   |      3 |
    | 周正   |      3 |
    | 郑琳   |      3 |
    | 陈伟   |      3 |
    | 沈林冲 |      3 |
    +--------+--------+

    select * from dept;
    +--------+----------+------+
    | DEPTNO | DNAME    | LOC  |
    +--------+----------+------+
    |      1 | 行政部门 | A区  |
    |      2 | 财务部门 | B区  |
    |      3 | 研发中心 | C区  |
    |      4 | 总经办   | D区  |
    +--------+----------+------+

    select ename.dname from emp,dept; // ename和dname要联合起来一块显示，粘到一块。
    +--------+----------+
    | ename  | dname    |
    +--------+----------+
    | 张三   | 财务部门 |
    | 张三   | 行政部门 |
    | 张三   | 研发中心 |
    | 张三   | 总经办   |
    | 李四   | 财务部门 |
    | 李四   | 行政部门 |
    ......
    +--------+----------+
    80 rows in set (0.00 sec)

    笛卡尔积现象：当两张表进行连接查询的时候，没有任何条件进行限制，最终的查询结果条数是两张表记录条数的乘积。

    关于表的别名：
        select e.ename,d.dname from emp e,dept d;
        表的别名有什么好处？
            第一：执行效率高。
            第二：可读性好。

2.4、怎么避免笛卡尔积现象？当然是加条件进行过滤。
    思考：避免笛卡尔积现象，会减少记录的匹配次数吗？
        不会，次数还是80次。只不过显示的是有效记录。
    
    案例：找出每一个员工的部门名称，要求显示员工名和部门名。
    select
        e.ename,d.dname
    from
        emp e,dept d
    where
        e.deptno = d.deptno; // SQL92，以后不用。
    +--------+----------+
    | ename  | dname    |
    +--------+----------+
    | 张三   | 行政部门 |
    | 李四   | 财务部门 |
    | 王五   | 研发中心 |
    | 赵六   | 研发中心 |
    | 吴林   | 总经办   |
    | 陈金木 | 研发中心 |
    | 李庆   | 研发中心 |
    | 林墨染 | 研发中心 |
    | 王思爽 | 研发中心 |
    | 李可可 | 研发中心 |
    | 张思思 | 研发中心 |
    | 康志勇 | 研发中心 |
    | 秦敏   | 行政部门 |
    | 柳茹茹 | 财务部门 |
    | 赵东   | 行政部门 |
    | 孙乾   | 研发中心 |
    | 周正   | 研发中心 |
    | 郑琳   | 研发中心 |
    | 陈伟   | 研发中心 |
    | 沈林冲 | 研发中心 |
    +--------+----------+

2.5、内连接之等值连接：最大特点是：条件是等量关系。

    案例：找出每一个员工的部门名称，要求显示员工名和部门名。

    SQL92：（太老，不用了）
        select
            e.ename,d.dname
        from
            emp e,dept d
        where
            e.deptno = d.deptno;

    SQL99：（常用的）
        select
            e.ename,d.dname
        from
            emp e
        join
            dept d
        on
            e.deptno = d.deptno;

        // inner可以省略的，带着inner目的是可读性好一些。
        select
            e.ename,d.dname
        from
            emp e
        inner join
            dept d
        on
            e.deptno = d.deptno;
        
        语法：
            ...
                A
            join
                B
            on
                连接条件
            where
                ...

        SQL99的语法结构更清晰一些：表的连接条件和后来的where条件分离了。

        +--------+----------+
        | ename  | dname    |
        +--------+----------+
        | 张三   | 行政部门 |
        | 李四   | 财务部门 |
        | 王五   | 研发中心 |
        | 赵六   | 研发中心 |
        | 吴林   | 总经办   |
        | 陈金木 | 研发中心 |
        | 李庆   | 研发中心 |
        | 林墨染 | 研发中心 |
        | 王思爽 | 研发中心 |
        | 李可可 | 研发中心 |
        | 张思思 | 研发中心 |
        | 康志勇 | 研发中心 |
        | 秦敏   | 行政部门 |
        | 柳茹茹 | 财务部门 |
        | 赵东   | 行政部门 |
        | 孙乾   | 研发中心 |
        | 周正   | 研发中心 |
        | 郑琳   | 研发中心 |
        | 陈伟   | 研发中心 |
        | 沈林冲 | 研发中心 |
        +--------+----------+

2.6、内连接之非等值连接：最大的特点是：连接条件中的关系是非等量关系。
    案例：找出每个员工的薪资等级，要求显示员工名，工资，工资等级。
    select ename,sal from emp;
    +--------+----------+
    | ename  | sal      |
    +--------+----------+
    | 张三   | 10000.00 |
    | 李四   |  9500.00 |
    | 王五   | 20000.00 |
    | 赵六   | 12000.00 |
    | 吴林   | 30000.00 |
    | 陈金木 | 11000.00 |
    | 李庆   | 10000.00 |
    | 林墨染 |  8000.00 |
    | 王思爽 |  6000.00 |
    | 李可可 |  7500.00 |
    | 张思思 |  6000.00 |
    | 康志勇 |  8500.00 |
    | 秦敏   |  4500.00 |
    | 柳茹茹 |  4800.00 |
    | 赵东   |  5200.00 |
    | 孙乾   | 12000.00 |
    | 周正   | 15000.00 |
    | 郑琳   |  9500.00 |
    | 陈伟   | 12000.00 |
    | 沈林冲 |  8500.00 |
    +--------+----------+

    select * from salgrade;
    +-------+-------+-------+
    | GRADE | LOSAL | HISAL |
    +-------+-------+-------+
    |     1 |  5000 | 10000 |
    |     2 | 10001 | 15000 |
    |     3 | 15001 | 20000 |
    |     4 | 20001 | 30000 |
    +-------+-------+-------+

    select 
        e.ename,e.sal,s.grade
    from
        emp e
    join
        salgrade s
    on
        e.sal between s.losal and s.hisal;

    // inner可以省略的，带着inner目的是可读性好一些。
    select 
        e.ename,e.sal,s.grade
    from
        emp e
    inner join
        salgrade s
    on
        e.sal between s.losal and s.hisal;
    
    +--------+----------+-------+
    | ename  | sal      | grade |
    +--------+----------+-------+
    | 张三   | 10000.00 |     1 |
    | 李四   |  9500.00 |     1 |
    | 王五   | 20000.00 |     3 |
    | 赵六   | 12000.00 |     2 |
    | 吴林   | 30000.00 |     4 |
    | 陈金木 | 11000.00 |     2 |
    | 李庆   | 10000.00 |     1 |
    | 林墨染 |  8000.00 |     1 |
    | 王思爽 |  6000.00 |     1 |
    | 李可可 |  7500.00 |     1 |
    | 张思思 |  6000.00 |     1 |
    | 康志勇 |  8500.00 |     1 |
    | 赵东   |  5200.00 |     1 |
    | 孙乾   | 12000.00 |     2 |
    | 周正   | 15000.00 |     2 |
    | 郑琳   |  9500.00 |     1 |
    | 陈伟   | 12000.00 |     2 |
    | 沈林冲 |  8500.00 |     1 |
    +--------+----------+-------+

2.7、自连接：最大的特点是：一张表看做两张表。自己连接自己。
    案例：找出每个员工的上级领导，要求显示员工名和对应的领导名。
    select empno,ename,mgr from emp;
    +-------+--------+------+
    | empno | ename  | mgr  |
    +-------+--------+------+
    |     1 | 张三   |    5 |
    |     2 | 李四   |    5 |
    |     3 | 王五   |    5 |
    |     4 | 赵六   |    3 |
    |     5 | 吴林   | NULL |
    |     6 | 陈金木 |    3 |
    |     7 | 李庆   |    3 |
    |     8 | 林墨染 |    3 |
    |     9 | 王思爽 |    3 |
    |    10 | 李可可 |    3 |
    |    11 | 张思思 |    3 |
    |    12 | 康志勇 |    3 |
    |    13 | 秦敏   |    1 |
    |    14 | 柳茹茹 |    2 |
    |    15 | 赵东   |    1 |
    |    16 | 孙乾   |    3 |
    |    17 | 周正   |    3 |
    |    18 | 郑琳   |    3 |
    |    19 | 陈伟   |    3 |
    |    20 | 沈林冲 |    3 |
    +-------+--------+------+

    a.mgr           b.empno
    员工的领导编号 = 领导的员工编号

    select
        a.ename as '员工',b.ename as '领导'
    from
        emp a
    inner join
        emp b
    on
        a.mgr = b.empno;

    +--------+------+
    | 员工   | 领导 |
    +--------+------+
    | 张三   | 吴林 |
    | 李四   | 吴林 |
    | 王五   | 吴林 |
    | 赵六   | 王五 |
    | 陈金木 | 王五 |
    | 李庆   | 王五 |
    | 林墨染 | 王五 |
    | 王思爽 | 王五 |
    | 李可可 | 王五 |
    | 张思思 | 王五 |
    | 康志勇 | 王五 |
    | 秦敏   | 张三 |
    | 柳茹茹 | 李四 |
    | 赵东   | 张三 |
    | 孙乾   | 王五 |
    | 周正   | 王五 |
    | 郑琳   | 王五 |
    | 陈伟   | 王五 |
    | 沈林冲 | 王五 |
    +--------+------+
    // 少一条，没有总经理吴林

2.8、外连接？

    什么是外连接？和内连接有什么区别？

        内连接：
            假设A和B表进行连接，使用内连接的话，凡是A表和B表能够匹配上的记录就查询出来，这就是内联。
            AB两张表没有主副之分，两张表是平等的。

        外连接：
            假设A和B表进行连接，使用外连接的话，AB两张表中有一张表是主表，一张表是副表，主要查询主表中的数据，
            捎带着查询副表，当副表中的数据没有和主表中的数据匹配上，副表自动模拟出NULL与之匹配。
        
        外连接的分类？
            左外连接（左连接）：表示左边的这张表是主表。
            右外连接（右连接）：表示右边的这张表是主表。
        
            左连接有右链接的写法，右链接也会有对应的左连接的写法。

    案例：找出所有员工的上级领导？(所有员工必须查询出来。)

    内连接：
    select
        a.ename as '员工',b.ename as '领导'
    from
        emp a
    inner join
        emp b
    on
        a.mgr = b.empno;

    外连接：(左外连接/左连接)
    select
        a.ename as '员工',b.ename as '领导'
    from
        emp a
    left join
        emp b
    on
        a.mgr = b.empno;

    // outer可以省略的，带着outer目的是可读性好一些。
    select
        a.ename as '员工',b.ename as '领导'
    from
        emp a
    left outer join
        emp b
    on
        a.mgr = b.empno;

    外连接：(右外连接/右连接)
    select
        a.ename as '员工',b.ename as '领导'
    from
        emp b
    right join
        emp a
    on
        a.mgr = b.empno;

    +--------+------+
    | 员工   | 领导 |
    +--------+------+
    | 张三   | 吴林 |
    | 李四   | 吴林 |
    | 王五   | 吴林 |
    | 赵六   | 王五 |
    | 吴林   | NULL |
    | 陈金木 | 王五 |
    | 李庆   | 王五 |
    | 林墨染 | 王五 |
    | 王思爽 | 王五 |
    | 李可可 | 王五 |
    | 张思思 | 王五 |
    | 康志勇 | 王五 |
    | 秦敏   | 张三 |
    | 柳茹茹 | 李四 |
    | 赵东   | 张三 |
    | 孙乾   | 王五 |
    | 周正   | 王五 |
    | 郑琳   | 王五 |
    | 陈伟   | 王五 |
    | 沈林冲 | 王五 |
    +--------+------+

    外连接最主要的特点是：主表的数据无条件的全部查询出来。

    只要出现left或者right就是外连接，否则就是内连接。
    实际开发中，外连接使用多一些

    案例：找出哪个部门没有员工？
    select
        d.*
    from
        emp e
    right join
        dept d
    on
        e.deptno = d.deptno
    where
        e.empno is null;

    +--------+--------+------+
    | DEPTNO | DNAME  | LOC  |
    +--------+--------+------+
    |      5 | 品质部 | E区  |
    +--------+--------+------+

2.9、三张表怎么连接查询？
    案例：找出每一个员工的部门名称以及工资等级？
    select
        e.ename as '员工',d.dname as '部门'
    from
        emp e
    left join
        dept d
    on
        e.deptno = d.deptno;

    select
        e.ename,s.grade
    from
        emp e
    left join
        salgrade s
    on
        e.sal between s.losal and s.hisal;

    注意：解释一下：
        ...
            A
        join
            B
        on
            ...
        join
            C
        on
            ...

        表示：A表和B表先进性连接，连接之后A表继续和C表进行连接。

        select
            e.ename,d.dname,s.grade
        from
            emp e
        join
            dept d
        on
            e.deptno = d.deptno
        left join
            salgrade s
        on
            e.sal between s.losal and s.hisal;
        
        +--------+----------+-------+
        | ename  | dname    | grade |
        +--------+----------+-------+
        | 张三   | 行政部门 |     1 |
        | 李四   | 财务部门 |     1 |
        | 王五   | 研发中心 |     3 |
        | 赵六   | 研发中心 |     2 |
        | 吴林   | 总经办   |     4 |
        | 陈金木 | 研发中心 |     2 |
        | 李庆   | 研发中心 |     1 |
        | 林墨染 | 研发中心 |     1 |
        | 王思爽 | 研发中心 |     1 |
        | 李可可 | 研发中心 |     1 |
        | 张思思 | 研发中心 |     1 |
        | 康志勇 | 研发中心 |     1 |
        | 秦敏   | 行政部门 |  NULL |
        | 柳茹茹 | 财务部门 |  NULL |
        | 赵东   | 行政部门 |     1 |
        | 孙乾   | 研发中心 |     2 |
        | 周正   | 研发中心 |     2 |
        | 郑琳   | 研发中心 |     1 |
        | 陈伟   | 研发中心 |     2 |
        | 沈林冲 | 研发中心 |     1 |
        +--------+----------+-------+

    案例：找出每个员工的部门名称、工资等级、以及上级领导？
        select
            e.ename '员工',d.dname '部门',s.grade '工资等级',b.ename '上级领导'
        from
            emp e
        join
            dept d
        on
            e.deptno = d.deptno
        left join
            salgrade s
        on
            e.sal between s.losal and s.hisal
        left join
            emp b
        on
            e.mgr = b.empno;

        +--------+----------+----------+----------+
        | 员工   | 部门     | 工资等级 | 上级领导 |
        +--------+----------+----------+----------+
        | 张三   | 行政部门 |        1 | 吴林     |
        | 李四   | 财务部门 |        1 | 吴林     |
        | 王五   | 研发中心 |        3 | 吴林     |
        | 赵六   | 研发中心 |        2 | 王五     |
        | 吴林   | 总经办   |        4 | NULL     |
        | 陈金木 | 研发中心 |        2 | 王五     |
        | 李庆   | 研发中心 |        1 | 王五     |
        | 林墨染 | 研发中心 |        1 | 王五     |
        | 王思爽 | 研发中心 |        1 | 王五     |
        | 李可可 | 研发中心 |        1 | 王五     |
        | 张思思 | 研发中心 |        1 | 王五     |
        | 康志勇 | 研发中心 |        1 | 王五     |
        | 秦敏   | 行政部门 |     NULL | 张三     |
        | 柳茹茹 | 财务部门 |     NULL | 李四     |
        | 赵东   | 行政部门 |        1 | 张三     |
        | 孙乾   | 研发中心 |        2 | 王五     |
        | 周正   | 研发中心 |        2 | 王五     |
        | 郑琳   | 研发中心 |        1 | 王五     |
        | 陈伟   | 研发中心 |        2 | 王五     |
        | 沈林冲 | 研发中心 |        1 | 王五     |
        +--------+----------+----------+----------+
    
*/