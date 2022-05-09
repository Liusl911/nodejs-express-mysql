/*

14、分组函数
    count 计数
    sum 求和
    avg 平均值
    max 最大值
    min 最小值

    记住：所有的分组函数都是对“某一组”数据进行操作的。

    找出工资总和？
        select sum(sal) from emp;
    找出最高工资？
        select max(sal) from emp;
    找出最低工资？
        select min(sal) from emp;
    找出平均工资？
        select avg(sal) from emp;
    找出总人数？
        select count(*) from emp;
        select count(ename) from emp;
    
    分组函数一共5个。
    分组函数还有另一个名称：多行处理函数。
    多行处理函数的特点：输入多行，最终输出的结果是一行。
    
    分组函数自动忽略NULL。
        select count(comm) from emp;
        +-------------+
        | count(comm) |
        +-------------+
        |           7 |
        +-------------+

        select sum(comm) from emp;
        | sum(comm) |
        +-----------+
        |   1300.00 |
        +-----------+

        select sum(comm) from emp where is not null; // 不需要额外加这个过滤条件。sum函数自动忽略NULL。

        找出工资高于平均工资的员工？
            select avg(sal) from emp; // 平均工资
            +--------------+
            | avg(sal)     |
            +--------------+
            | 13812.500000 |
            +--------------+

            select ename,sal from emp where sal > avg(sal); // ERROR 1111 (HY000): Invalid use of group function
                原因：SQL语句当中有一个语法规则，分组函数不可直接使用在where子句当中。why????
                怎么解释？
                    因为group by是在where执行之后才会执行的。

                select          5
                    ..
                from            1
                    ..
                where           2
                    ..
                group by        3
                    ..
                having          4
                    ..
                order by        6
                    ..

        找出工资高于平均工资的员工？
            第一步：找出平均工资？
                select avg(sal) from emp;
                +--------------+
                | avg(sal)     |
                +--------------+
                | 13812.500000 |
                +--------------+
            第二步：找出工资高于平均工资的员工？
                select ename,job,sal from emp where sal > 13812.500000;
                +--------+--------------+----------+
                | ename  | job          | sal      |
                +--------+--------------+----------+
                | 王五   | 技术总监     | 20000.00 |
                | 吴林   | 总经理       | 30000.00 |
                +--------+--------------+----------+
            最终：
                select ename,job,sal from emp where sal > (select avg(sal) from emp);
        

    count(*)和count(具体的某个字段)，他们有什么区别？
        count(*)：不是统计某个字段中数据的个数，而是统计总记录条数。（和某个字段无关）
        count(comm)：表示统计comm字段中不为NULL的数据总数量。

    分组函数也能组合起来使用：
        select count(*),max(sal),min(sal),avg(sal),sum(sal) from emp;
        +----------+----------+----------+--------------+-----------+
        | count(*) | max(sal) | min(sal) | avg(sal)     | sum(sal)  |
        +----------+----------+----------+--------------+-----------+
        |        8 | 30000.00 |  8000.00 | 13812.500000 | 110500.00 |
        +----------+----------+----------+--------------+-----------+

---------------------------------------------------------------------------------------------------------------------------

15、单行处理函数
    什么是单行处理函数？
        输入一行，输出一行。

    计算每个员工的年薪？
        select ename,(sal+comm)*12 as yearsal from emp;
        重点：所有数据库规定，只要有NULL参与的运算结果一定是NULL。
        使用ifnull()函数：
        select ename,ifnull(sal+comm,0) as yearsal from emp;

    ifnull() 空处理函数？
        ifnull(可能为NULL的数据,被当作什么处理)：属于单行处理函数。
        select ename,ifnull(comm,0) from emp;
        +-----------+----------------+
        | ename     | ifnull(comm,0) |
        +-----------+----------------+
        | 张三      |         300.00 |
        | 李四      |           0.00 |
        | 王五      |         500.00 |
        | 赵六      |         300.00 |
        | 吴林      |           0.00 |
        | 陈金木    |           0.00 |
        | 李庆      |         100.00 |
        | 林墨染    |         100.00 |
        +-----------+----------------+

---------------------------------------------------------------------------------------------------------------------------

16、group by 和 having

    group by ：按照某个字段或者某些字段进行分组。
    having ：是对分组之后的数据进行再次过滤。

    案例：找出每个工作岗位的最高薪资？
    select max(sal) from emp group by job;

    注意：分组函数一般都会和group by联合使用，这也是为什么他被称为分组函数的原因。
    并且任何一个分组函数（count max min avg sum）都是在group by语句执行结束之后才会执行的。
    当一条sql语句没有group by的时候，整张表的数据会自成一组。

*/