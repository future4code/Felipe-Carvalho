### Exercicio 1
a) o VARCHAR foi utilizado para mostrar qual o limite de caracteres, PRIMARY KEY seria a chave primaria de que todo Actor teria, NOT NULL seria que a informação seria obrigatoria e nuna nula, DATE seria um formato de dados.

b) O comando SHOW DATABASES mostra os databases e o SHOW TABLES mostra as tables.

c) O comando DESCRIBE Actor mostra os dados que estao guardados na tabela Actor.

### Exercicio 2
a)
INSERT INTO Actor (0id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
)
b) Codigo de erro entrada duplicada para a chave primaria. nao pode ter duas chaves iguais.

c) Foi adcionado as propriedades faltando
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) Foi adcionado a propriedade name que era not null 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Felipe Souto",
  400000,
  "1949-04-18", 
  "male"
);

e) Foi informado a data como uma string
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercicio 3