CREATE TABLE [dbo].[Organisations]
(
	[Id]         INT            NOT NULL,
    [Name]       NVARCHAR (150) NOT NULL,
    [Id_Address]  INT            NOT NULL,
    [TVA_Number] NVARCHAR (150) NULL,
    CONSTRAINT [PK_Organisations] PRIMARY KEY CLUSTERED ([Id] ASC)
)
