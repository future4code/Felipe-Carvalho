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


### Exercicio 3
a)
DELETE from Actor WHERE id = "003"
b)
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

### Exercicio 4 

a) 
SELECT MAX(salary) FROM Actor

b) 
SELECT MIN(salary) FROM Actor WHERE gender = "female"

c)
SELECT COUNT(*) FROM Actor WHERE gender = "female"

d)
SELECT SUM(salary) FROM Actor

### Exercicio 5

a) Ele me mostrou quantaas epssoas tem do genero masculino e feminino

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT * FROM Actor
ORDER BY salary;

d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercicio 6

a)
ALTER TABLE Movie ADD playing_limit_date DATE;

b)
ALTER TABLE Movie CHANGE score score FLOAT;

c)
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
d)
DELETE FROM Movie WHERE id = "001"

### Exercicio 7

a)
SELECT COUNT(*) FROM Movie WHERE score > 7.5;

b)
SELECT AVG(score) FROM Movie;

c)
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

d)
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

e)
SELECT MAX(score) FROM Movie;

f)
SELECT MIN(score) FROM Movie;


### Exercicio 8
a)
SELECT * FROM Movie ORDER BY title;

b.
SELECT * FROM Movie ORDER BY title LIMIT 5;

c.
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

d.
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;