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
a) SELECT  * FROM Actor WHERE gender = "female"
b) SELECT  salary FROM Actor WHERE name = "Tony Ramos"
c) Nada foi retornado
d) SELECT id, name, salary FROM Actor WHERE salary <= 500000;
e)Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

### Exercicio 4 
a) A query utiliza o SELECT que é o comando mais conhecido para buscar "* FROM Actors" significa buscar tudo de Actors, como o WHERE ele faz uma busca se possui nomes com o LIKE em a ou j caso tenho um dos dois tem um e para buscar um salario maior que  300000
b) 
SELECT * FROM Actor
WHERE name NOT LIKE "A%"  AND salary > 350000
C)
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
D)
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

### Exercicio 5
A)
INSERT INTO Movie (id, title, sinopse, launch_date, score)
VALUES(
	"001",
	"Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
	7
)

b, c, d, e)

INSERT INTO Movie (id, title, sinopse, launch_date, score)
VALUES(
	"002",
	"Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
	10
),
(
	"003",
	"Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-11-02",
	8
),
(
	"004",
	"Minha Mãe É uma Peça 3",
	"Em Minha Mãe É Uma Peça 3, Dona Hermínia (Paulo Gustavo) vai ter que se redescobrir e se reinventar porque seus filhos estão formando novas famílias.",
	"2019-12-26",
	8
)

### Exercicio 6
a)
SELECT id, title, score FROM Movie WHERE id = "004";
b)
SELECT * FROM Movie WHERE name = "Deus é Brasileiro";
c)
SELECT id, title, sinopse FROM Movie WHERE score > 7;
### Exercicio 7
a)
SELECT * FROM Movie
WHERE title LIKE "%vida%";
b)
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      sinopse LIKE "%TERMO DE BUSCA%";
C)
SELECT * FROM MOVIE
WHERE launch_date < "2020-05-04";
