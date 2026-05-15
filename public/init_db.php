<?php

$dbPath = __DIR__ . '/database.sqlite';

$pdo = new PDO('sqlite:' . $dbPath);

$sql = file_get_contents(__DIR__ . '/database.sql');

$pdo->exec($sql);

echo "База данных создана!";