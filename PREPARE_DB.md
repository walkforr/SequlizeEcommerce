# Preparing the Database

Do the following as ./mysql -u root

```sql
create database shopdb;
create user shopper identified by 'shoppass;
grant all privileges on shopdb to shopper;
grant all privileges on shopdb.* to shopper;
```

# credentials
shopdb
user: shopper
pass: shoppass