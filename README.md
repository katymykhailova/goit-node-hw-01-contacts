# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list https://monosnap.com/file/Qskohbjz2mYHdAdMDKyCOCtPu6J8Rd

# Получаем контакт по id

node index.js --action get --id 5 https://monosnap.com/file/N3ywmBA1yVy2xmB3nVmk7FiQhuEtDE

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/Lvf4pum0xxScyzXSUuoSriHtY3clee

# Удаляем контакт

node index.js --action remove --id 3 https://monosnap.com/file/dH0wv2FJqUlYHwHdOPZxOZPOnXBTbl
