USE [master]
GO
/****** Object:  Database [movieReview]    Script Date: 2/2/2020 11:19:12 PM ******/
CREATE DATABASE [movieReview]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'mobileReview', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\mobileReview.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'mobileReview_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\mobileReview_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [movieReview] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [movieReview].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [movieReview] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [movieReview] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [movieReview] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [movieReview] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [movieReview] SET ARITHABORT OFF 
GO
ALTER DATABASE [movieReview] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [movieReview] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [movieReview] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [movieReview] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [movieReview] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [movieReview] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [movieReview] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [movieReview] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [movieReview] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [movieReview] SET  DISABLE_BROKER 
GO
ALTER DATABASE [movieReview] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [movieReview] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [movieReview] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [movieReview] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [movieReview] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [movieReview] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [movieReview] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [movieReview] SET RECOVERY FULL 
GO
ALTER DATABASE [movieReview] SET  MULTI_USER 
GO
ALTER DATABASE [movieReview] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [movieReview] SET DB_CHAINING OFF 
GO
ALTER DATABASE [movieReview] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [movieReview] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [movieReview] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'movieReview', N'ON'
GO
ALTER DATABASE [movieReview] SET QUERY_STORE = OFF
GO
USE [movieReview]
GO
/****** Object:  Table [dbo].[movie]    Script Date: 2/2/2020 11:19:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[movie](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [nvarchar](255) NULL,
	[description] [nvarchar](max) NULL,
	[startDate] [datetime] NULL,
	[image] [nvarchar](max) NULL,
	[categories] [nvarchar](max) NULL,
	[actors] [nvarchar](max) NULL,
	[directors] [nvarchar](max) NULL,
 CONSTRAINT [PK_film] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[review]    Script Date: 2/2/2020 11:19:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[review](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[movieId] [int] NOT NULL,
	[content] [nvarchar](max) NULL,
	[reviewerName] [nvarchar](max) NULL,
 CONSTRAINT [PK_review] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 2/2/2020 11:19:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[username] [varchar](50) NOT NULL,
	[password] [varchar](max) NOT NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[review]  WITH CHECK ADD  CONSTRAINT [FK_review_movie] FOREIGN KEY([movieId])
REFERENCES [dbo].[movie] ([id])
GO
ALTER TABLE [dbo].[review] CHECK CONSTRAINT [FK_review_movie]
GO
USE [master]
GO
ALTER DATABASE [movieReview] SET  READ_WRITE 
GO
