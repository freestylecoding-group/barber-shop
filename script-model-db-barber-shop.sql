-- MySQL Script generated by MySQL Workbench
-- Sat Jan 14 19:14:14 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema barber-shop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `Type-User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Type-User` ;

CREATE TABLE IF NOT EXISTS `Type-User` (
  `idType-User` VARCHAR(500) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idType-User`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `User` ;

CREATE TABLE IF NOT EXISTS `User` (
  `idUser` VARCHAR(500) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `phone` VARCHAR(500) NULL,
  `id-Type-User` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idUser`),
  INDEX `fk_User_Type-User_idx` (`id-Type-User` ASC) VISIBLE,
  CONSTRAINT `fk_User_Type-User`
    FOREIGN KEY (`id-Type-User`)
    REFERENCES `Type-User` (`idType-User`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Service`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Service` ;

CREATE TABLE IF NOT EXISTS `Service` (
  `idService` VARCHAR(500) NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `description` VARCHAR(500) NULL,
  `price` DOUBLE(7,2) NOT NULL,
  `aprox-duration` DOUBLE(4,2) NOT NULL,
  PRIMARY KEY (`idService`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Employee-Days-Disable`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Employee-Days-Disable` ;

CREATE TABLE IF NOT EXISTS `Employee-Days-Disable` (
  `idEmployee-Days-Disable` VARCHAR(500) NOT NULL,
  `day-disable-week` TINYINT NULL,
  `day-disable-month` VARCHAR(100) NULL,
  `mont-year` DATE NOT NULL,
  `hours-disabled` CHAR(15) NOT NULL,
  `idEmployee` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idEmployee-Days-Disable`),
  INDEX `fk_Employee-Days-Disable_User1_idx` (`idEmployee` ASC) VISIBLE,
  CONSTRAINT `fk_Employee-Days-Disable_User1`
    FOREIGN KEY (`idEmployee`)
    REFERENCES `User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Booking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Booking` ;

CREATE TABLE IF NOT EXISTS `Booking` (
  `idBooking` VARCHAR(500) NOT NULL,
  `schedule` VARCHAR(20) NOT NULL,
  `date` DATE NOT NULL,
  `idService` VARCHAR(500) NOT NULL,
  `idEmployee` VARCHAR(500) NOT NULL,
  `idCustomer` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idBooking`),
  INDEX `fk_Booking_Service1_idx` (`idService` ASC) VISIBLE,
  INDEX `fk_Booking_User1_idx` (`idEmployee` ASC) VISIBLE,
  INDEX `fk_Booking_User2_idx` (`idCustomer` ASC) VISIBLE,
  INDEX `date` (`date` ASC) VISIBLE,
  CONSTRAINT `fk_Booking_Service1`
    FOREIGN KEY (`idService`)
    REFERENCES `Service` (`idService`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Booking_User1`
    FOREIGN KEY (`idEmployee`)
    REFERENCES `User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Booking_User2`
    FOREIGN KEY (`idCustomer`)
    REFERENCES `User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
