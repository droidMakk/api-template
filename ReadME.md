# API TEMPLATE

> API 

To clone this repo
```shell
npx degit droidmakk/api-template
```

## BOOTSTRAP DATABASE
```sql
-- create database
create database your-app-dev;

-- create user
create user dbadmin with password 'some-password';

-- grant access
grant select, update, delete on all tables in schema public to dbadmin;

-- restrict access
revoke select, update, delete on table users from dbadmin;

 -- reset password
 alter user dbadmin with password 'some-other-password';
```


## MACHINE SETUP
install the following in machine.

- postgresql > 8.x
- nodejs > 8.x
- npm > 3.x
