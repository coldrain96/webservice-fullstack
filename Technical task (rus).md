# Тех.задание
Есть веб-сервис.
 
Есть Пользователи веб-сервиса и есть Операторы. Пользователи - обычные посетители, они принимают участие в опросах и т.д.  Операторы - это менеджеры Сервиса, они обрабатывают результаты Опросов.
 
Веб-сервис собирает данные по Пользователям (результаты опросов). Эти данные хранятся на сервере в виде какой-то базы данных. Некоторые пользователи не могут принимать участие в опросах (в примере они указаны как "заблокированные").
 
**Задача: нужно реализовать возможность для Оператора скачивать с фронта данные по пользователям в виде xlsx файла.** 
 
Требования и рекомендации к выполнению задачи:
1. Нужен простой интерфейс с кнопочкой, клик на которую будет запускать скачивание *.xlsx файла
2. *.xlsx файл должен содержать два листа: данные, сгруппированные по пользователям, и данные, сгруппированные по вопросам (см. пример)
3. Рекомендуется использовать библиотеку sheetjs для конвератции json в xlsx (https://github.com/SheetJS/sheetjs)
4. Данные на клиент приходят через api бакэнда, т.е в браузер приходит json с бакенда, а сам xlsx генерируется на клиенте.
5. Базу Данных на бэкнэде предлагается формировать на основе данных, содержащихся в примере xlsx отчета sample quiz report.xlsx
6. Бэкэнд реализуется на любом языке, любой технологии.
####Заметки к выполнению:
+ Мы приветствуем ведение бэклога по задачам
+ Мы приветствуем, если работа над задачей ведется в гите
+ UI по данной задаче простой.
+ Для данной задачи не предусмотрены требования к хранению БД по пользователям нет. Главное чтобы в выгружаемом xlsx они были разделены и сгруппированы (как в примере)