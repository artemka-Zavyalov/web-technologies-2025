-- Таблица товаров
CREATE TABLE products (
                          id INTEGER PRIMARY KEY AUTOINCREMENT,
                          name TEXT NOT NULL,
                          image TEXT,                -- путь к файлу (относительный)
                          price DECIMAL(10,2) NOT NULL,
                          description TEXT NOT NULL
);

-- Таблица отзывов
CREATE TABLE reviews (
                         id INTEGER PRIMARY KEY AUTOINCREMENT,
                         product_id INTEGER NOT NULL,
                         author TEXT NOT NULL,
                         rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
                         text TEXT NOT NULL,
                         created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                         FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
-- Добавим пару тестовых товаров
INSERT INTO products (name, image, price, description) VALUES
                                                           ('Lexus LX 570', 'img/Lexus.png', 25000000, 'Новенький Лексус ЛХ 570, мощь и комфорт в сочетании с потрясающей динамикой'),
                                                           ('Lexus IS 250', 'img/LexusIS.png', 6000000, 'Лексус ИС 250 отличной подойдет тем, кто любит скорость и драйв в сочетании с красивой внешностью');