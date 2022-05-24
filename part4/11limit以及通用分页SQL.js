/*

5、limit（重点中的重点，以后分页查询全靠它。）

5.1、limit是mysql特有的，其他数据库中没有，不通用。（Oracle中有一个相同的机制，叫做rownum）

5.2、limit取结果集中的部分数据，这是它的作用。

5.3、语法机制：
    limit startIndex length
        startIndex表示起始位置
        length表示取几个

    案例：取出工资前五名（思路：降序取前五个）
        select ename,sal from emp order by sal desc;
        取前五个
            select ename,sal from emp order by sal desc limit 0, 5;
            select ename,sal from emp order by sal desc limit 5;

5.4、limit是sql语句最后执行的一个环节：
    select          5
        ...
    from            1
        ...
    where           2
        ...
    group by        3
        ...
    having          4
        ...
    order by        6
        ...
    limit           7
        ...

5.5、案例：找出工资排名在第四到第九名的员工？
    select ename,sal from emp order by sal desc limit 3, 6;
    +--------+----------+
    | ename  | sal      |
    +--------+----------+
    | 赵六   | 12000.00 |
    | 孙乾   | 12000.00 |
    | 陈伟   | 12000.00 |
    | 陈金木 | 11000.00 |
    | 张三   | 10000.00 |
    | 李庆   | 10000.00 |
    +--------+----------+

5.6、通用的标准分页sql？

    每页显示3条记录：
    第1页：0, 3
    第2页：3, 3
    第3页：6, 3
    第4页：9, 3
    第5页：12, 3

    每页显示 pageSize 条记录，
    第 pageNo 页：(pageNo - 1) * pageSize, pageSize

    nodejs代码：
        let pageNo = 2, // 页码是2
            pageSize = 10; // 每页显示10条
        limt (pageNo - 1) * pageSize, pageSize;

*/ 