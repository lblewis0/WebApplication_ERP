CREATE TABLE [dbo].[Person]
(
	[Id]        INT            NOT NULL,
    [Firstname] NVARCHAR (150) NOT NULL,
    [Lastname]  NVARCHAR (150) NOT NULL,
    [id_Adress] INT            NOT NULL,
    [Email]     NVARCHAR (150) NOT NULL,
    [Phone]     NVARCHAR (150) NULL,
    [Cellphone] NVARCHAR (150) NULL,
    CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Person_Adress] FOREIGN KEY ([id_Adress]) REFERENCES [dbo].[Adress] ([Id]),
    CONSTRAINT [CK_Phone] CHECK ([Phone] IS NOT NULL
                                     OR [Cellphone] IS NOT NULL)
)
