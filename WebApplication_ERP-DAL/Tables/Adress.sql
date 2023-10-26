CREATE TABLE [dbo].[Adress]
(
	[Id]         INT            NOT NULL,
    [Street]     NVARCHAR (150) NOT NULL,
    [Number]     INT            NOT NULL,
    [Box]        NVARCHAR (150) NULL,
    [PostalCode] INT            NOT NULL,
    [Locality]   NVARCHAR (150) NOT NULL,
    CONSTRAINT [PK_Adress] PRIMARY KEY CLUSTERED ([Id] ASC)
)
