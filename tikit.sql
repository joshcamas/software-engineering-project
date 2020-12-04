-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: tikit
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `shortdesc` varchar(500) DEFAULT NULL,
  `longdesc` varchar(2000) DEFAULT NULL,
  `price` int DEFAULT '0',
  `headerimg` varchar(255) DEFAULT NULL,
  `owner` int DEFAULT '-1',
  `date` datetime DEFAULT NULL,
  `ticketcount` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (6,'The Debt-Free Tool Kit','The Studio at TFD presents The Debt-Free Tool Kit , a workshop about managing and conquering your debt.','This will be an action-oriented workshop all about freeing yourself from debt in a way that\'s both approachable and sustainable. Financial educator and debt-free success story Cindy Zuniga will give attendees the tools needed to make debt a manageable part of their lives while working towards debt freedom. From new budgeting strategies, to the right goal maps and trackers, to the everyday practices to help stay focused and positive when it comes to debt repayment, this workshop will provide attendees all of the right resources to conquer their debts (no matter where they might come from).',1000,'debt.jpg',2,'2020-12-14 00:00:00',4),(7,'Every Kid Can Cook ','During Every Kid Can Cooks monthly cooking classes, your child(ren) will learn how to cook healthy recipes, learn fun nutrition facts and remake their favorite recipes a little healthier. ','Help your kids get a taste of what it\'s like to be a #BossKidsCook! During our monthly cooking classes, your child(ren) will learn how to cook healthy recipes independently, learn fun nutrition facts and re-make their favorite recipes a little healthier. ',0,'cooking.jpg',2,'2020-12-12 00:00:00',2),(8,'Comedy Crossing','Animal Crossing Standup','It\'s the world\'s first-ever Animal Crossing standup comedy show. And yes, ANYONE can watch this show online (in the world\'s CUTEST ZOOM MEETING) even if you do NOT play Animal Crossing.',580,'animalCrossing.jpg',2,'2020-12-03 00:00:00',0),(9,'Therapy Live Sports','Swim, Bike, and Running Events','Therapy Live Sport is the ultimate online learning experience! A fully virtual conference with 3 education streams filled with the biggest names in the Sports & MSK industry, first looks at innovative products and services and a fully interactive networking experience.',350,'therapyLive.jpg',2,'2020-12-14 00:00:00',3),(10,'Gentle Yoga','Gentle Yoga for Terrible Times','Human beings are not meant to be in constant fight or flight mode. Chronic stress takes a devastating toll on our mental and physical well-being. If you are exhausted, stressed out, burnt out, or just looking to relax and nourish your mind, body, and spirit, please join me for an hour of gentle yoga.',150,'yoga.jpg',2,'2020-12-14 00:00:00',50),(11,'Virtual Dance Fitness Party','This is a fun loving intense dance fitness class! No dance experience required just an open mind and willing body ready to dance!','If you\'re trying to keep working towards your fitness goals while staying safe this class is for you. In this class we emphasize loving God, loving yourself and loving others. By the end of class you will be pumped and ready to take on the world!',800,'fitness.jpg',2,'2020-12-14 00:00:00',0),(12,'Engage 2020','Join Princeton University innovators and entrepreneurs to build a better future.','Create your own agenda from 50+ virtual sessions of relevance to academia, business and industry, Princeton alumni, entrepreneurs, investors, foundations and the intellectually curious.',1080,'engage.jpg',2,'2020-12-14 00:00:00',2);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `used` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (23,6,2,'2020-12-03',1),(24,6,1,'2020-12-03',1),(25,6,1,'2020-12-04',1);
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,8,580),(2,9,350),(3,10,150),(4,11,800),(5,12,1080);
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'joshcamas','833ec93e5b21efa2c6fecd2f2a1f21dc4f1e9959ad382f534599c6525b7943ca4c5123e18df0fff8313b321e5b658da8bf8ca145671bb9f40282cdd65e626ca4','joshcamas@gmail.com','d'),(3,'poopy','79f623cf385b62d2250dffc46fa0a157b60e4f652aabe0e496fd262f80904c1c4ec1936794cf2eeba938c68aff433723170fca5760c4c4be7adffb6ee8db7142','poopy@gmail.com','b805ae3e78f222175b57083d958db431'),(4,'joshcamasss','bdcd35c07724ca7fa56bed2df0db861238e1f1a1fa3f9c2337fd0f4e6eb4dffd681b764c2a6c6e1708f0f4c08ba2362bcdcbbb80cc5ad5aa0fc3fb8da56f91da','joshcamasss','6373f52b49f86ea47338083f82ab7bf3'),(5,'joshcamassss','f8b80b26e74e7cd1811fdf40e7b3c3e37770af644ef541fcffc42226d242e2166e30f1c80b815b71c4ab7072ce23461e7a7cd226344d150f3dee7081fc01e1b6','joshcamassss','5e285202691261e0d6a3ecd47d1db91c'),(6,'asdasdasd','e427d5fcde8892d76fb80cfe830582e237f4a899ce68cf4473fa19a32b33ff8c3e549e8ba11464c032d4f436ec396de01f93b4a32049dadd3e9432cb4642f34a','joshcamas','65ec06bd9a9f9c8a4571551ec144b0fd'),(7,'asdasdasdd','d3e6f93b8f2c0779538239a69a0cc1fd7cde2e49fc6c0da456f5cad5a90274c75e62102fa7ec7c20a0c3c8ddea4e436225fb78db78a07e0fb5749224088798bd','joshcamasf','d65a0c4ad923d940a7b038de635809ca'),(8,'asdasdasdd2','e66a9a3719c0ce5f51eea436bacaa67354dea528a2bd61ddcfe3feac9e8c920ee279188a755d077c777ce2521e7f1241ccd85052fd8c8c5ae3a518ac92811aa0','joshcamasfd','312aa6a1352f0bf53b4c0ef33507721f'),(9,'asdasdasdasdasd','667ddf03b02fd502ad9d45037ad92ce51242b18ae37fa79ee1205cb8f3fa4ed7d4488e6cf9f21297b03f7fa619e230726a9464ae972ba47171b0bcd17a91ac8f','josasdasdasd','b84f80644104f5b4121911338d92c637');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-04 15:37:20
