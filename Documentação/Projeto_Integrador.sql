drop database Projeto_Tampets

create database Projeto_Tampets

-- Criação das tabelas

-- USUARIO GERAL

-- Criação das tabelas
Create table Tbl_User (
id_user int identity (1,1), 
cpf_user varchar(15), 
email_user varchar(30), 
tel_user varchar(15), 
status_user char(10), 
func varchar(20), 
name_user varchar(100), 

constraint pk_User primary key (id_user)) 

-- Inserção de dados
Insert Tbl_User 
(cpf_user, email_user, tel_user, status_user, func, name_user)
values 
('478.587.659-85', 'admin@gmail.com', '(15)99741-5248', 'Ativo','Ponto de Coleta', 'Admin'),
('325.579.147-00', 'xandre2014@gmail.com', '(11)3228-7400', 'Ativo','Parceiro', 'Alexandre Lima'),
('472.159.357-41', 'bela@gmail.com', '(15)99612-1475', 'Ativo','Ponto de Coleta', 'Maribela Santos'),
('568.753.854-87', 'antonio.a@outlook.com', '(15)98874-1463', 'Ativo','Ponto de Coleta', 'Antonio Assunção'),
('413.957.874-33', 'breno.oliver@gmail.com', '(11)98874-5472', 'Ativo', 'Ponto de Coleta', 'Breno Oliveira')


-- EMPRESAS PONTO DE COLETA

-- Criação das tabelas
create table Tbl_CollectionPoint (
id_cp int identity (1,1),
name_point varchar(50), 
address_point varchar(150), 
hour_point varchar(40), 
link_photo varchar(200), 
status_point char(10), 
cnpj_point varchar(20),
cod_User_CollectionPoint int,


constraint pk_User_CollectionPoint primary key (id_cp),
constraint fk_User_CollectionPoint foreign key (cod_User_CollectionPoint) references Tbl_User (id_user))

-- Inserção de dados
Insert Tbl_CollectionPoint 
(name_point, address_point, hour_point, link_photo, status_point, cnpj_point, cod_User_CollectionPoint)
values 
('Cantinho do Doguinho', 'Rua dos cos, 24, Vila das flores, Sorocaba/SP, cep: 18755-574', '8hrs até 17hrs de Seg a Sáb', '"C:\Users\Daiia\Downloads\photos_script\hoi-an-photographer-OuSED0AOx5M-unsplash.jpg"', 'Ativo','14.247.159/0001-47',1),
('Pet Friends', 'Rua gavião, 147, Jardim Campos, Sorocaba/SP, cep:12345-85', '8hrs até 17hrs de Seg a Dom', '"C:\Users\Daiia\Downloads\photos_script\nicolas-flor-bkyu7bnwVDE-unsplash.jpg"', 'Ativo','23.147.236/0001-85',5),
('Miau & Au Store', 'Rua das amoras rosas, 50, Jardim Betania, Sorocaba/SP, cep:14652-874', '10hrs até 16hrs de Seg a Sex', '"C:\Users\Daiia\Downloads\photos_script\jack-prommel-DEiUr0DADXY-unsplash.jpg"', 'Ativo','44.421.493/0001-21',2),
('Late e Morde Store', 'Rua Leite Campos Torres, 540, Jardim Esmeralda, Sorocaba/SP, cep: 12365-452', '8hrs até 17hrs de Seg a Sab', '"C:\Users\Daiia\Downloads\photos_script\keith-fox-TFWS1Se94YM-unsplash.jpg"', 'Ativo','12.413.852/0001-11',4),
('Nina e Nina', 'Rua Franco Aguiar, 1590, Vila Barão, Sorocaba/SP, cep: 12365-478', '8hrs até 17hrs de Seg a Dom', '"C:\Users\Daiia\Downloads\photos_script\dicky-jiang-SdvVw-cqVAo-unsplash.jpg"', 'Ativo','32.963.852/0001-41',3)

-- EMPRESAS PARCEIRAS

-- Criação das tabelas
create table Tbl_Partner(
id_partner int identity (1,1), 
photo_link varchar(200), 
link_partner varchar(200),
cod_User_Partner int,

constraint pk_User_Partner primary key (id_partner),
constraint fk_User_Partner foreign key (cod_user_partner) references Tbl_User (id_user))

-- Inserção de dados
Insert Tbl_Partner 
(photo_link, link_partner,cod_User_Partner)
values 
('"C:\Users\Daiia\Downloads\photos_script\adam-jicha-hLTzAKUATgY-unsplash.jpg"','www.lyo.com',2),
('"C:\Users\Daiia\Downloads\photos_script\manuel-figueroa-SLNTW5iLWUY-unsplash.jpg"','www.royal.com',3),
('"C:\Users\Daiia\Downloads\photos_script\buddha-elemental-3d-aVWDopfT5-w-unsplash.jpg"','www.aylan.com',1),
('"C:\Users\Daiia\Downloads\photos_script\girl-with-red-hat-YMtxffXwS0Q-unsplash.jpg"','www.doge.com',4),
('"C:\Users\Daiia\Downloads\photos_script\christian-dubendorfer-aad1_TNC0u0-unsplash.jpg"','www.piaggio.com',5)


-- RELATÓRIO

-- Criação das tabelas
create table Tbl_Dashboard(
id_dash int identity (1,1),
date_dash date,
qtt_caps decimal(10,2),
weight_caps decimal(10,2),
cod_user_dash int,

constraint pk_Dashboard primary key (id_dash),
constraint fk_User_Dash foreign key (cod_user_dash) references Tbl_User (id_user))

-- Inserção de dados
Insert Tbl_Dashboard 
(date_dash, qtt_caps, weight_caps,cod_user_dash)
values 
('10/05/2025',1200,2,2),
('02/06/2025',2000, 3,1),
('15/06/2025',1500, 2.7,5),
('12/07/2025', 1000 , 1,4),
('25/07/2025', 5000 , 7,1)

-- ANIMAIS

-- Criação das tabelas
create table Tbl_Animal(
id_animal int identity (1,1),
type_animal varchar(10),
name_animal varchar(30),
weight_animal decimal(10,2),
cod_dash_animal int,

constraint pk_Animal primary key (id_animal),
constraint fk_Dashboard_Animal foreign key (cod_dash_animal) references Tbl_Dashboard (id_dash))

-- Inserção de dados 
Insert Tbl_Animal 
(type_animal, name_animal, weight_animal,cod_dash_animal)
values 
('Gato','Pipoka',3,2),
('Cachorro','Duke',7,5),
('Gato','Lilika' , 2.5,3),
('Gato', 'Banguela' , 3.5,4),
('Cachorro', 'Bobby' , 7.5,1)

-- GALERIA

-- Criação das tabelas
create table Tbl_Gallery(
id_photo int identity (1,1), 
descr_photo varchar(100), 
path_photo varchar(200), 
album_photo varchar(50), 
date_photo date,
cod_user_gallery int,

constraint PK_Gallery primary key (id_photo),
constraint FK_user_gallery foreign key (cod_user_gallery) references Tbl_User (id_user))

-- Inserção de dados
Insert Tbl_Gallery 
(descr_photo, path_photo, album_photo, date_photo,cod_user_gallery)
values 
('Momentos de comemoração','"C:\Users\Daiia\Downloads\photos_script\pineapple-supply-co-qWlkCwBnwOE-unsplash.jpg"','Eventos', '10/02/2025',2),
('Celebrando mais um evento',' "C:\Users\Daiia\Downloads\photos_script\phyo-min-fpGNSxvx1g8-unsplash.jpg"','Eventos', '13/03/2025',1),
('Empresa x',' "C:\Users\Daiia\Downloads\photos_script\mattia-revelant-pabZkFHzgYg-unsplash.jpg"' , 'Empresa', '07/04/2025',3),
('Novo estabelecimento', '"C:\Users\Daiia\Downloads\photos_script\tem-rysh-F6-U5fGAOik-unsplash.jpg"' , 'Ponto de Coleta' , '20/05/2025',5),
('Mais um parceiro', '"C:\Users\Daiia\Downloads\photos_script\philippe-gauthier-HrPBTZMPmDY-unsplash.jpg"' , 'Ponto de Coleta' , '17/09/2025',4)


-- NOTÍCIAS

-- Criação das tabelas
create table Tbl_News(
id_news int identity (1,1), 
news_photo varchar(200), 
news_date date, 
news_name varchar(100),
news_link varchar(150), 
cod_user_news int,

constraint pk_News primary key (id_news),
constraint fk_User_News foreign key (cod_user_news) references Tbl_User (id_user) )

-- Inserção de dados
Insert Tbl_News 
(news_photo, news_date, news_link, news_name,cod_user_news)
values 
('"C:\Users\Daiia\Downloads\photos_script\absolutvision-WYd_PkCa1BY-unsplash.jpg"','10/05/2025','www.new.com/report-como-coletar-tampinhas', 'Reconhecimento do Projeto',2),
('"C:\Users\Daiia\Downloads\photos_script\fujiphilm-VgU5zIEy57A-unsplash.jpg"',' 19/07/2025','www.neww.com/novo-site', 'Comemoração do novo site',5),
('"C:\Users\Daiia\Downloads\photos_script\markus-winkler-aId-xYRTlEc-unsplash.jpg"','24/08/2025' , 'www.neewss.com/implementacao-empresa', 'Implementação de tampinhas nas empresas',1),
('"C:\Users\Daiia\Downloads\photos_script\markus-winkler-aId-xYRTlEc-unsplash.jpg"', '21/10/2025' , 'www.newus.com/palestrinhas' , 'Palestrinha nas escolas',3),
('"C:\Users\Daiia\Downloads\photos_script\thomas-charters-zAi2Is48-MA-unsplash.jpg"', '31/10/2025' , 'www.noticias.com/gravacao-podcast' , 'Gravação do Podcast sobre o projeto',4)


-- Seleção de dados

-- visualização das tabelas
select * from Tbl_News
select * from Tbl_User
select * from Tbl_CollectionPoint
select * from Tbl_Partner
select * from Tbl_Dashboard
select * from Tbl_Animal
select * from Tbl_Gallery


-- lista de ponto de coleta com dados do responsavel
select  
    cp.name_point as 'nome do ponto de coleta',
    cp.address_point as endereço,
    cp.status_point as 'Status do Ponto de Coleta',
    u.name_user as responsavel,
    u.email_user as 'email do usuário'
from Tbl_CollectionPoint cp
inner join Tbl_User u
    on cp.cod_User_CollectionPoint = u.id_user;

-- lista dos parceiros com usuarios que fez o cadastro
select 
    p.photo_link as 'Foto',
    p.link_partner as 'Site Externo',
    u.name_user as 'Responsave pelo cadastro'
from Tbl_Partner p
inner join Tbl_User u
    on p.cod_User_Partner = u.id_user;

-- Quantidade de animais por tipo
select 
    type_animal as 'Tipo de Animal',
    count(*) as quantidade
from Tbl_Animal
group by type_animal;

-- Ultimas notícias ordenada por data
select
    news_name as 'Titulo',
    news_date as 'Data',
    news_link as 'Link da Noticia'
from Tbl_News
order by news_date desc;

-- Selecionar pontos de coleta ativos próximos a Sorocaba
select
    name_point as 'Nome do Ponto de Coleta',
    address_point as 'Endereço',
    status_point as 'Status'
from Tbl_CollectionPoint
where 
    address_point like '%Sorocaba%'
    and status_point = 'Ativo';
