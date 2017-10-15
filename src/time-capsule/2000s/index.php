<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo preg_replace("/[^a-zA-Z]/", "", $_SERVER["REQUEST_URI"]); ?></title>
</head>
<body>
<a href="/">Index</a>
    <a href="/dashboard">Dashboard</a>
    <a href="/products">Products</a>
    <h1><?php echo preg_replace("/[^a-zA-Z]/", "", $_SERVER["REQUEST_URI"]); ?></h1>
</body>
</html>
