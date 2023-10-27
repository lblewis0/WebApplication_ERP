CREATE TABLE [dbo].[Person_Status]
(
	[Id]   INT            NOT NULL,
    [Name] NVARCHAR (150) NOT NULL,
    CONSTRAINT [PK_Person_Status] PRIMARY KEY CLUSTERED ([Id] ASC)
)
