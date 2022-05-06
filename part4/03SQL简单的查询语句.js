/*

11、简单的查询语句（DQL）
    语法格式：
        select 字段名1,字段名2,字段名3,... from 表名;
    提示：
        1、任何一条sql语句以“;”结尾。
        2、sql语句不区分大小写。

    查询员工的年薪？（字段可以参与数学运算。）
        select ENAME,SAL * 12 from emp;
        +-------+-----------+
        | ename | sal * 12  |
        +-------+-----------+
        | 张三  | 120000.00 |
        | 李四  | 114000.00 |
        | 王五  | 240000.00 |
        | 赵六  | 144000.00 |
        | 吴林  | 360000.00 |
        +-------+-----------+

    给查询结果的列重命名？
        select ename,sal * 12 as yearsal from emp;

    别名中有中文？
        select ename,sal *12 as 年薪 from emp; 错误
        select ename,sal *12 as '年薪' from emp;
        +-------+-----------+
        | ename | 年薪      |
        +-------+-----------+
        | 张三  | 120000.00 |
        | 李四  | 114000.00 |
        | 王五  | 240000.00 |
        | 赵六  | 144000.00 |
        | 吴林  | 360000.00 |
        +-------+-----------+

    注意：标准sql语句中要求字符串使用单引号括起来，虽然mysql支持双引号，但不建议。

    as关键字可以省略？
        select ename,sal * 12 '年薪' from emp;
        +-------+-----------+
        | ename | 年薪      |
        +-------+-----------+
        | 张三  | 120000.00 |
        | 李四  | 114000.00 |
        | 王五  | 240000.00 |
        | 赵六  | 144000.00 |
        | 吴林  | 360000.00 |
        +-------+-----------+

    查询所有字段？
        select * from emp;  注意：实际开发中不建议使用*，效率低。

*/