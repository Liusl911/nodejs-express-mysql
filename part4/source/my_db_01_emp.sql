-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: my_db_01
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `emp`
--

DROP TABLE IF EXISTS `emp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp` (
  `EMPNO` int NOT NULL AUTO_INCREMENT COMMENT '员工编号',
  `ENAME` varchar(10) DEFAULT NULL COMMENT '员工姓名',
  `JOB` varchar(9) DEFAULT NULL COMMENT '工作岗位',
  `MGR` int DEFAULT NULL COMMENT '上级领导编号',
  `HIREDATE` date DEFAULT NULL COMMENT '入职日期',
  `SAL` double(7,2) DEFAULT NULL COMMENT '月薪',
  `COMM` double(7,2) DEFAULT NULL COMMENT '补助/津贴',
  `DEPTNO` int DEFAULT NULL COMMENT '部门编号',
  PRIMARY KEY (`EMPNO`),
  UNIQUE KEY `EMPNO_UNIQUE` (`EMPNO`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='员工信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp`
--

LOCK TABLES `emp` WRITE;
/*!40000 ALTER TABLE `emp` DISABLE KEYS */;
INSERT INTO `emp` VALUES (1,'张三','人事行政主管',5,'2022-01-01',10000.00,300.00,1),(2,'李四','财务主管',5,'2021-10-10',9500.00,0.00,2),(3,'王五','技术总监',5,'2021-05-06',20000.00,500.00,3),(4,'赵六','Java工程师',3,'2022-02-02',12000.00,300.00,3),(5,'吴林','总经理',NULL,'2020-10-01',30000.00,0.00,4),(6,'陈金木','C++工程师',3,'2021-10-11',11000.00,NULL,3),(7,'李庆','Web工程师',3,'2022-01-20',10000.00,100.00,3),(8,'林墨染','Web工程师',3,'2022-02-19',8000.00,100.00,3),(9,'王思爽','测试工程师',3,'2022-03-14',6000.00,NULL,3),(10,'李可可','UI设计师',3,'2022-02-19',7500.00,100.00,3),(11,'张思思','UI设计师',3,'2022-03-01',6000.00,50.00,3),(12,'康志勇','测试工程师',3,'2022-05-06',8500.00,100.00,3),(13,'秦敏','行政专员',1,'2022-05-07',4500.00,NULL,1),(14,'柳茹茹','财务专员',2,'2022-05-10',4800.00,NULL,2),(15,'赵东','行政专员',1,'2022-05-09',5200.00,NULL,1),(16,'孙乾','算法工程师',3,'2022-05-09',12000.00,200.00,3),(17,'周正','算法工程师',3,'2022-05-10',15000.00,300.00,3),(18,'郑琳','Java工程师',3,'2022-05-05',9500.00,100.00,3),(19,'陈伟','C++工程师',3,'2022-04-22',12000.00,100.00,3),(20,'沈林冲','实施工程师',3,'2022-04-11',8500.00,100.00,3);
/*!40000 ALTER TABLE `emp` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-13 17:52:38
