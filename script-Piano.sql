create database piano;

use piano;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (265),
senha varchar (45));

create table quiz(
idQuiz int primary key auto_increment,
Nome varchar (45));

create table Pontuacao(
idPontuacao int,
fkUsuario int,
constraint fkUsuario_Pontuacao foreign key (fkUsuario) references usuario (idUsuario),
fkQuiz int,
constraint fkPontuacao_Quiz foreign key (fkQuiz) references quiz (idQuiz),
Pontuacao int,
Data date);

select truncate(avg(Pontuacao), 1) as Pontuacao from Pontuacao;

select Pontuacao from Pontuacao where fkUsuario = 1 order by idPontuacao desc limit 5;
desc Pontuacao;
