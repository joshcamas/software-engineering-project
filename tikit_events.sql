-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tikit
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (8,'Comedy Crossing','Animal Crossing Standup','It\'s the world\'s first-ever Animal Crossing standup comedy show. And yes, ANYONE can watch this show online (in the world\'s CUTEST ZOOM MEETING) even if you do NOT play Animal Crossing.',580,'animalCrossing.jpg'),(9,'Therapy Live Sports','Swim, Bike, and Running Events','Therapy Live Sport is the ultimate online learning experience! A fully virtual conference with 3 education streams filled with the biggest names in the Sports & MSK industry, first looks at innovative products and services and a fully interactive networking experience.',350,'therapyLive.jpg'),(10,'Gentle Yoga','Gentle Yoga for Terrible Times','Human beings are not meant to be in constant fight or flight mode. Chronic stress takes a devastating toll on our mental and physical well-being. If you are exhausted, stressed out, burnt out, or just looking to relax and nourish your mind, body, and spirit, please join me for an hour of gentle yoga.',150,'yoga.jpg'),(11,'Virtual Dance Fitness Party','This is a fun loving intense dance fitness class! No dance experience required just an open mind and willing body ready to dance!','If you\'re trying to keep working towards your fitness goals while staying safe this class is for you. In this class we emphasize loving God, loving yourself and loving others. By the end of class you will be pumped and ready to take on the world!',800,'fitness.jpg'),(12,'Engage 2020','Join Princeton University innovators and entrepreneurs to build a better future.','Create your own agenda from 50+ virtual sessions of relevance to academia, business and industry, Princeton alumni, entrepreneurs, investors, foundations and the intellectually curious.',1080,'engage.jpg');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-02 15:16:31
