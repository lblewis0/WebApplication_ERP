CREATE TABLE [dbo].[Products]
(
	[Id]           INT            NOT NULL,
    [Name]         NVARCHAR (150) NOT NULL,
    [UnitaryPrice] INT            NOT NULL,
    [Description]  NVARCHAR (400) NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED ([Id] ASC)
)
