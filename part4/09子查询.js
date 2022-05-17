/*

额外工具推荐：navicat（收费的）

3.1、什么是子查询？子查询都可以出现在哪里？
    select当中嵌套select语句，被嵌套的select语句就是子查询。
    子查询可以出现在哪里？
    select
        ..(select).
    from
        ..(select).
    where
        ..(select).

3.2、where子句中使用子查询

    案例：找出薪资高于平均薪资的员工信息？
        select * from emp where sal > avg(sal); // 这是错误的写法，where后面不能直接使用分组函数。

        第一步：找出平均薪资
            select avg(sal) from emp;
            +--------------+
            | avg(sal)     |
            +--------------+
            | 10500.000000 |
            +--------------+
        第二步：where过滤
            select * from emp where sal > (select avg(sal) from emp);
            +-------+--------+------------+------+------------+----------+--------+--------+
            | EMPNO | ENAME  | JOB        | MGR  | HIREDATE   | SAL      | COMM   | DEPTNO |
            +-------+--------+------------+------+------------+----------+--------+--------+
            |     3 | 王五   | 技术总监   |    5 | 2021-05-06 | 20000.00 | 500.00 |      3 |
            |     4 | 赵六   | Java工程师 |    3 | 2022-02-02 | 12000.00 | 300.00 |      3 |
            |     5 | 吴林   | 总经理     | NULL | 2020-10-01 | 30000.00 |   0.00 |      4 |
            |     6 | 陈金木 | C++工程师  |    3 | 2021-10-11 | 11000.00 |   NULL |      3 |
            |    16 | 孙乾   | 算法工程师 |    3 | 2022-05-09 | 12000.00 | 200.00 |      3 |
            |    17 | 周正   | 算法工程师 |    3 | 2022-05-10 | 15000.00 | 300.00 |      3 |
            |    19 | 陈伟   | C++工程师  |    3 | 2022-04-22 | 12000.00 | 100.00 |      3 |
            +-------+--------+------------+------+------------+----------+--------+--------+

3.3、from后面嵌套子查询
    
    案例：找出每个部门平均薪资的薪资等级？
        第一步：找出每个部门平均薪资

            select
                d.dname 'dname',avg(e.sal) 'avgsal'
            from
                emp e
            join
                dept d
            on
                e.deptno = d.deptno
            group by
                e.deptno;

            +----------+--------------+
            | dname    | avgsal       |
            +----------+--------------+
            | 行政部门 |  6566.666667 |
            | 财务部门 |  7150.000000 |
            | 研发中心 | 10428.571429 |
            | 总经办   | 30000.000000 |
            +----------+--------------+

        第二步：将以上的查询结果当做临时表t，让t表和salgrade s表连接，条件是：t.avgsal between s.losal and s.hisal

            select
                t.*,s.grade 'grade'
            from
                (select
                    d.dname 'dname',avg(e.sal) 'avgsal'
                from
                    emp e
                join
                    dept d
                on
                    e.deptno = d.deptno
                group by
                    e.deptno) t
            left join
                salgrade s
            on
                t.avgsal between s.losal and s.hisal;

            +----------+--------------+-------+
            | dname    | avgsal       | grade |
            +----------+--------------+-------+
            | 行政部门 |  6566.666667 |     1 |
            | 财务部门 |  7150.000000 |     1 |
            | 研发中心 | 10428.571429 |     2 |
            | 总经办   | 30000.000000 |     4 |
            +----------+--------------+-------+

    案例：找出每个部门平均的薪资等级？

        select
            e.deptno,avg(s.grade)
        from
            emp e
        left join
            salgrade s
        on
            e.sal between s.losal and s.hisal
        group by
            e.deptno;
        
        +--------+--------------+
        | deptno | avg(s.grade) |
        +--------+--------------+
        |      1 |       1.0000 |
        |      2 |       1.0000 |
        |      3 |       1.5000 |
        |      4 |       4.0000 |
        +--------+--------------+

3.4、在select后面嵌套子查询。
    案例：查询每员工所在的部门名称？
        常规：select e.ename,d.dname from emp e join dept d on e.deptno = d.deptno;

        select后面嵌套（不常用）：
            select
                e.ename,
                (select d.dname from dept d where e.deptno = d.deptno) as dname
            from
                emp e;

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

*/ 