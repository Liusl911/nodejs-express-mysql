/*

4、union（可以将查询结果集相加）

    案例：找出工作岗位是Java工程师和C++工程师的员工？
        第一种：select ename,job from emp where job = 'Java工程师' or job = 'C++工程师';
        第二种：select ename,job from emp where job in('Java工程师', 'C++工程师');
        第三种：select ename,job from emp where job = 'Java工程师'
                union
                select ename,job from emp where job = 'C++工程师';

                +--------+------------+
                | ename  | job        |
                +--------+------------+
                | 赵六   | Java工程师 |
                | 郑琳   | Java工程师 |
                | 陈金木 | C++工程师  |
                | 陈伟   | C++工程师  |
                +--------+------------+

        两张不相干的表中的数据拼接在一起显示？

            select ename from emp union select dname from dept;
            +----------+
            | ename    |
            +----------+
            | 张三     |
            | 李四     |
            | 王五     |
            | 赵六     |
            | 吴林     |
            | 陈金木   |
            | 李庆     |
            | 林墨染   |
            | 王思爽   |
            | 李可可   |
            | 张思思   |
            | 康志勇   |
            | 秦敏     |
            | 柳茹茹   |
            | 赵东     |
            | 孙乾     |
            | 周正     |
            | 郑琳     |
            | 陈伟     |
            | 沈林冲   |
            | 品质部   |
            | 总经办   |
            | 研发中心 |
            | 行政部门 |
            | 财务部门 |
            +----------+

*/ 