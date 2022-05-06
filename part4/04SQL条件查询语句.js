/*

12、条件查询。

    语法格式：
        select
            字段1,字段2...
        from
            表名
        where
            条件;

    执行顺序：先from，然后where，最后select

    查询工资等于12000的员工姓名？
    select ename from emp where sal = 12000;
    +-------+
    | ename |
    +-------+
    | 赵六  |
    +-------+

    查询张三的工资？
    select sal from emp where ename = '张三';
    +----------+
    | sal      |
    +----------+
    | 10000.00 |
    +----------+

    找出工资高于15000的员工？
    select ename from emp where sal > 15000;
    +-------+
    | ename |
    +-------+
    | 王五  |
    | 吴林  |
    +-------+

    找出工资不等于12000的员工？
    select ename from emp where sal != 12000;
    select ename from emp where sal <> 12000;
    +-------+
    | ename |
    +-------+
    | 张三  |
    | 李四  |
    | 王五  |
    | 吴林  |
    +-------+
    找出工资在10000到20000的员工，包括10000和20000？
    select ename from emp where sal >= 10000 and sal <= 20000;
    select ename from emp where sal between 10000 and 20000; // between...and... 是闭区间 [10000 ~ 20000]，左小右大
    +-------+
    | ename |
    +-------+
    | 张三  |
    | 王五  |
    | 赵六  |
    +-------+
    between and除了可以是要用在数字方面之外，还可以使用在字符串方面。 // 左闭右开

    找出哪些人津贴为NULL？
        在数据库中，null不是一个值，代表什么也没有，为空。
        空不是一个值，不能用等号衡量。
        必须使用 is null 或者 is not null
        select ename,sal,comm from emp where comm is null;
        +--------+----------+------+
        | ename  | sal      | comm |
        +--------+----------+------+
        | 陈金木 | 11000.00 | NULL |
        +--------+----------+------+

    找出哪些人津贴不为NULL？
        select ename,sal,comm from emp where comm is not null;
        +-------+----------+--------+
        | ename | sal      | comm   |
        +-------+----------+--------+
        | 张三  | 10000.00 | 300.00 |
        | 李四  |  9500.00 |   0.00 |
        | 王五  | 20000.00 | 500.00 |
        | 赵六  | 12000.00 | 300.00 |
        | 吴林  | 30000.00 |   0.00 |
        +-------+----------+--------+

    找出哪些人没有津贴？
        select ename,sal,comm from emp where comm is null or comm = 0;
        +--------+----------+------+
        | ename  | sal      | comm |
        +--------+----------+------+
        | 李四   |  9500.00 | 0.00 |
        | 吴林   | 30000.00 | 0.00 |
        | 陈金木 | 11000.00 | NULL |
        +--------+----------+------+

    找出工作岗位是Java工程师和C++工程师的员工？
        select ename,job from emp where job = 'Java工程师' or job =  'C++工程师';
        +--------+------------+
        | ename  | job        |
        +--------+------------+
        | 赵六   | Java工程师 |
        | 陈金木 | C++工程师  |
        +--------+------------+

    and和or联合使用：找出薪资小于20000的并且部门编号是1或者3的员工
        select ename,sal,deptno from emp where sal < 20000 and (deptno = 1 or deptno = 3);
        +--------+----------+--------+
        | ename  | sal      | deptno |
        +--------+----------+--------+
        | 张三   | 10000.00 |      1 |
        | 赵六   | 12000.00 |      3 |
        | 陈金木 | 11000.00 |      3 |
        +--------+----------+--------+
        注意：当运算符的优先级不确定的时候加小括号。

    in等同于or：找出工作岗位是人事行政主管和财务主管的员工？
        select ename,job from emp where job = '人事行政主管' or job = '财务主管';
        select ename,job from emp where job in('人事行政主管', '财务主管');
        +-------+--------------+
        | ename | job          |
        +-------+--------------+
        | 张三  | 人事行政主管 |
        | 李四  | 财务主管     |
        +-------+--------------+

        select ename,job,sal from emp where sal in (10000, 12000);
        +-------+--------------+----------+
        | ename | job          | sal      |
        +-------+--------------+----------+
        | 张三  | 人事行政主管 | 10000.00 |
        | 赵六  | Java工程师   | 12000.00 |
        +-------+--------------+----------+

    not in：不在这几个值当中。
        select ename,job,sal from emp where sal not in(10000, 12000);
        +--------+-----------+----------+
        | ename  | job       | sal      |
        +--------+-----------+----------+
        | 李四   | 财务主管  |  9500.00 |
        | 王五   | 技术总监  | 20000.00 |
        | 吴林   | 总经理    | 30000.00 |
        | 陈金木 | C++工程师 | 11000.00 |
        +--------+-----------+----------+

    模糊查询like？
        在模糊查询当中，必须掌握两个特殊的符号，一个是%，一个是_
        %代表任意多个字符，_代表任意一个字符。

        找出名字当中含有李字的员工？
        select ename,job from emp where ename like '%李%';
        +-------+-----------+
        | ename | job       |
        +-------+-----------+
        | 李四  | 财务主管  |
        | 李庆  | Web工程师 |
        +-------+-----------+

        找出名字当中第二个字为五的员工？
        select ename,job from emp where ename like '_五';
        +-------+----------+
        | ename | job      |
        +-------+----------+
        | 王五  | 技术总监 |
        +-------+----------+

        找出名字当中含有下划线的员工？（\转义）
        select ename,job from emp where ename like '%\_%';

        找出名字最后一个字是木的员工？
        select ename,job from emp where ename like '%木';
        +--------+-----------+
        | ename  | job       |
        +--------+-----------+
        | 陈金木 | C++工程师 |
        +--------+-----------+

*/