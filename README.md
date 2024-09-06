<img src="https://www.capitual.com/static/media/logo-dark.ec04be4e.svg" width=20%/>

# Teste Desenvolvedor Frontend

Teste ao candidato à vaga de desenvolvedor Frontend da Capitual.

## 📜 Descrição

<b>Objetivos:</b>

Clonar a dashboard <a href="https://www.figma.com/file/Yg3NSfHM3uBTXoqvZib0LP/Figma-Admin-Dashboard-(Free-Version)-v1.0.0-(Copy)?
node-id=1%3A82" target="_blank">descrito visualmente no Figma</a>, usando as seguintes ferramentas:
* React
* TypeScript
* Yarn
* Mui
* Recharts
* Airbnb TypeScript Pattern
* Styled-components

<b>Desafios:</b> 

* Utilizar o Mui personalizando os componentes já existentes para chegar ao objetivo desejado.
* Utilizar o Recharts para a criação do gráfico.
* Deixar responsivo para mobile, usando o grid system do mui

## 🛠️ Instalação

1️⃣ Primeiramente faça o download do projeto, seja baixando o arquivo .zip pelo navegador ou através do comando <i>git clone</i>.

2️⃣ Instale o Node caso não tenha instalado em sua máquina. <a href="https://nodejs.org/en/">Site oficial do Node</a>.

3️⃣ Instale o Yarn caso não tenha instalado em sua máquina. <a href="https://classic.yarnpkg.com/lang/en/docs/install/">Site oficial do Yarn</a>.

 4️⃣ Na pasta raiz do projeto digite o comando no terminal para fazer o download das bibliotecas:
 
 ```
 yarn install
 ```
 
 5️⃣ Para executar a aplicação, basta rodar o comando: 
 
 ```
 yarn start
 ```
 
  <b>OBS.:</b> Caso o comando retorne um erro parecido com:
  
 ```diff
- Expected linebreaks to be 'LF' but found 'CRLF'
```
  
  Então rode o comando abaixo e repita o passo 5.
  
 ```
 npx eslint . --ext .js,.jsx,.ts,.tsx --fix
 ```
 

 
 ## 📝 Observações Técnicas
 
 ### Gráfico
Feito utilizando o <b>Recharts</b>. O array recebido da API é tratado para agrupar os elementos pela data, e somar os valores de elementos que possuem a mesma data. É possível ver isso no gráfico no dia 06 de Setembro, haviam duas entradas com esse dia na API, o valor apresentado no gráfico é a soma dos valores dessas entradas.

O gráfico demonstrado no Figma apresenta as compras feitas nos últimos sete dias. Como a API utilizada não possui muitas entradas, deixei o gráfico mostrando os últimos 30 dias para melhor visualização. Além disso, como a entrada mais recente da API é do dia 22/09/2022, deixei a data de “hoje” <i>hardcoded</i> como 23/09/2022.

Diferente do <b>Material UI</b>, o <b>Recharts</b> não possui a função nativa de alterar os componentes em certos <i>breakpoints</i> da tela. Para poder alterar certas características do gráfico (como esconder o eixo Y e mudar os ângulos dos valores do eixo X) em certos <i>breakpoints</i>, tive que usar um <i>Hook</i> para guardar a largura (<i>width</i>) da tela, e ajustar o que é passado como propriedade para os componentes de acordo. 

### Latest Customers e Top Products
Ambos foram feitos utilizando-se da <i>List</i> do <b>Material UI</b>.

No caso do <b>Top Products</b>, a API difere do design apresentado no Figma. No design apresentado é mostrado o número de vendas total do produto, mas a API está retornando um número com casas decimais. Eu apenas ignorei os dois números das casas decimais e mantive o design proposto, assumindo que este é o número total de vendas. Além disso, o design proposto no Figma não permite uma descrição muito grande para o produto, caso contrário o texto geraria uma line break e as duas listas ficariam desalinhadas. Como a API retornava uma descrição muito grande para os produtos, eu apenas repeti o nome do produto no campo onde ficaria a descrição.

### Transactions
Feito utilizando a <i>Table</i> do <b>Material UI</b>. Responsivo para as últimas duas colunas desaparecerem a partir de certo breakpoint, como apresentado no Figma.

O status da transação foi feito utilizando o <i>Chip</i> do <b>Material UI</b>. Novamente, aqui o design difere da API. No Figma são apresentados três possíveis status, mas a API retorna um Boolean nesse campo. Deixei então apenas os estados <i>In Progress</i> (completed: false) e <i>Completed</i> (completed: true). Além disso, a tabela representa as 6 transações mais recentes feitas. Porém, todas as mais recentes estão em estado <i>In Progress</i>, então para permitir a exibição de pelo menos uma linha de cada estado eu optei por mostrar as 6 transações mais antigas ao invés das mais recentes.

### Header
Sempre fixo no topo da tela. Responsivo seguindo o design apresentado (barra de pesquisa e logo desaparecem em certos <i>breakpoints</i>). Quando a <b>Sidebar</b> desaparece a partir de certo breakpoint, o botão para expandi-la aparece aqui. Para a funcionalidade de expandir a <b>Sidebar</b> foi utilizado o componente <i>Drawer</i> do <b>Material UI</b>. 

### Sidebar
Feita utilizando o <i>List</i> do <b>Material UI</b>. Em telas maiores fica fixa no lado esquerdo da tela, em telas menores ela se contrai e o botão para expandi-la vai para o <b>Header</b>. 

### Responsividade
A estrutura geral da página foi deixada responsiva utilizando o <i>Grid System</i> do <b>Material UI</b>. Em telas maiores a <b>Sidebar</b> divide a tela com o conteúdo, e em telas menores ela se contrai e o conteúdo ocupa a largura inteira da tela.
As listas de <b>Latest Customers</b> e <b>Top Products</b> também dividem um <i>grid</i> para mantê-las responsivas. Em certos <i>breakpoints</i> elas mudam de tamanho para acomodar melhor o conteúdo, e a partir de certo ponto elas deixam de ficar na mesma linha e ficam em uma coluna.
