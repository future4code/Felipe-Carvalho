CRIAÇÃO DE TABELAS - MySql

~~~~sql
  CREATE TABLE to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
  );
~~~~

~~~~sql
  CREATE TABLE to_do_list_tasks (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provide",
    deadline DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
  );
~~~~

~~~~sql
  CREATE TABLE to_do_list_assignees (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)
  );
~~~~