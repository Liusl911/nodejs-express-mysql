// ============================ MySQL day01 ============================

// 1、sql、BD、BDMS分别是什么，他们之间的关系？

//    DB：
//       DataBase（数据库，数据库实际上在硬盘上以文件的形式存在）

//    DBMS：
//       DataBase Management System（数据库管理系统，常见的有：MySQL、Oracle、DB2、Sybase、SQLServer......）

//    SQL：
//       结构化查询语言，是一门标准通用的语言。标准的sql适合于所有的数据库产品。
//       SQL属于高级语言。
//       SQL语句在执行的时候，实际上内部也会先进行编译，然后再执行sql。（sql语句的编译由DBMS完成。）

//    DBMS负责执行sql语句，通过执行sql语句来操作DB当中的数据
//    DBMS -(执行)-> SQL -(操作)-> DB

// ---------------------------------------------------------------------------------------------------------------------------

// 2、什么是表

//    表：table是数据库的基本组成单元，所有的数据都以表格的形式组织，目的是可读性强。
//    一个表包括行和列：
//      行：被称为数据/记录（data）
//      列：被称为字段（column）

//    每一个字段应该包括哪些属性？
//      字段名、数据类型、相关的约束

// ---------------------------------------------------------------------------------------------------------------------------

// 3、学习MySQL主要还是学习通用的SQL语句，SQL语句包括增删改查，SQL语句怎么分类？
//    DQL（数据库查询语言）：查询语句，凡是select语句都是DQL。
//    DML（数据操作语言）：insert delete update，对表当中的数据进行增删改。
//    DDL（数据定义语言）：create drop alter，对表结构的增删改。
//    TCL（事物控制语言）：commit提交事物，rollback回滚事物。（TCL中的T是Transaction）
//    DCL（数据控制语言）：grant授权、revoke撤销权限等。