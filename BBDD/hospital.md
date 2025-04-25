https://www.sql-practice.com/

                    --------------- EASY --------------------

1. First name of patients whose name start with C.
   ---> SELECT first_name FROM patients WHERE first_name LIKE 'C%'

2. First name and last name of patients that weight within the range of 100 to 120 (inclusive)
    ---> SELECT first_name, last_name FROM patients WHERE weight BETWEEN 100 AND 120

3. Update the patients table for the allergies column. If the patient's allergies is null then replace it with 'NKA'
    ---> UPDATE patients SET allergies = 'NKA' WHERE allergies IS NULL

4. Show first name and last name concatinated into one column to show their full name
    ---> SELECT CONCAT(first_name, ' ', last_name AS full_name) FROM patients

5. Show first name, last name, and the full province name of each patient
    ---> SELECT first_name, last_name, province_name FROM patients JOIN province_name
    ON province_name.province_id = patients.province_id

6. Show how many patients have a birth_date with 2010 as the birth year.
    ---> SELECT COUNT(*) AS total_patients FROM patients WHERE 
    YEAR(birth_date) = 2010

                    --------------- MEDIUM --------------------

1. Show unique birth years from patients and order them by ascending.
    ---> SELECT DISTINCT YEAR(birth_date) AS birth_year ORDER BY birth_year ASC

2. Show unique first names from the patients table which only occurs once in the list.

For example, if two or more people are named 'John' in the first_name column then don't include their name in the output list. If only 1 person is named 'Leo' then include them in the output.

    ---> SELECT first_name from patients 
            GROUP BY first_name HAVING COUNT(first_name) = 1

3. Show patient_id and first_name from patients where their first_name start and ends with 's' and is at least 6 characters long.

    ---> select patient_id, first_name FROM patients 
	        where first_name LIKE 'S%'
            AND first_name LIKE '%s'
            AND len(first_name) >= 6;

4. Show patient_id, first_name, last_name from patients whos diagnosis is 'Dementia'.

Primary diagnosis is stored in the admissions table.

    ---> SELECT patients.patient_id, first_name, last_name 
        FROM patients JOIN admissions 
            ON patients.patient_id = admissions.patient_id 
        WHERE admissions.diagnosis = 'Dementia';

5. Display every patient's first_name.
    Order the list by the length of each name and then by alphabetically.

    ---> SELECT first_name FROM patients
        ORDER BY LEN(first_name), first_name ASC;

6. Show the total amount of male patients and the total amount of female patients in the patients table.
    Display the two results in the same row.

    ---> SELECT
	        (SELECT COUNT(*) FROM patients WHERE gender = 'M') AS male_count,
            (SELECT COUNT(*) FROM patients WHERE gender = 'F') AS female_count;

7. Show first and last name, allergies from patients which have allergies to either 'Penicillin' or 'Morphine'. Show results ordered ascending by allergies then by first_name then by last_name.

    ---> SELECT first_name, last_name, allergies FROM patients
        WHERE allergies IN ('Penicillin', 'Morphine')
        ORDER BY allergies ASC, first_name ASC, last_name ASC;

                    --------------- HARD --------------------

1. Show all of the patients grouped into weight groups. Show the total amount of patients in each weight group. Order the list by the weight group decending.

For example, if they weight 100 to 109 they are placed in the 100 weight group, 110-119 = 110 weight group, etc.

    ---> SELECT
      COUNT(*) AS patients_in_group,
      FLOOR(weight / 10) * 10 AS weight_group
    FROM patients
    GROUP BY weight_group
    ORDER BY weight_group DESC;

2. Show patient_id, weight, height, isObese from the patients table.

-Display isObese as a boolean 0 or 1.
-Obese is defined as weight(kg)/(height(m)2) >= 30.
-weight is in units kg.
-height is in units cm.

    ---> SELECT patient_id, weight, height, 
	    (CASE 
        WHEN weight/(POWER(height/100.0,2)) >= 30 
    	    THEN 1 
    	    ELSE 0
	    END) as isObese
        FROM patients;