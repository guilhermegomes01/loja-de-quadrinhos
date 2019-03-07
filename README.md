# Loja de Quadrinhos

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 7.3.3.

O projeto utiliza o framework [_Bootstrap_](https://getbootstrap.com/docs/3.3/). A versão instalada é a 3.3.7

## Arquivos/Programas necessários

- É necessário ter o Angular e o Node.js instalados na máquina.
- Para alterar o código, pode-se utilizar qualquer editor de texto ou IDE.

## Servidor de Desenvolvimento

Após ter instalado o Angular e o Node, abra o terminal dentro da pasta o qual você colocou o projeto, então execute
```
ng serve
```
Isso irá iniciar um servidor na porta 4200. Navegue para 
```
http://localhost:4200/
```
A aplicação irá atualizar automaticamente à medida que for feito alterações

### Organização dos arquivos

Há 5 Componentes dentro da pasta **app/**

| Pasta | Detalhes |
| ----- | -------- |
|comics/| _Esse é o componente onde fica a página que contém todos os quadrinhos_ |
|comics-detail/| _É o componente onde fica a página que contém os detalhes de um determinado quadrinho, de acordo com seu ID_ |
|comics-releases/| _Nesse contém o componente onde fica a página que mostra os últimos lançamentos da semana_ |
|header/| _É o componente que contém a área onde fica a imagem principal e a navbar_ |
|home/| _É o componente que contém o que é mostrado assim que entra na página: Uma tela de boas vindas e os quadrinhos mais lidos_ |

**Obs: O arquivo que contém as requisições HTTP é o:**
```
comics/comics.service.ts
```
### Arquivos .CSS

- As declarações de css que são necessários para elementos de várias páginas estão no arquivo **src/styles.css**
- As declarações específicas dos seletores de um determinado componente estão no arquivo .css dentro do próprio componente
