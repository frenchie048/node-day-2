UPDATE students
SET cohort = $2
WHERE id = $1;
SELECT * FROM students;

