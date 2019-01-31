-- init file start by dropping all tables, starting with those that depend on others
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS campus_data;

-- create campus data
create table campus_data (
    campus TEXT PRIMARY KEY
    , program VARCHAR (64) NOT NULL
    , campus_phone TEXT NOT NULL
);

-- create student data
create table students (
    ID SERIAL PRIMARY KEY
    , name VARCHAR(64) NOT NULL
    , cohort INTEGER NOT NULL
    , campus TEXT references campus_data(campus)
);

-- instert campus data
INSERT INTO campus_data (campus, program, campus_phone) VALUES ('phoenix', 'web', '867-5309'), ('provo', 'web', '666-6666'), ('dallas', 'ios', '555-5555');

-- insert student
INSERT INTO students (name, cohort, campus) 
VALUES ('spencer', 3,'phoenix') 
,('rebecca', 3,'phoenix')
,('ryan', 7,'phoenix')
,('gary', 7,'phoenix')
,('gina', 4,'phoenix')
,('john', 3, 'dallas')
,('sarah', 5, 'provo')
,('sam', 5, 'provo');