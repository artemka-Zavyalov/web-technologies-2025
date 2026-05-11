<?php

$dbPath = __DIR__ . '/database.sqlite';

try {

    $pdo = new PDO("sqlite:$dbPath");

    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

} catch (PDOException $e) {

    die("Ошибка подключения: " . $e->getMessage());
}