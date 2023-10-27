CREATE TABLE [dbo].[Order_Product]
(
	[Id]               INT NOT NULL,
    [Id_Order]         INT NOT NULL,
    [Id_Product]       INT NOT NULL,
    [Product_Quantity] INT NOT NULL,
    CONSTRAINT [PK_Order_Product] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Order] FOREIGN KEY ([Id_Order]) REFERENCES [dbo].[Orders] ([Id]),
    CONSTRAINT [FK_Product] FOREIGN KEY ([Id_Product]) REFERENCES [dbo].[Products] ([Id])
)
