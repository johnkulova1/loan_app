-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 25, 2014 at 03:41 PM
-- Server version: 5.5.38
-- PHP Version: 5.3.10-1ubuntu3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `loan_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `ams_course_admissions`
--

CREATE TABLE IF NOT EXISTS `ams_course_admissions` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `ams_student_account`
--

CREATE TABLE IF NOT EXISTS `ams_student_account` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(100) NOT NULL,
  `course_id` int(11) NOT NULL,
  `amount_paid` text NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `ams_student_info`
--

CREATE TABLE IF NOT EXISTS `ams_student_info` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(10) NOT NULL,
  `email_address` text NOT NULL,
  `student_names` text NOT NULL,
  `national_idno` text NOT NULL,
  `postal_address` text NOT NULL,
  `course_applied_for` text NOT NULL,
  `mean_grade` varchar(20) NOT NULL,
  `start_date` text NOT NULL,
  `f_surname` text NOT NULL,
  `f_othernames` text NOT NULL,
  `f_idno` text NOT NULL,
  `f_pin_no` text NOT NULL,
  `f_postal_address` text NOT NULL,
  `f_email_address` text NOT NULL,
  `f_mobile_no` text NOT NULL,
  `f_occupation` text NOT NULL,
  `f_employer_name` text NOT NULL,
  `m_surname` text NOT NULL,
  `m_othernames` text NOT NULL,
  `m_id_no` text NOT NULL,
  `m_pin_no` text NOT NULL,
  `m_postal_address` text NOT NULL,
  `m_email_address` text NOT NULL,
  `m_mobile_no` text NOT NULL,
  `m_occupation` text NOT NULL,
  `m_employer_name` text NOT NULL,
  `g_surname` text NOT NULL,
  `g_othernames` text NOT NULL,
  `g_id_no` text NOT NULL,
  `g_pin_no` text NOT NULL,
  `g_postal_address` text NOT NULL,
  `g_email_address` text NOT NULL,
  `g_mobile_no` text NOT NULL,
  `g_occupation` text NOT NULL,
  `g_employer_name` text NOT NULL,
  `g_relationship` text NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `ams_student_info`
--

INSERT INTO `ams_student_info` (`_id`, `student_id`, `email_address`, `student_names`, `national_idno`, `postal_address`, `course_applied_for`, `mean_grade`, `start_date`, `f_surname`, `f_othernames`, `f_idno`, `f_pin_no`, `f_postal_address`, `f_email_address`, `f_mobile_no`, `f_occupation`, `f_employer_name`, `m_surname`, `m_othernames`, `m_id_no`, `m_pin_no`, `m_postal_address`, `m_email_address`, `m_mobile_no`, `m_occupation`, `m_employer_name`, `g_surname`, `g_othernames`, `g_id_no`, `g_pin_no`, `g_postal_address`, `g_email_address`, `g_mobile_no`, `g_occupation`, `g_employer_name`, `g_relationship`) VALUES
(1, 8592, 'jhnkulova@gmail.com', 'John Kulova', '25139625', 'P.O. BOX 29261 Kangemi', 'BBIT', '', '', 'Ngichabe', 'Christopher Kulova', '23445678', 'AESDF44REF', 'P.O. BOX 29261 Kangemi', 'cngichabe@gmail.com', '0720741352', 'Doctor', 'KARI', 'Kulova', 'Justine', '46655744', 'SDNNRJ656', 'P.O. BOX 29261 Kangemi', 'jkulova@gmail.com', '0716118889', 'Teacher', 'Retired', '', '', '', '', '', '', '', '', '', ''),
(2, 49768, 'kelvin@gmail.com', 'Kelvin Yonga', '2345678', 'P.O.BOX 345 Nairobi', 'BBIT', '', '', 'Peter', 'Yonga', '1235686', 'AASDFEC', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, 23675, 'imueni@strathmore.edu', 'Imelda Mueni', '8789874', 'P.O BOX 33565 Nairobi', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `ams_student_payments`
--

CREATE TABLE IF NOT EXISTS `ams_student_payments` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `invoice_number` int(10) NOT NULL,
  `invoice_amt` int(7) NOT NULL,
  `invoice_date` date NOT NULL,
  `received_by` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `student_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `invoice_number` (`invoice_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `ams_student_receipts`
--

CREATE TABLE IF NOT EXISTS `ams_student_receipts` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `receipt_number` int(10) NOT NULL,
  `receipt_amt` int(7) NOT NULL,
  `receipt_date` date NOT NULL,
  `received_by` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `student_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `donors`
--

CREATE TABLE IF NOT EXISTS `donors` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `donor_name` varchar(60) NOT NULL,
  `donor_desc` text NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `donor_contributions`
--

CREATE TABLE IF NOT EXISTS `donor_contributions` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `donor_id` int(11) NOT NULL,
  `amount` text NOT NULL,
  `date_contributed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `IMPORT_APPLICANTS`
--

CREATE TABLE IF NOT EXISTS `IMPORT_APPLICANTS` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `student_id` int(10) NOT NULL,
  `full_name` varchar(20) NOT NULL,
  `nationality` varchar(20) NOT NULL DEFAULT '''Kenya''',
  `gender` varchar(10) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `mean_grade` int(2) DEFAULT NULL,
  `course_applying` varchar(30) NOT NULL,
  `application_status` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

--
-- Dumping data for table `IMPORT_APPLICANTS`
--

INSERT INTO `IMPORT_APPLICANTS` (`id`, `student_id`, `full_name`, `nationality`, `gender`, `email`, `mean_grade`, `course_applying`, `application_status`) VALUES
(1, 46129, 'Wanjiru, Benjamin Mb', 'Kenya', 'MALE', NULL, NULL, 'CPA(EC)-05', 'ACCEPTED'),
(2, 5328, 'Gichuki, James Mwang', 'Kenya', 'MALE', NULL, NULL, 'BCOM(EC)-05', 'ACCEPTED'),
(3, 46132, 'Mutua, Raphael Kyalo', 'Kenya', 'MALE', NULL, NULL, 'ACCA(EC)-05', 'ACCEPTED'),
(4, 9255, 'Omurunga, Alex Amos ', 'Kenya', 'MALE', NULL, NULL, 'CPA(FT)-05', 'ACCEPTED'),
(5, 6851, 'Jamwa, Cecil Oloo', 'Kenya', 'MALE', NULL, 0, 'CPA(FT)-05', 'ACCEPTED'),
(6, 6852, 'Muhuri, Simeon Ngama', 'Kenya', 'MALE', NULL, NULL, 'CPA(FT)-05', 'ACCEPTED'),
(7, 6853, 'Banya, Edison Natuku', 'Brunei', 'MALE', NULL, NULL, 'ACCA(FT)-05', 'ACCEPTED'),
(8, 6854, 'Kamau, Evans Njagi', 'Kenya', 'MALE', NULL, 0, 'CPA(FT)-05', 'ACCEPTED'),
(9, 6855, 'Kibanya, Joseph Mune', 'Kenya', 'MALE', NULL, 0, 'ACCA(FT)-05', 'ACCEPTED'),
(10, 6856, 'Musyoka, Benedict Mu', 'Kenya', 'MALE', NULL, NULL, 'CPA(FT)-05', 'ACCEPTED'),
(11, 6857, 'Kimani, Caroline Wan', 'Kenya', 'FEMALE', NULL, 0, 'ACCA(FT)-05', 'ACCEPTED'),
(12, 6858, 'Obiero, Eugene Donal', 'Kenya', 'MALE', NULL, NULL, 'ACCA(FT)-05', 'ACCEPTED'),
(13, 9281, 'Kamau, Rosemary Wamb', 'Kenya', 'FEMALE', NULL, 0, 'CPA(FT)-05', 'ACCEPTED'),
(14, 7470, 'Airo, Joseph Odhiamb', 'Kenya', 'MALE', NULL, 0, 'CPA(FT)-05', 'ACCEPTED'),
(15, 7472, 'Ayieko, Collins Kisu', 'Kenya', 'MALE', 'ayiekocollins@yahoo.com', 0, 'CPA(FT)-05', 'ACCEPTED'),
(16, 7472, 'Ayieko, Collins Kisu', 'Kenya', 'MALE', 'ayiekocollins@yahoo.com', 0, 'CISA-05', 'ACCEPTED'),
(17, 7473, 'Kigen, Fidel Kiprono', 'Kenya', 'MALE', NULL, 0, 'CPA(FT)-05', 'ACCEPTED'),
(18, 7474, 'Ndirangu, Mercy Nyag', 'Kenya', 'FEMALE', 'mercyndirangu69gmail.com', 0, 'CPA(FT)-05', 'ACCEPTED'),
(19, 7474, 'Ndirangu, Mercy Nyag', 'Kenya', 'FEMALE', 'mercyndirangu69gmail.com', 0, 'BCOM EXEMPT', 'ACCEPTED'),
(20, 7475, 'Kithinji, Bobbinson ', 'Kenya', 'MALE', NULL, NULL, 'CPA(FT)-05', 'ACCEPTED'),
(21, 7476, 'Kipkener, Kiprono Ja', 'Kenya', 'MALE', NULL, NULL, 'CPA(FT)-05', 'ACCEPTED'),
(22, 7477, 'Barchok, Vincent Ngo', 'Kenya', 'MALE', NULL, 0, 'CPA(FT)-05', 'ACCEPTED'),
(23, 7478, 'Ouma, Elisha Ondijo', 'Kenya', 'MALE', NULL, NULL, 'CPA(FT)-05', 'ACCEPTED'),
(24, 7480, 'Alaro, Philip Apiyo', 'Kenya', 'MALE', NULL, 0, 'CPA(FT)-05', 'ACCEPTED'),
(25, 7481, 'Kinyanjui, Isaac Nje', 'Kenya', 'MALE', NULL, 0, 'CPA(FT)-05', 'ACCEPTED'),
(26, 7483, 'Mnambuzi, Baron Just', 'Kenya', 'MALE', 'jbaron1985@gmail.com', 0, 'CPA(FT)-05', 'ACCEPTED'),
(27, 7483, 'Mnambuzi, Baron Just', 'Kenya', 'MALE', 'jbaron1985@gmail.com', 0, 'BCOM EXEMPT-12', 'ACCEPTED'),
(28, 9185, 'Karanja, Charles Kam', 'Kenya', 'MALE', NULL, 0, 'CISA-05', 'ACCEPTED'),
(29, 8592, 'Rajbhai, Yakuta Zein', 'Kenya', 'FEMALE', NULL, 0, 'BCOM(FT)-01', 'ACCEPTED'),
(30, 8593, 'Riunga, Silvya Kanan', 'Kenya', 'FEMALE', NULL, 0, 'BCOM(FT)-01', 'ACCEPTED'),
(31, 8594, 'Roba, Gollo Adan', 'Kenya', 'MALE', NULL, 0, 'BCOM(FT)-01', 'ACCEPTED'),
(32, 8595, 'Rodgers, Francis Kaz', 'Kenya', 'MALE', 'frankazr@yahoo.com', 0, 'BCOM(FT)-01', 'ACCEPTED'),
(33, 8595, 'Rodgers, Francis Kaz', 'Kenya', 'MALE', 'frankazr@yahoo.com', 0, 'CPA(EC)-09', 'ACCEPTED'),
(34, 8596, 'Shedho, Mohamed Liba', 'Kenya', 'FEMALE', 'sheysmily@yahoo.com', 0, 'BCOM(FT)-01', 'ACCEPTED'),
(35, 8596, 'Shedho, Mohamed Liba', 'Kenya', 'FEMALE', 'sheysmily@yahoo.com', 0, 'CPA(EC)-09', 'ACCEPTED');

-- --------------------------------------------------------

--
-- Table structure for table `IMPORT_COURSES`
--

CREATE TABLE IF NOT EXISTS `IMPORT_COURSES` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `clave` int(10) NOT NULL,
  `student_id` int(10) NOT NULL,
  `nombre_completo` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `IMPORT_COURSES`
--

INSERT INTO `IMPORT_COURSES` (`id`, `clave`, `student_id`, `nombre_completo`) VALUES
(1, 8525, 7474, 'Certified Public Accountant(FT'),
(2, 9299, 6854, 'Certified Public Accountant(FT'),
(3, 10298, 9185, 'Certified Information Systems '),
(4, 7419, 8594, 'Bachelor of Commerce (FT)'),
(5, 9302, 6857, 'Association of Chartered Certi'),
(6, 48235, 7472, 'Certified Public Accountant(EC'),
(7, 9297, 6852, 'Certified Public Accountant(FT'),
(8, 7417, 8592, 'Bachelor of Commerce (FT)'),
(9, 9300, 6855, 'Association of Chartered Certi'),
(10, 9296, 6851, 'Certified Public Accountant(FT'),
(11, 26673, 9185, 'Certified Public Accountant(FT'),
(12, 8523, 7472, 'Certified Public Accountant(FT'),
(13, 9301, 6856, 'Certified Public Accountant(FT'),
(14, 10368, 9255, 'Certified Public Accountant(FT'),
(15, 8521, 7470, 'Certified Public Accountant(EC'),
(16, 8528, 7477, 'Certified Public Accountant(FT'),
(17, 10394, 9281, 'Certified Public Accountant(FT'),
(18, 7420, 8595, 'Bachelor of Commerce (FT)'),
(19, 67162, 7472, 'Certified Information Systems '),
(20, 85129, 8595, 'Certified Public Accountant(EC'),
(21, 72618, 8596, 'Certified Public Accountant(EC'),
(22, 8524, 7473, 'Certified Public Accountant(EC'),
(23, 48490, 7470, 'Certified Public Accountant(DL'),
(24, 7418, 8593, 'Bachelor of Commerce (FT)'),
(25, 7421, 8596, 'Bachelor of Commerce (FT)'),
(26, 46423, 5328, 'Bachelor of Commerce (FT)'),
(27, 9298, 6853, 'Association of Chartered Certi');

-- --------------------------------------------------------

--
-- Table structure for table `IMPORT_INVOICES`
--

CREATE TABLE IF NOT EXISTS `IMPORT_INVOICES` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `course_id` int(10) NOT NULL,
  `person_id` int(10) NOT NULL,
  `student_id` int(10) NOT NULL,
  `invoice_number` int(10) NOT NULL,
  `course` varchar(30) NOT NULL,
  `invoice_type` varchar(30) NOT NULL,
  `amount` int(10) NOT NULL,
  `invoice_dt` date DEFAULT NULL,
  `user_log` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=46 ;

--
-- Dumping data for table `IMPORT_INVOICES`
--

INSERT INTO `IMPORT_INVOICES` (`id`, `course_id`, `person_id`, `student_id`, `invoice_number`, `course`, `invoice_type`, `amount`, `invoice_dt`, `user_log`) VALUES
(1, 7417, 11056, 8592, 682, 'Bachelor of Commerce (FT)', 'Transportation charge', 4500, NULL, 'JMWANDAU'),
(2, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'SMUCHERI'),
(3, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'Tuition fees', 380050, NULL, 'NMUMBO'),
(4, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'NMUMBO'),
(5, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'Tuition fees', 94860, NULL, 'ADMIN'),
(6, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'General administration fee', 600, NULL, 'NMUMBO'),
(7, 7417, 11056, 8592, 47060, 'Bachelor of Commerce (FT)', 'Tuition fees', 91800, NULL, 'NMUMBO'),
(8, 7418, 11057, 8593, 4453, 'Bachelor of Commerce (FT)', 'College ID Renewal', 200, NULL, 'CNJUMWA'),
(9, 7418, 11057, 8593, 32735, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'NMUMBO'),
(10, 7418, 11057, 8593, 47062, 'Bachelor of Commerce (FT)', 'General administration fee', 600, NULL, 'NMUMBO'),
(11, 7420, 11059, 8595, 0, 'Bachelor of Commerce (FT)', 'Tuition fees', 101420, NULL, 'ADMIN'),
(12, 7420, 11059, 8595, 0, 'Bachelor of Commerce (FT)', 'Prepayment', -5, NULL, 'ADMIN'),
(13, 7417, 11056, 8592, 47060, 'Bachelor of Commerce (FT)', 'General administration fee', 600, NULL, 'NMUMBO'),
(14, 7418, 11057, 8593, 0, 'Bachelor of Commerce (FT)', 'Tuition fees', 101420, NULL, 'ADMIN'),
(15, 7418, 11057, 8593, 24371, 'Bachelor of Commerce (FT)', 'Tuition fees', 18360, NULL, 'NMUMBO'),
(16, 7418, 11057, 8593, 47062, 'Bachelor of Commerce (FT)', 'Tuition fees', 107100, NULL, 'NMUMBO'),
(17, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'NMUMBO'),
(18, 7417, 11056, 8592, 47060, 'Bachelor of Commerce (FT)', 'Graduation fees', 3000, NULL, 'IMAKATIANI'),
(19, 7418, 11057, 8593, 10711, 'Bachelor of Commerce (FT)', 'Tuition fees', 100210, NULL, 'AKAHINDI'),
(20, 7418, 11057, 8593, 24371, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'NMUMBO'),
(21, 7418, 11057, 8593, 24371, 'Bachelor of Commerce (FT)', 'Tuition fees', -550, NULL, 'EWAMBUI'),
(22, 7418, 11057, 8593, 24371, 'Bachelor of Commerce (FT)', 'General administration fee', 600, NULL, 'EWAMBUI'),
(23, 7418, 11057, 8593, 32735, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'EWAMBUI'),
(24, 7418, 11057, 8593, 61671, 'Bachelor of Commerce (FT)', 'Graduation fees', 3000, NULL, 'BAMBANI'),
(25, 7417, 11056, 8592, 6532, 'Bachelor of Commerce (FT)', 'Tuition fees', 101310, NULL, 'IMAKATIANI'),
(26, 7417, 11056, 49768, 47060, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'EWAMBUI'),
(27, 7418, 11057, 49768, 47062, 'Bachelor of Commerce (FT)', 'General administration fee', 600, NULL, 'NMUMBO'),
(28, 7420, 11059, 8595, 705, 'Bachelor of Commerce (FT)', 'Bank charges', 200, NULL, 'CNJUMWA'),
(29, 7417, 11056, 8592, 0, 'Bachelor of Commerce (FT)', 'Tuition fees', 101420, NULL, 'ADMIN'),
(30, 7417, 11056, 8592, 10709, 'Bachelor of Commerce (FT)', 'Tuition fees', 100210, NULL, 'AKAHINDI'),
(31, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'NMUMBO'),
(32, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'General administration fee', 600, NULL, 'ADMIN'),
(33, 7417, 11056, 8592, 47060, 'Bachelor of Commerce (FT)', 'General administration fee', 600, NULL, 'NMUMBO'),
(34, 7418, 11057, 8593, 32735, 'Bachelor of Commerce (FT)', 'General administration fee', 600, NULL, 'NMUMBO'),
(35, 7418, 11057, 8593, 47062, 'Bachelor of Commerce (FT)', 'Tuition fees', 76500, NULL, 'NMUMBO'),
(36, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'Printing services FOC', 10, NULL, 'IMAKATIANI'),
(37, 7418, 11057, 8593, 7769, 'Bachelor of Commerce (FT)', 'Tuition fees', 101310, NULL, 'CNJUMWA'),
(38, 7419, 11058, 8594, 0, 'Bachelor of Commerce (FT)', 'Tuition fees', 101420, NULL, 'ADMIN'),
(39, 7419, 11058, 8594, 0, 'Bachelor of Commerce (FT)', 'Fees balance B/f', 105985, NULL, 'ADMIN'),
(40, 7417, 11056, 8592, 6532, 'Bachelor of Commerce (FT)', 'Transportation charge', 4500, NULL, 'IMAKATIANI'),
(41, 7417, 11056, 8592, 24736, 'Bachelor of Commerce (FT)', 'Tuition fees', 18360, NULL, 'NMUMBO'),
(42, 7417, 11056, 8592, 47060, 'Bachelor of Commerce (FT)', 'Tuition fees', 61200, NULL, 'NMUMBO'),
(43, 7418, 11057, 8593, 19428, 'Bachelor of Commerce (FT)', 'Tuition fees', 110710, NULL, 'CNJUMWA'),
(44, 7418, 11057, 8593, 24371, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'NMUMBO'),
(45, 7418, 11057, 8593, 32735, 'Bachelor of Commerce (FT)', 'Tuition fees', 15300, NULL, 'NMUMBO');

-- --------------------------------------------------------

--
-- Table structure for table `IMPORT_RECEIPTS`
--

CREATE TABLE IF NOT EXISTS `IMPORT_RECEIPTS` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `course_id` int(10) NOT NULL,
  `person_id` int(10) NOT NULL,
  `student_id` int(10) NOT NULL,
  `receipt_number` int(10) NOT NULL,
  `course` varchar(30) NOT NULL,
  `study_year` int(5) DEFAULT NULL,
  `receipt_type` varchar(30) NOT NULL,
  `amount` int(10) NOT NULL,
  `academic_year` varchar(15) DEFAULT NULL,
  `user_log` varchar(15) NOT NULL,
  `user_log_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=34 ;

--
-- Dumping data for table `IMPORT_RECEIPTS`
--

INSERT INTO `IMPORT_RECEIPTS` (`id`, `course_id`, `person_id`, `student_id`, `receipt_number`, `course`, `study_year`, `receipt_type`, `amount`, `academic_year`, `user_log`, `user_log_date`) VALUES
(1, 8524, 12163, 7473, 2563, 'Certified Public Accountant(EC', NULL, 'Cheque', 9000, NULL, 'JMWANDAU', NULL),
(2, 72618, 11060, 8596, 206, 'Certified Public Accountant(EC', NULL, 'Cash deposit', 51320, NULL, 'CNJUMWA', NULL),
(3, 85129, 11059, 8595, 209, 'Certified Public Accountant(EC', NULL, 'Cheque', 60000, NULL, 'CNJUMWA', NULL),
(4, 7420, 11059, 8595, 209, 'Bachelor of Commerce (FT)', NULL, 'Cheque', 60000, NULL, 'CNJUMWA', NULL),
(5, 7420, 11059, 8595, 7052, 'Bachelor of Commerce (FT)', NULL, 'Cash', 600, NULL, 'CNJUMWA', NULL),
(6, 46423, 13704, 5328, 12449, 'Bachelor of Commerce (FT)', NULL, 'Cheque', 22590, NULL, 'CNJUMWA', NULL),
(7, 8525, 12164, 7474, 3134, 'Certified Public Accountant(FT', NULL, 'Cash deposit', 20800, NULL, 'JMWANDAU', NULL),
(8, 7419, 11058, 8594, 2422, 'Bachelor of Commerce (FT)', NULL, 'Cheque', 207405, NULL, 'IMAKATIANI', NULL),
(9, 8528, 12167, 7477, 7674, 'Certified Public Accountant(FT', NULL, 'Cash deposit', 4000, NULL, 'IMAKATIANI', NULL),
(10, 8528, 12167, 7477, 6108, 'Certified Public Accountant(FT', NULL, 'Cash', 200, NULL, 'CNJUMWA', NULL),
(11, 7420, 11059, 8595, 4284, 'Bachelor of Commerce (FT)', NULL, 'Cheque', 25155, NULL, 'CNJUMWA', NULL),
(12, 7421, 11060, 8596, 206, 'Bachelor of Commerce (FT)', NULL, 'Cash deposit', 51320, NULL, 'CNJUMWA', NULL),
(13, 85129, 11059, 8595, 7052, 'Certified Public Accountant(EC', NULL, 'Cash', 600, NULL, 'CNJUMWA', NULL),
(14, 7420, 11059, 8595, 6163, 'Bachelor of Commerce (FT)', NULL, 'Cheque', 16065, NULL, 'IMAKATIANI', NULL),
(15, 85129, 11059, 8595, 4284, 'Certified Public Accountant(EC', NULL, 'Cheque', 25155, NULL, 'CNJUMWA', NULL),
(16, 8524, 12163, 7473, 5429, 'Certified Public Accountant(EC', NULL, 'Cheque', 8250, NULL, 'IMAKATIANI', NULL),
(17, 48490, 12160, 7470, 3718, 'Certified Public Accountant(DL', NULL, 'Cash deposit', 16350, NULL, 'IMAKATIANI', NULL),
(18, 7417, 11056, 8592, 385, 'Bachelor of Commerce (FT)', NULL, 'Cash deposit', 105920, NULL, 'JMWANDAU', NULL),
(19, 72618, 11060, 8596, 6814, 'Certified Public Accountant(EC', NULL, 'Cheque', 13000, NULL, 'IMAKATIANI', NULL),
(20, 7421, 11060, 8596, 6814, 'Bachelor of Commerce (FT)', NULL, 'Cheque', 13000, NULL, 'IMAKATIANI', NULL),
(21, 85129, 11059, 8595, 6163, 'Certified Public Accountant(EC', NULL, 'Cheque', 16065, NULL, 'IMAKATIANI', NULL),
(22, 7418, 11057, 8593, 10587, 'Bachelor of Commerce (FT)', NULL, 'Cash deposit', 101310, NULL, 'CNJUMWA', NULL),
(23, 7418, 11057, 8593, 6262, 'Bachelor of Commerce (FT)', NULL, 'Cash', 200, NULL, 'CNJUMWA', NULL),
(24, 7417, 11056, 8592, 187, 'Bachelor of Commerce (FT)', NULL, 'Cash deposit', 678790, NULL, 'JMWANDAU', NULL),
(25, 7418, 11057, 8593, 245, 'Bachelor of Commerce (FT)', NULL, 'Cash deposit', 101420, NULL, 'JMWANDAU', NULL),
(26, 8525, 12164, 7474, 6934, 'Certified Public Accountant(FT', NULL, 'Cash deposit', 4000, NULL, 'IMAKATIANI', NULL),
(27, 46423, 13704, 5328, 4857, 'Bachelor of Commerce (FT)', NULL, 'Cheque', 45185, NULL, 'IMAKATIANI', NULL),
(28, 46423, 13704, 5328, 9231, 'Bachelor of Commerce (FT)', NULL, 'Cheque', 22590, NULL, 'BAMBANI', NULL),
(29, 8528, 12167, 7477, 6511, 'Certified Public Accountant(FT', NULL, 'Cash deposit', 4000, NULL, 'IMAKATIANI', NULL),
(30, 85129, 11059, 8595, 4284, 'Certified Public Accountant(EC', NULL, 'Cheque', 200, NULL, 'CNJUMWA', NULL),
(31, 7420, 11059, 8595, 4284, 'Bachelor of Commerce (FT)', NULL, 'Cheque', 200, NULL, 'CNJUMWA', NULL),
(32, 8521, 12160, 7470, 3718, 'Certified Public Accountant(EC', NULL, 'Cash deposit', 16350, NULL, 'IMAKATIANI', NULL),
(33, 8525, 12164, 7474, 5553, 'Certified Public Accountant(FT', NULL, 'Cash deposit', 4000, NULL, 'IMAKATIANI', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `loan_applications`
--

CREATE TABLE IF NOT EXISTS `loan_applications` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `student_id` int(10) NOT NULL,
  `picture` text NOT NULL,
  `amount` int(100) NOT NULL,
  `kra_pin` text NOT NULL,
  `national_id` text NOT NULL,
  `mother_pin_no` text NOT NULL,
  `father_pin_no` text NOT NULL,
  `idcard_front_image` text NOT NULL,
  `idcard_back_image` text NOT NULL,
  `signature_image` text NOT NULL,
  `status` enum('underreview','approved','denied') NOT NULL DEFAULT 'underreview',
  `reason` text NOT NULL,
  `terms_of_use` text NOT NULL,
  `date_applied` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `loan_applications`
--

INSERT INTO `loan_applications` (`_id`, `category_id`, `student_id`, `picture`, `amount`, `kra_pin`, `national_id`, `mother_pin_no`, `father_pin_no`, `idcard_front_image`, `idcard_back_image`, `signature_image`, `status`, `reason`, `terms_of_use`, `date_applied`) VALUES
(1, 1, 8592, 'logo.jpg', 0, 'QWEWJDF9FN', '25139625', 'QWESDDERTTG', 'ASWEREDFD', 'id_front2.jpg', 'id_back2.jpg', 'google-app-inventor-icon-300x297.jpg', 'approved', '', '', '2014-07-30 08:17:01'),
(2, 2, 49768, '', 0, 'AADRET55TFGG', '45546577', '', '', '', '', '', 'approved', 'The form is not complete. ', '', '2014-08-10 17:46:46'),
(4, 1, 23675, 'icon.xpm', 0, 'AADRET55TFGG', '234456567', '12341', '1234', 'icon.xpm', 'icon.xpm', 'icon.xpm', 'denied', '', '', '2014-07-21 14:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `loan_categories`
--

CREATE TABLE IF NOT EXISTS `loan_categories` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `interest_percentage` decimal(30,2) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `loan_categories`
--

INSERT INTO `loan_categories` (`_id`, `category_name`, `description`, `interest_percentage`) VALUES
(1, 'kiva-fulltime', '', 0.00),
(2, 'kiva-partial', '', 0.00),
(3, 'kiva-laptop', '', 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `loan_schedules`
--

CREATE TABLE IF NOT EXISTS `loan_schedules` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `loan_id` int(11) NOT NULL,
  `amount_per_month` text NOT NULL,
  `amount_paid` text NOT NULL,
  `date_paid` varchar(100) NOT NULL,
  `desired_payment_date` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `repayment_schedule`
--

CREATE TABLE IF NOT EXISTS `repayment_schedule` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `student_id` int(10) NOT NULL,
  `repayment_month_id` int(4) NOT NULL,
  `repayment_month` enum('JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER') COLLATE utf8_unicode_ci NOT NULL,
  `repayment_year` enum('2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025') COLLATE utf8_unicode_ci NOT NULL,
  `opening_bal` float NOT NULL,
  `closing_bal` float NOT NULL,
  `monthly_payment` float NOT NULL,
  `monthly_interest` float NOT NULL,
  `principle_amt` float NOT NULL,
  `penalty` float DEFAULT NULL,
  `amortized_amt` float DEFAULT NULL,
  `due_date` datetime NOT NULL,
  `date_received` datetime NOT NULL,
  `received_by` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`,`student_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `repayment_schedule`
--

INSERT INTO `repayment_schedule` (`id`, `student_id`, `repayment_month_id`, `repayment_month`, `repayment_year`, `opening_bal`, `closing_bal`, `monthly_payment`, `monthly_interest`, `principle_amt`, `penalty`, `amortized_amt`, `due_date`, `date_received`, `received_by`) VALUES
(2, 8592, 1, 'AUGUST', '2014', 1000000, 959126, 42540.3, 1666.67, 40873.6, NULL, NULL, '2014-08-25 00:00:00', '0000-00-00 00:00:00', ''),
(3, 8592, 2, 'SEPTEMBER', '2014', 959126, 918185, 42540.3, 1598.54, 40941.7, NULL, NULL, '2014-09-25 00:00:00', '0000-00-00 00:00:00', ''),
(4, 8592, 3, 'OCTOBER', '2014', 918185, 877175, 42540.3, 1530.31, 41009.9, NULL, NULL, '2014-10-25 00:00:00', '0000-00-00 00:00:00', ''),
(5, 8592, 4, 'NOVEMBER', '2014', 877175, 836096, 42540.3, 1461.96, 41078.3, NULL, NULL, '2014-11-25 00:00:00', '0000-00-00 00:00:00', ''),
(6, 8592, 5, 'DECEMBER', '2014', 836096, 794950, 42540.3, 1393.49, 41146.8, NULL, NULL, '2014-12-25 00:00:00', '0000-00-00 00:00:00', ''),
(7, 8592, 6, 'JANUARY', '2015', 794950, 753734, 42540.3, 1324.92, 41215.3, NULL, NULL, '2014-01-25 00:00:00', '0000-00-00 00:00:00', ''),
(8, 8592, 7, '', '2015', 753734, 712450, 42540.3, 1256.22, 41284, NULL, NULL, '2014-02-25 00:00:00', '0000-00-00 00:00:00', ''),
(9, 8592, 8, 'MARCH', '2015', 712450, 671097, 42540.3, 1187.42, 41352.8, NULL, NULL, '2014-03-25 00:00:00', '0000-00-00 00:00:00', ''),
(10, 8592, 9, 'APRIL', '2015', 671097, 629676, 42540.3, 1118.5, 41421.8, NULL, NULL, '2014-04-25 00:00:00', '0000-00-00 00:00:00', ''),
(11, 8592, 10, 'MAY', '2015', 629676, 588185, 42540.3, 1049.46, 41490.8, NULL, NULL, '2014-05-25 00:00:00', '0000-00-00 00:00:00', ''),
(12, 8592, 11, 'JUNE', '2015', 588185, 546625, 42540.3, 980.31, 41559.9, NULL, NULL, '2014-06-25 00:00:00', '0000-00-00 00:00:00', ''),
(13, 8592, 12, 'JULY', '2015', 546625, 504996, 42540.3, 911.04, 41629.2, NULL, NULL, '2014-07-25 00:00:00', '0000-00-00 00:00:00', ''),
(14, 8592, 13, 'AUGUST', '2015', 504996, 463297, 42540.3, 841.66, 41698.6, NULL, NULL, '2014-08-25 00:00:00', '0000-00-00 00:00:00', ''),
(15, 8592, 14, 'SEPTEMBER', '2015', 463297, 421529, 42540.3, 772.16, 41768.1, NULL, NULL, '2014-09-25 00:00:00', '0000-00-00 00:00:00', ''),
(16, 8592, 15, 'OCTOBER', '2015', 421529, 379691, 42540.3, 702.55, 41837.7, NULL, NULL, '2014-10-25 00:00:00', '0000-00-00 00:00:00', ''),
(17, 8592, 16, 'NOVEMBER', '2015', 379691, 337784, 42540.3, 632.82, 41907.4, NULL, NULL, '2014-11-25 00:00:00', '0000-00-00 00:00:00', ''),
(18, 8592, 17, 'DECEMBER', '2015', 337784, 295807, 42540.3, 562.97, 41977.3, NULL, NULL, '2014-12-25 00:00:00', '0000-00-00 00:00:00', ''),
(19, 8592, 18, 'JANUARY', '2016', 295807, 253759, 42540.3, 493.01, 42047.2, NULL, NULL, '2014-01-25 00:00:00', '0000-00-00 00:00:00', ''),
(20, 8592, 19, '', '2016', 253759, 211642, 42540.3, 422.93, 42117.3, NULL, NULL, '2014-02-25 00:00:00', '0000-00-00 00:00:00', ''),
(21, 8592, 20, 'MARCH', '2016', 211642, 169454, 42540.3, 352.74, 42187.5, NULL, NULL, '2014-03-25 00:00:00', '0000-00-00 00:00:00', ''),
(22, 8592, 21, 'APRIL', '2016', 169454, 127197, 42540.3, 282.42, 42257.8, NULL, NULL, '2014-04-25 00:00:00', '0000-00-00 00:00:00', ''),
(23, 8592, 22, 'MAY', '2016', 127197, 84868.4, 42540.3, 211.99, 42328.3, NULL, NULL, '2014-05-25 00:00:00', '0000-00-00 00:00:00', ''),
(24, 8592, 23, 'JUNE', '2016', 84868.4, 42469.6, 42540.3, 141.45, 42398.8, NULL, NULL, '2014-06-25 00:00:00', '0000-00-00 00:00:00', ''),
(25, 8592, 24, 'JULY', '2016', 42469.6, 0.08, 42540.3, 70.78, 42469.5, NULL, NULL, '2014-07-25 00:00:00', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- Table structure for table `student_loan_rates`
--

CREATE TABLE IF NOT EXISTS `student_loan_rates` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `student_id` int(10) NOT NULL,
  `amt_borrowed` float NOT NULL,
  `monthly_payment` int(10) NOT NULL,
  `loan_amt` float NOT NULL,
  `interest_paid` float NOT NULL,
  `interest_rate` float NOT NULL,
  `loan_period_months` int(5) NOT NULL,
  `completed_ind` tinyint(1) NOT NULL DEFAULT '0',
  `expected_completion_date` datetime NOT NULL,
  `actual_completion_date` datetime NOT NULL,
  `expected_start_date` date NOT NULL,
  `actual_start_date` datetime NOT NULL,
  `amt_written_off` float DEFAULT '0',
  `user_id` int(15) NOT NULL,
  `user_log_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `student_loan_rates`
--

INSERT INTO `student_loan_rates` (`id`, `student_id`, `amt_borrowed`, `monthly_payment`, `loan_amt`, `interest_paid`, `interest_rate`, `loan_period_months`, `completed_ind`, `expected_completion_date`, `actual_completion_date`, `expected_start_date`, `actual_start_date`, `amt_written_off`, `user_id`, `user_log_date`) VALUES
(5, 8592, 1000000, 42540, 1020970, 20966.2, 2, 2, -1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2014-08-25', '0000-00-00 00:00:00', 0, 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `full_names` varchar(60) NOT NULL,
  `email_address` text NOT NULL,
  `password` text NOT NULL,
  `image` text NOT NULL,
  `phone_no` varchar(60) NOT NULL,
  `student_id` text NOT NULL,
  `user_level` enum('admin','fao','student') NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`_id`, `full_names`, `email_address`, `password`, `image`, `phone_no`, `student_id`, `user_level`) VALUES
(1, 'Lillian Munene', 'lilmunene@gmail.com', 'f5db465baa8c75fa4e4cf2171b85af27', '', '0728306203', '', 'admin'),
(24, 'John Kulova', 'jhnkulova@gmail.com', '2a92b401f527c2929203e2d6c6af9dff', 'logo.jpg', '0712306203', '048655', 'student'),
(29, 'Andrew Mageto', 'andmageto@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '', '0728306203', '', 'fao'),
(30, 'Kelvin Yonga', 'kevin@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'kelvin.jpg', '0712306203', '049768', 'student'),
(32, 'Imelda Mueni', 'imelda22@gmail.com', '7cdfe62a57af2536432e9ec553445884', 'icon.xpm', '0712306203', '023675', 'fao');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
