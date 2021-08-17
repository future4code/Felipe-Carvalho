### Exercicio 1

a) Esse comando deleta a coluna do salary
b) Esse comando pode alterar o nome da coluna ou o tipo dela
c) Esse comando pode alterar o nome da coluna ou o tipo dela
d)
    ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercicio 2
a)
UPDATE Actor 
SET name = "Felipe Souto" , birth_date = "1993-10-19"
WHERE id = "003"
b)
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
c)
UPDATE Actor
SET 
name = "Ryan Gosling",
birth_date = "1980-02-11",
salary = 600000,
gender = "male"
WHERE id = "005";
d)

### Exercicio 3
a)
DELETE from Actor WHERE id = "003"
b)
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

### Exercicio 4 
