# Guerra dos Quadrados

Um jogo 2D desenvolvido com **HTML5 Canvas**, **JavaScript** e **Node.js**, onde dois quadrados competem para marcar pontos pulando sobre o adversário.

O projeto foi desenvolvido com foco na prática de conceitos fundamentais de Desenvolvimento Web, incluindo manipulação do Canvas, eventos de teclado, física básica, detecção de colisões e criação de um servidor HTTP utilizando Node.js.

## Demonstração

### Modos de Jogo
- **1 Jogador:** jogador contra uma CPU simples.
- **2 Jogadores:** disputa local utilizando o mesmo teclado.

### Objetivo
Marque pontos pulando sobre a cabeça do adversário. Cada acerto adiciona um ponto ao placar.

## Tecnologias Utilizadas

- HTML5
- JavaScript
- Canvas API
- Node.js
- Módulo HTTP nativo do Node.js

## Estrutura do Projeto

```text
.
├── index.html       # Interface principal do jogo
├── main.js          # Lógica do jogo
├── connection.js    # Servidor HTTP Node.js
└── README.md
```

## Funcionalidades

- Sistema de pontuação em tempo real
- Física básica com gravidade e salto
- Detecção de colisões entre jogadores
- Controle por teclado
- Modo contra CPU
- Modo para dois jogadores
- Servidor local utilizando Node.js

## Controles

### Jogador Azul
| Tecla | Ação |
|---------|---------|
| W | Pular |
| A | Mover para a esquerda |
| D | Mover para a direita |

### Jogador Vermelho
| Tecla | Ação |
|---------|---------|
| ↑ | Pular |
| ← | Mover para a esquerda |
| → | Mover para a direita |


## Conceitos Aplicados

- Manipulação do DOM
- Eventos de teclado
- Renderização gráfica com Canvas
- Loops de animação com `requestAnimationFrame()`
- Programação orientada a objetos com estruturas JavaScript
- Física simples aplicada a jogos
- Desenvolvimento de servidores HTTP com Node.js

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento Web.