## PRE-REQUISITES OF API

* Create user to restrict access to user table
* User with basic access


 ## SCRIPTS
```SQL
 -- create user
 CREATE USER dbadmin;

 -- grant access
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO dbadmin;

 -- restrict access
 REVOKE SELECT, INSERT, UPDATE, DELETE ON TABLE users FROM dbadmin;

 -- reset password
 ALTER USER dbadmin WITH PASSWORD 'password';
```
restrict access to table


## MACHINE SETUP

Make sure the following checklist is done.

- postgresql ( database )
- nodejs ( >= v8.10.0 )
- npm ( >= v.3.5.2 )
