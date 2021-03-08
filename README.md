# # Desafio Node Library  South System.

## Stack
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [ExpressJS](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/)

##  Quick Start

### Clonar o repositório

```bash
$ git clone https://github.com/Hudison/southsystem-desafio-node-library.git
```

### Instalar os pacotes

```bash
$ npm i
```

### Executar o projeto
- #### Em desenvolvimento
```bash
$ npm run dev
```
- #### Em desenvolvimento
```bash
$ npm run dev
```
- #### Ou executar diretamente o projeto transpilado
 ```bash
$ npm run build
```
```bash
$ npm start
```
### Executar testes

```bash
$ npm run test
```

##### Obs: O projeto será iniciado por padrão na porta 3000, mas pode ser alterado através do .env.
## Banco de dados
##### O projeto utiliza MongoDB que pode ser ser utilizado apenas alterando as informações de conexão no .env. Entretanto, por conveniência o projeto está configurando utilizando um cluster na AWS que já está configurado no projeto.
##### 	 Obs: Caso opte por utilizar o banco de dados local, é necessário remover ou deixar sem valor a variável "MONGO_FULL_URI" no .env.
## Rotas
### O projeto usa swagger para gerar a documentação das rotas.
![enter image description here](https://user-images.githubusercontent.com/29755832/110272910-1b0df700-7faa-11eb-99d7-92a27aee7a1d.png)

#### Para acessar as rotas é necessário realizar login antes. Para realizar login você pode cadastrar um usuário novo passando as informações necessárias. 
```
{
	"name": "string",
	"age": 30,
	"phone": "+5548999916015",
	"email": "teste@provider.com",
	"password": "teste"
}
```
#### Ou utilizar o usuário já inicialmente cadastrado.
```a
{
	"email": "teste@teste.com",
	"password": "teste"
}
```

## License

[MIT](LICENSE)
