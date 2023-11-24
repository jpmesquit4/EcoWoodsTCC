-- Criar banco de dados
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

CREATE TABLE TB_Pedido_Item (
    ID_Pedido_Item INT PRIMARY KEY AUTO_INCREMENT,
    ds_quantidade_item varchar(20)
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

select * from TB_Usuario;

CREATE TABLE TB_Endereco (
    ID_Endereco INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario int,
    DS_Cep VARCHAR(100),
    DS_Rua VARCHAR(200),
    DS_Numero VARCHAR(10),
    DS_Bairro VARCHAR(100),
    DS_Estado VARCHAR(100),
    DS_Cidade VARCHAR(100),
    FOREIGN KEY (ID_Usuario) REFERENCES TB_Usuario(ID_Usuario)
);
    
CREATE TABLE Tabela_Preco (
    ID_Preco INT PRIMARY KEY AUTO_INCREMENT,
    ID_Produto INT,
    FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto)
);



CREATE TABLE TB_Cartao (
    ID_Cartao INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT,
    NM_Titular VARCHAR(100),
    DS_Cartao VARCHAR(150),
    DS_CVV INT,
    DS_Vencimento VARCHAR(100),
    FOREIGN KEY (ID_Usuario) REFERENCES TB_Usuario(ID_Usuario)
);

CREATE TABLE TB_Pedido (
    ID_Pedido INT PRIMARY KEY AUTO_INCREMENT,
    ID_Endereco INT,
    ID_Cartao int,
    ID_Pedido_Item int,
    nr_entrega int,
    ds_totalpedido varchar(100), 
    bt_parcela boolean,
    ds_quantidade_parcela varchar(50),
    FOREIGN KEY (ID_Endereco) REFERENCES TB_Endereco(ID_Endereco),
    FOREIGN KEY (ID_Cartao) REFERENCES TB_Cartao(ID_Cartao)
);


CREATE TABLE TB_Carrinho (
    ID_Carrinho INT PRIMARY KEY AUTO_INCREMENT,
    ID_Produto INT,
    ID_Pedido_Item int,
    FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto)
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
VALUES (1, 'Cadeira com Almofada', 'Cadeira de madeira: durável, elegante e versátil. Ideal para qualquer ambiente. Construção robusta, design clássico. Sofisticação e conforto em uma peça única.', 49.99, 10, '5x5x5', 'storage/imageProdutos/9a8bd2da5c9a3eaf1fd00331193b4fc5'),
		(1, 'Armario/Gabinete', 'Armário de madeira: Durável e estiloso, é a solução perfeita para organização. Oferece resistência e design clássico. Ideal para agregar charme e funcionalidade a qualquer espaço.', '499.99', 10,'5x5x1', 'storage/imageProdutos/a2016110b23f8836182894aa99f2ed48'),
        (2,'Prateleira', 'Prateleira de madeira: Funcional e elegante, é a escolha ideal para organização. Perfeita para exibir itens decorativos ou manter seus pertences organizados.', '599.99', 10, '2x1x1', 'storage/imageProdutos/0885864647543f63874b0019376a9daa'),
        (2,'Estante com gavetas', 'Estante de madeira: Funcional, elegante e versátil. Ideal para exibir e organizar.', '129.99', 13, '2x2x3','storage/imageProdutos/e04438daeaa5b3e5230b67c26d7cc59e'),
        (3,'Guarda-Roupas', 'Guarda-roupa de madeira: Prático e estiloso, oferece amplo espaço para organização. Perfeito para armazenar roupas com durabilidade e um toque de design.', '699.99',10, '3x3x3', 'storage/imageProdutos/3c9559f64ce7228455f216adb12a191a'),
        (3,'Guarda-Roupas Simples', 'Guarda-roupa de madeira: Prático e estiloso, oferece amplo espaço para organização. Perfeito para armazenar roupas com durabilidade e um toque de design.', '159.99',10, '3x3x3', 'storage/imageProdutos/505e7700cd67cb7c8c3fb17f9a9d37d4'),
        (4,'Mesa para Escritório', 'Mesa de escritório de madeira: Combinação de funcionalidade e estilo. Proporciona um espaço de trabalho durável e elegante. Ideal para promover produtividade em um ambiente atraente.', '200.00',10,  '3x6x1', 'storage/imageProdutos/5215aea1a60a1d28d7a253e3f84a3d34'),
        (4,'Mesa para Escritório com Gavetas', 'Mesa de escritório de madeira: Combinação de funcionalidade e estilo. Proporciona um espaço de trabalho durável e elegante. Ideal para promover produtividade emum ambiente atraente.', '350.00',12,  '8x1x1', 'storage/imageProdutos/577042cd480322dd837336a5eb8116f2'),
        (5,'Gabinete para Banheiro', 'Gabinete de banheiro de madeira: Solução prática e estilosa para organizar itens de higiene. Construído com durabilidade e design funcional. Ideal para adicionar charme ao ambiente do banheiro.', '100.00',10,  '1x1x1', 'storage/imageProdutos/8045ac1cbba610b5543df5a0a81f584b');

INSERT INTO TB_Usuario (NM_Usuario, DS_email, DS_Senha, DT_Nascimento, DS_Genero)
VALUES ('joao', 'mesquita@gmail.com', '123', '2006-10-12', 'Masculino');

INSERT INTO TB_Admin (NM_Adm, DS_email, DS_Senha)
VALUES ('admin', 'admin@admin.com.br', '1234');

-- Consultas
SELECT * FROM TB_Categoria;
SELECT * FROM TB_Produto;
SELECT * FROM TB_Usuario;	
SELECT * FROM TB_Admin;
SELECT * FROM TB_Endereco;
SELECT * FROM TB_Cartao;
select * from TB_Pedido_Item;
select * from TB_Carrinho;
drop table TB_Pedido_Item;

select *
from TB_Endereco
where ID_Usuario = 1;

-- Fechar o banco de dados