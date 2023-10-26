/*
Modèle de script de post-déploiement							
--------------------------------------------------------------------------------------
 Ce fichier contient des instructions SQL qui seront ajoutées au script de compilation.		
 Utilisez la syntaxe SQLCMD pour inclure un fichier dans le script de post-déploiement.			
 Exemple :      :r .\monfichier.sql								
 Utilisez la syntaxe SQLCMD pour référencer une variable dans le script de post-déploiement.		
 Exemple :      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

INSERT INTO [dbo].[Adress] ([Id], [Street], [Number], [Box], [PostalCode], [Locality])
VALUES
  (1, 'Rue de la Paix', 123, NULL, 1000, 'Bruxelles'),
  (2, 'Avenue des Roses', 456, 051, 2000, 'Paris'),
  (3, 'Main Street', 789, NULL, 90001, 'New York'),
  (4, 'High Street', 101, NULL, 45678, 'London'),
  (5, 'Calle Principal', 987, NULL, 28001, 'Madrid'),
  (6, 'Elm Street', 55, NULL, 90210, 'Los Angeles'),
  (7, 'Bahnhofstrasse', 33, NULL, 8001, 'Zurich'),
  (8, 'Gran Vía', 121, 02, 28013, 'Madrid'),
  (9, 'Via Roma', 14, NULL, 00185, 'Rome'),
  (10, 'Passeig de Gràcia', 98, 03, 08008, 'Barcelona');

INSERT INTO [dbo].[Person] ([Id], [Firstname], [Lastname], [id_Adress], [Email], [Phone], [Cellphone])
VALUES
  (1, 'John', 'Doe', 1, 'john.doe@example.com', '555-1234', NULL),
  (2, 'Jane', 'Smith', 2, 'jane.smith@example.com', NULL, '555-5678'),
  (3, 'Robert', 'Johnson', 3, 'robert.johnson@example.com', '555-9876', NULL),
  (4, 'Emily', 'Wilson', 4, 'emily.wilson@example.com', NULL, '555-8765'),
  (5, 'Michael', 'Davis', 5, 'michael.davis@example.com', '555-2345', NULL),
  (6, 'Sarah', 'Brown', 6, 'sarah.brown@example.com', NULL, '555-6543'),
  (7, 'David', 'Garcia', 7, 'david.garcia@example.com', '555-3456', NULL),
  (8, 'Lisa', 'Martinez', 8, 'lisa.martinez@example.com', NULL, '555-7654'),
  (9, 'William', 'Jones', 9, 'william.jones@example.com', '555-8765', NULL),
  (10, 'Linda', 'Johnson', 10, 'linda.johnson@example.com', NULL, '555-5432');
