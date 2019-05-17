--
-- CREATE TABLE: Geo_tbl
--
CREATE TABLE Geo_tbl
(
	GeoID_PK serial NOT NULL,
	IsGeo_B bit,
	Latitude_F float,
	Longitude_F float,
	CONSTRAINT GeoID_PK PRIMARY KEY (GeoID_PK)
);

--
-- CREATE TABLE: User_tbl
--
CREATE TABLE User_tbl
(
	UserID_PK serial NOT NULL,
	RoleID_FK integer,
	GeoID_FK integer,
	Email_X varchar(50),
	Password_X varchar(50),
	IsPasswordReset_B bit,
	Avatar_X varchar(50),
	IsLocked_B bit,
	IsDeleted_B bit,
	UserRole_I integer,
	IsApprovedModerator_B bit,
	IsEmailValidated_B bit,
	CONSTRAINT UserID_PK PRIMARY KEY (UserID_PK)
);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_1
--
ALTER TABLE User_tbl ADD 
	FOREIGN KEY (RoleID_FK)
		REFERENCES Role_tbl (RoleID_PK);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_2
--
ALTER TABLE User_tbl ADD 
	FOREIGN KEY (GeoID_FK)
		REFERENCES Geo_tbl (GeoID_PK);

--
-- CREATE TABLE: Praise_tbl
--
CREATE TABLE Praise_tbl
(
	PraiseID_PK serial NOT NULL,
	GeoID_FK integer,
	ApprovedByUserID_FK integer,
	Praise_X text,
	IsApproved_B bit,
	ApprovedPraise_X text,
	SubmitDate_D date,
	ApprovedDate_D date,
	BroadcastDate_D date,
	CONSTRAINT PraiseID_PK PRIMARY KEY (PraiseID_PK)
);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_1
--
ALTER TABLE Praise_tbl ADD 
	FOREIGN KEY (GeoID_FK)
		REFERENCES Geo_tbl (GeoID_PK);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_2
--
ALTER TABLE Praise_tbl ADD 
	FOREIGN KEY (ApprovedByUserID_FK)
		REFERENCES User_tbl (UserID_PK);

--
-- CREATE TABLE: Prayer_tbl
--
CREATE TABLE Prayer_tbl
(
	PrayerID_PK serial NOT NULL,
	GeoID_FK integer,
	ApprovedByUserID_FK integer,
	Prayer_X text,
	IsApproved_B bit,
	ApprovedPrayer_X text,
	SubmitDate_D date,
	ApprovedDate_D date,
	Broadcast_D date,
	CONSTRAINT PrayerID_PK PRIMARY KEY (PrayerID_PK)
);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_1
--
ALTER TABLE Prayer_tbl ADD 
	FOREIGN KEY (GeoID_FK)
		REFERENCES Geo_tbl (GeoID_PK);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_2
--
ALTER TABLE Prayer_tbl ADD 
	FOREIGN KEY (ApprovedByUserID_FK)
		REFERENCES User_tbl (UserID_PK);

--
-- CREATE TABLE: PrayerCalling_tbl
--
CREATE TABLE PrayerCalling_tbl
(
	PrayerID_FK integer NOT NULL,
	UserID_FK integer NOT NULL,
	Prayed_I integer,
	PRIMARY KEY (PrayerID_FK, UserID_FK)
);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_1
--
ALTER TABLE PrayerCalling_tbl ADD 
	FOREIGN KEY (PrayerID_FK)
		REFERENCES Prayer_tbl (PrayerID_PK);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_2
--
ALTER TABLE PrayerCalling_tbl ADD 
	FOREIGN KEY (UserID_FK)
		REFERENCES User_tbl (UserID_PK);

--
-- CREATE TABLE: PrayerVerse_tbl
--
CREATE TABLE PrayerVerse_tbl
(
	PrayerVerseID_PK serial NOT NULL,
	SubmitUserID_FK integer,
	Verse_X text,
	VerseNote_X text,
	SubmitDate_D date,
	CONSTRAINT PrayerVerseID_PK PRIMARY KEY (PrayerVerseID_PK)
);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_1
--
ALTER TABLE PrayerVerse_tbl ADD 
	FOREIGN KEY (SubmitUserID_FK)
		REFERENCES User_tbl (UserID_PK);

--
-- CREATE TABLE: SavedPraise_tbl
--
CREATE TABLE SavedPraise_tbl
(
	UserID_FK integer NOT NULL,
	PraiseID_FK integer NOT NULL,
	PRIMARY KEY (UserID_FK, PraiseID_FK)
);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_1
--
ALTER TABLE SavedPraise_tbl ADD 
	FOREIGN KEY (UserID_FK)
		REFERENCES User_tbl (UserID_PK);


--
-- CREATE FOREIGN KEY CONSTRAINT: Relation_2
--
ALTER TABLE SavedPraise_tbl ADD 
	FOREIGN KEY (PraiseID_FK)
		REFERENCES Praise_tbl (PraiseID_PK);