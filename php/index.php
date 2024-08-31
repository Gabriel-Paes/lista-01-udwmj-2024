<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário com PHP</title>
    <link rel="stylesheet" href="/css/style.css" />
</head>

<body>
    <div class="form-container">
        <h1>Letra na posição</h1>
        <form action="" method="post">
            <div class="    form-group">
                <label for="textInput">Informe uma palavra:</label>
                <input type="text" id="textInput" name="textInput" required>
            </div>
            <div class="form-group">
                <label for="numberInput">Posição:</label>
                <input type="number" id="numberInput" name="numberInput" required>
            </div>
            <div class="form-group">
                <input type="submit" value="Enviar">
            </div>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST['textInput']) && isset($_POST['numberInput'])) {

                $textInput = $_POST['textInput'];
                $numberInput = $_POST['numberInput'];

                $letterOutput = getLetterFromPosition($numberInput, $textInput);

                echo "<h2>Dados Recebidos:</h2>";
                echo "<p><strong>Palavra informada:</strong> $textInput</p>";
                echo "<p><strong>Posição informada:</strong> $numberInput</p>";
                echo "<p><strong>Letra da posição:</strong> $letterOutput</p>";
            }
        }

        function getLetterFromPosition($position, $word)
        {
            $position = ($position - 1) % strlen($word);

            $letter = $word[$position];

            return $letter;
        }
        ?>
    </div>
</body>

</html>