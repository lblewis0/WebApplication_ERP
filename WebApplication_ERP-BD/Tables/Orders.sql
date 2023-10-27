CREATE TABLE [dbo].[Orders]
(
	[Id]             INT            NOT NULL,
    [Date]           DATE           NOT NULL,
    [Id_Sender]      INT            NOT NULL,
    [Sender_type]    NVARCHAR (150) NOT NULL,
    [Id_Recipient]   INT            NOT NULL,
    [Recipient_Type] NVARCHAR (150) NOT NULL,
    CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Orders_Sender_Organisation] FOREIGN KEY ([Id_Sender]) REFERENCES [dbo].[Organisations] ([Id]),
    CONSTRAINT [FK_Orders_Sender_Person] FOREIGN KEY ([Id_Sender]) REFERENCES [dbo].[Person] ([Id]),
    CONSTRAINT [FK_Orders_Recipient_Organisation] FOREIGN KEY ([Id_Recipient]) REFERENCES [dbo].[Organisations] ([Id]),
    CONSTRAINT [FK_Orders_Recipient_Person] FOREIGN KEY ([Id_Recipient]) REFERENCES [dbo].[Person] ([Id]),
    CONSTRAINT [CK_Orders_Recipient_Type] CHECK ([Recipient_Type]='Organisation' OR [Recipient_Type]='Person'),
    CONSTRAINT [CK_Orders_Sender_Type] CHECK ([Sender_Type]='Organisation' OR [Sender_Type]='Person')
)
