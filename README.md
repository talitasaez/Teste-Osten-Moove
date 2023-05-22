README - API Back-end e Front-end para Cadastro de Empresas

Este projeto é dividido em duas partes: back-end e front-end. O back-end consiste em uma API para cadastro de empresas, enquanto o front-end é responsável pela interação com a API.

Configuração do Back-end

1. Certifique-se de ter o Node.js e o NPM (Node Package Manager) instalado em seu ambiente de desenvolvimento.
2. Clone este repositório em seu computador git clone <URL do repositório>.
3. Acesse a pasta do projeto no terminal cd <nome-do-projeto>.
4. Execute o comando npm installpara instalar todas as dependências do projeto <npm install>.
5. Certifique-se de ter um banco de dados MySQL está em execução, pode fazer o reset do banco de dados através do comando <npm run db:reset>.
6. Agora você está pronto para iniciar um back-end de API. No terminal, execute o seguinte comando: <npm start>.

A API back-end estará em execução e pronto para receber as requisições.Agora você pode aguardar com a configuração e execução do front-end para interagir com a API back-end.

Configuração do Front-end

1. Certifique-se de ter o Node.js e o NPM (Node Package Manager) instalado em seu ambiente de desenvolvimento.
2. Acesse a pasta do projeto front-end no terminal.
3. Execute o comando <npm install>  para instalar todas as dependências do projeto.
4. Inicie o servidor front-end com o comando <npm start>.
5. Outra opçao de iniciar o servidor é através do Visual Studio Code.
5. Localize o arquivo HTML principal do front-end (por exemplo, index.html).
6. Clique com o botão direito do mouse no arquivo HTML e selecione "Open with Live Server" (Abrir com o Live Server).
7. O Live Server iniciará um servidor local e abrirá o front-end no navegador padrão

Certifique-se de que o servidor back-end esteja em execução para que o front-end possa se comunicar corretamente com uma API.

Dessa forma, você poderá visualizar e interagir com o front-end por meio do servidor local fornecido pela extensão Live Server do Visual Studio C

O front-end estará em execução e pode ser acessado no navegador através do endereço http://localhost:3001/company.


Utilização do Front-end

Após iniciar o servidor front-end, você poderá utilizar uma interface para interagir com uma API de cadastro de empresas. O front-end inclui as seguintes funcionalidades:

* Uma tabela com a lista de empresas, mostrando o ID, nome e endereço, e botões para mais adicionar empresa, editar e apagar a empresa.
* Um botão para adicionar Empresa uma nova empresa no sistema, que abre um formulário para inserir os dados da empresa e enviar para a API.
* Após adicionar uma nova empresa terá botões para adicionar e cancelar esse novo registro.
* O registro da empresa pode ser editado ou apagado através dos botões editar e deletar.
* Ao clicar no botão "Editar", um modal será aberto permitindo a edição dos dados da empresa.
* Ao clicar no botão "Apagar", um modal de confirmação de exclusão será exibido.

Certifique-se de que o servidor back-end esteja em execução para que o front-end possa se comunicar corretamente com uma API.


Considerações Finais

Certifique-se de seguir as instruções corretamente para configurar e executar tanto o back-end quanto o front-end. Caso encontre algum problema, verifique se todas as dependências foram instaladas corretamente .
