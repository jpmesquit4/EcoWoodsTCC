create database ecoWoodsDB;
USE ecoWoodsDB;

-- Criar tabelas

CREATE TABLE TB_Categoria (
    ID_Categoria INT PRIMARY KEY AUTO_INCREMENT,
    NM_Categoria VARCHAR(100)
);

CREATE TABLE TB_Admin (
    ID_Adm INT PRIMARY KEY AUTO_INCREMENT,
    NM_Adm VARCHAR(100),
    DS_Email VARCHAR(100),
    DS_Senha VARCHAR(100)
);


CREATE TABLE TB_Produto (
    ID_Produto INT PRIMARY KEY AUTO_INCREMENT,
    ID_Adm INT,
    ID_Categoria INT,
    NM_Produto VARCHAR(100),
    DS_Descricao VARCHAR(200),
    VL_Preco DECIMAL(8,2),
    DS_Tamanho VARCHAR(150),
    NR_Estoque INT,
    img_produto VARCHAR(800),
    FOREIGN KEY (ID_Categoria) REFERENCES TB_Categoria(ID_Categoria),
    FOREIGN KEY (ID_Adm) REFERENCES TB_Admin(ID_Adm)
);

CREATE TABLE TB_Usuario (
    ID_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    NM_Usuario VARCHAR(200),
    DS_Email VARCHAR(100),
    DS_Senha VARCHAR(100),
    DT_Nascimento DATE,
    DS_Genero VARCHAR(100)
);

CREATE TABLE TB_Endereco (
    ID_Endereco INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT,
    NR_Cep VARCHAR(100),
    DS_Endereco VARCHAR(200),
    NR_Numero VARCHAR(10),
    DS_Complemento VARCHAR(100),
    DS_Bairro VARCHAR(100),
    DS_Estado VARCHAR(100),
    DS_Cidade VARCHAR(100),
    DS_Referencia VARCHAR(100),
    FOREIGN KEY (ID_Usuario) REFERENCES TB_Usuario(ID_Usuario)
);


CREATE TABLE TB_Pedido (
    ID_Pedido INT PRIMARY KEY AUTO_INCREMENT,
    ID_Endereco_Entrega INT,
    DS_Nota_Fiscal VARCHAR(100),
    TB_Forma_Pagamento VARCHAR(20),
    QTD_Parcela INT,
    DT_Pedido DATE,
    DS_Situacao VARCHAR(100),
    FOREIGN KEY (ID_Endereco_Entrega) REFERENCES TB_Endereco(ID_Endereco)
);

CREATE TABLE TB_Pedido_Item (
    ID_Pedido_Item INT PRIMARY KEY AUTO_INCREMENT,
    ID_Pedido INT,
    ID_Produto INT,
    QTD_Item INT,
    VL_Valor_Final DECIMAL(8,2),
    BT_Pagamento BOOL,
    FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto),
    FOREIGN KEY (ID_Pedido) REFERENCES TB_Pedido(ID_Pedido)
);

CREATE TABLE TB_Carrinho (
    ID_Carrinho INT PRIMARY KEY AUTO_INCREMENT,
    ID_Produto INT,
    FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto)
);



CREATE TABLE TB_Cartao (
    ID_Cartao INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT,
    NM_Titular VARCHAR(100),
    NR_Cartao VARCHAR(100),
    DS_CVV INT,
    DS_Vencimento VARCHAR(100),
    FOREIGN KEY (ID_Usuario) REFERENCES TB_Usuario(ID_Usuario)
);





CREATE TABLE TB_Tamanho_Produto (
    ID_Tamanho INT PRIMARY KEY AUTO_INCREMENT,
    ID_Produto INT,
    DS_Tamanho VARCHAR(100),
    FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto)
);

CREATE TABLE TB_Produto_Imagem (
    ID_Imagem_produto INT PRIMARY KEY AUTO_INCREMENT,
    IMG_Produto VARCHAR(100)
);


-- Inserir dados
INSERT INTO TB_Categoria (NM_Categoria)
VALUES 
    ('Sala de Estar'),
    ('Cozinha'),
    ('Closet'),
    ('Escritorio'),
    ('Banheiro'),
    ('Lavanderia');

INSERT INTO TB_Produto (ID_Categoria, NM_Produto, DS_Descricao, VL_Preco, NR_Estoque, DS_Tamanho, img_produto)
VALUES (1, 'Mesa Oval', 'Feita principalmente de madeira maciça.', 2430.00, 8, 'jhsda' ,'');

INSERT INTO TB_Categoria (NM_Categoria)
VALUES ('Sala de Estar');

INSERT INTO TB_Usuario (NM_Usuario, DS_email, DS_Senha, DT_Nascimento, DS_Genero)
VALUES ('joao', 'mesquita@gmail.com', '1234', '2006-10-10', 'Masculino');

INSERT INTO TB_Admin (NM_Adm, DS_email, DS_Senha)
VALUES ('admin', 'admin@admin.com.br', '1234');

-- Consultas
SELECT * FROM TB_Categoria;
SELECT * FROM TB_Produto;
SELECT * FROM TB_Usuario;
SELECT * FROM TB_Admin;

-- Outras consultas
-- (Adapte conforme necessário)

-- Excluir registro do administrador
DELETE FROM TB_Admin WHERE ID_Adm = 2;

-- Buscar usuário pelo email, senha e nome
SELECT ID_Usuario AS id, NM_Usuario AS nome, DS_Email AS email
FROM TB_Usuario
WHERE DS_Email = 'mesquita@gmail.com' AND DS_Senha = '1234' AND NM_Usuario = 'joao';

-- Fechar o banco de dados
DROP DATABASE ecoWoodsDB;


