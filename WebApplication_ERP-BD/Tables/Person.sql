CREATE TABLE [dbo].[Person]
(
	[Id]        INT            NOT NULL,
    [Firstname] NVARCHAR (150) NOT NULL,
    [Lastname]  NVARCHAR (150) NOT NULL,
    [id_Address] INT            NOT NULL,
    [Email]     NVARCHAR (150) NOT NULL,
    [Phone]     NVARCHAR (150) NULL,
    [Cellphone] NVARCHAR (150) NULL,
    CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Person_Address] FOREIGN KEY ([id_Address]) REFERENCES [dbo].[Address] ([Id]),
    CONSTRAINT [CK_Phone] CHECK ([Phone] IS NOT NULL
                                     OR [Cellphone] IS NOT NULL)
)
