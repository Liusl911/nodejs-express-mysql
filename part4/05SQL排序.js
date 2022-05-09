/*

13、排序（升序、降序）

    按照工资升序，找出员工姓名和薪资？
    select 
        ename,sal 
    from 
        emp 
    order by 
        sal;
    +-----------+----------+
    | ename     | sal      |
    +-----------+----------+
    | 李四      |  9500.00 |
    | 张三      | 10000.00 |
    | 李庆      | 10000.00 |
    | 陈金木    | 11000.00 |
    | 赵六      | 12000.00 |
    | 王五      | 20000.00 |
    | 吴林      | 30000.00 |
    +-----------+----------+

    注意：默认是升序。怎么指定升序或者将序？asc表示升序，desc表示降序。
    select ename,sal from emp order by sal; // 升序
    select ename,sal from emp order by sal asc; // 升序
    select ename,sal from emp order by sal desc; // 降序

    按照工资的降序排列，当薪资一样的时候再按照姓名的升序排列。
    select ename,sal from emp order by sal desc,ename asc;
    注意：越靠前的字段越能起到主导的作用，只有当前面的字段无法完成排序的时候，才会启用后面的字段排序。

    找到工作岗位是Web工程师的员工，并且按照薪资的降序排列？
    select ename,job,sal from emp where job = 'Web工程师' order by sal desc;
    注意：执行顺序为 from --> where --> select --> order by

*/