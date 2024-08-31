# Lista 01 udwmj 2024

## Sala de Espera

Em um cenário onde temos uma **alta demanda** para a compra de ingressos online, como sessões de cinema, é essencial gerenciar o fluxo de usuários para evitar sobrecarga no servidor e garantir uma experiência fluida para os usuários.

Sem uma fila de espera, o servidor pode ficar sobrecarregado quando muitos usuários tentam acessar simultaneamente as páginas de compra ou de escolha dos assentos. Isso não só prejudica quem já está no processo, mas também impede que novos usuários consigam acessar as telas, levando potencialmente a erros como o 500 - Internal Server Error.

Com a fila de espera, o sistema fornece um feedback claro e ordenado para os usuários, assegurando que eles saibam que sua solicitação está sendo processada e que, em breve, poderão concluir a compra.

![Sala de espera](/assets/image.png)

Um bônus que eu desenvolvi foi a recomendação para uma sessão mais vazia, assim promovendo a venda de ingressos para outras seções e garantindo uma alternativa para que os usuários não dessistam com o tempo de espera da fila.

> [!TIP]
> Acima ou igual a 4 minutos aparece a recomendação de próximas sessões.

![Sala de espera com recomendações](/assets/image2.png)

Por enquando não tem muito depois dessa tela, apenas um informativo para entendermos o fluxo da usabilidade das telas e opções anteriores.

![Mapa da sala](/assets/image3.png)

## Formulário PHP

Esse código é um simples exemplo de código php, nele você pode informar uma palavra e mesmo que tenha poucas posições podemos pensar em uma que o código ira calcular qual a Letra na posição informada.
