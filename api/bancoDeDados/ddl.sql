create database ecoWoodsDB;
use ecoWoodsDB;

insert into TB_Produto(ID_Categoria, NM_Produto, DS_Descricao, VL_Preco, NR_Estoque, DS_Tamanho, img_produto)
				value(1, 'Mesa Oval', 'Feita principalmente de madeira maciça.', 2430.00, 8, 'jhsda' ,'');
                
insert into TB_Categoria(NM_Categoria)
				  value ('Sala de Estar'),
						('Cozinha'),
                        ('Closet'),
                        ('Escritorio'),
                        ('Banheiro'),
                        ('Lavanderia');
                  
                  select * from TB_Categoria;
                  
insert into TB_Categoria(NM_Categoria)
				  value ('Sala de Estar');
                  
select * from TB_Produto;		
select * from TB_Usuario;

select  ID_Produto              id,
    ID_Categoria            categoria,
    NM_produto              produto,
    DS_Descricao            descricao,
    VL_Preco                preco,
    DS_Tamanho              tamanho,
    NR_Estoque              estoque,
    ID_Adm                  adm,
    img_produto             imagem
    from    TB_Produto
    where   ID_Categoria            = 1;
 
-- Buscar Pelo Id da Categoria e aparecer o nome 
SELECT
        TB_Produto.ID_Produto AS id,
        TB_Produto.ID_Categoria AS categoria,
        TB_Produto.NM_Produto AS produto,
        TB_Produto.DS_Descricao AS descricao,
        TB_Produto.VL_Preco AS preco,
        TB_Produto.DS_Tamanho AS tamanho,
        TB_Produto.NR_Estoque AS estoque,
        TB_Produto.img_produto AS imagem,
        TB_Produto.ID_Adm AS adm,
        TB_Categoria.NM_Categoria AS nome_categoria
    FROM
        TB_Produto
    INNER JOIN
        TB_Categoria
    ON
        TB_Produto.ID_Categoria = TB_Categoria.ID_Categoria;

drop table TB_Categoria;
create table TB_Categoria(
ID_Categoria		int primary key auto_increment,
NM_Categoria		varchar(100)
);

drop table TB_Produto;
create table TB_Produto(
ID_Produto			int primary key auto_increment,
ID_Adm				int,
ID_Categoria		int,
NM_Produto			varchar(100),
DS_Descricao		varchar(200),
VL_Preco			decimal(8,2),
DS_Tamanho			varchar(150),
NR_Estoque			int,
img_produto			varchar(800),
FOREIGN KEY (ID_Categoria) REFERENCES TB_Categoria(ID_Categoria),
FOREIGN KEY (ID_Adm) REFERENCES TB_Admin(ID_Adm)
);

drop tables TB_Tamanho_Produto;
create table TB_Tamanho_Produto(
ID_Tamanho			int primary key auto_increment,
ID_Produto			int,
DS_Tamanho			varchar(100),
FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto)
);

drop tables TB_Produto_Imagem;
create table TB_Produto_Imagem(
ID_Imagem_produto			int primary key auto_increment,
IMG_Produto					varchar(100)
);

drop tables TB_Carrinho;
create table TB_Carrinho(
ID_Carrinho			int primary key auto_increment,
ID_Produto			int,
FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto)
);

drop tables TB_Usuario;
create table TB_Usuario(
ID_Usuario				int primary key auto_increment,
NM_Usuario				varchar(200),
DS_Email				varchar(100),
DS_Senha				varchar(100),
DT_Nascimento			date,
DS_Genero				varchar(100)
);

select * from TB_Usuario;

drop table TB_Usuario;

insert into TB_Usuario(NM_Usuario, DS_email, DS_Senha, DT_Nascimento, DS_Genero)
values ('joao', 'mesquita@gmail.com', '1234', '2006-10-10', 'Masculino');

select  	ID_Usuario          id,
            NM_Usuario          nome,
	        DS_Email            email
    from    TB_Usuario
    where   DS_Email            = 'mesquita@gmail.com' 
    and     DS_Senha            = '1234'
    and     NM_Usuario          = 'joao';

drop tables TB_Cartao;
create table TB_Cartao(
ID_Cartao				int primary key  auto_increment,
ID_Usuario				int,
NM_Titular				varchar(100),
NR_Cartao				varchar(100),
DS_CVV					int,
DS_Vencimento			varchar(100),
FOREIGN KEY (ID_Usuario) REFERENCES TB_Usuario(ID_Usuario)
);

drop tables TB_Endereco;
create table TB_Endereco(
ID_Endereco				int primary key auto_increment,
ID_Usuario				int,
NR_Cep					varchar(100),
DS_Endereco				varchar(200),
NR_Numero				varchar(10),
DS_Complemento			varchar(100),
DS_Bairro				varchar(100),
DS_Estado				varchar(100),
DS_Cidade				varchar(100),
DS_Referencia			varchar(100),
FOREIGN KEY (ID_Usuario) REFERENCES TB_Usuario(ID_Usuario)
);

drop tables TB_Pedido;
create table TB_Pedido(
ID_Pedido				int primary key auto_increment,
ID_Endereco_Entrega		int,
DS_Nota_Fiscal			varchar(100),
TB_Forma_Pagamento		varchar(20),
QTD_Parcela				int,
DT_Pedido				date,
DS_Situacao				varchar(100),
FOREIGN KEY (ID_Endereco_Entrega) REFERENCES TB_Endereco(ID_Endereco)
);

drop tables TB_Pedido_Item;
create table TB_Pedido_Item(
ID_Pedido_Item			int primary key auto_increment,
ID_Pedido				int,
ID_Produto				int,
QTD_Item				int,
VL_Valor_Final			decimal(8,2),
BT_Pagamento			bool,
FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto),
FOREIGN KEY (ID_Pedido) REFERENCES TB_Pedido(ID_Pedido)
);

drop tables TB_Admin;
create table TB_Admin(
ID_Adm					int primary key auto_increment,
NM_Adm					varchar(100),
DS_Email				varchar(100),
DS_Senha				varchar(100)
);

insert into TB_Admin(NM_Adm, DS_email, DS_Senha)
				value('admin', 'admin@admin.com.br', '1234');
                
select * from TB_Admin;

delete  from TB_Admin where ID_Adm = 2;

Select  
            ID_Adm      id,
            NM_Adm      nome,
            DS_email    email        
    from    TB_Admin 
    where   DS_Email    = 'admin@admin.com.br' 
    and     DS_Senha    = '1234';

drop database ecowoodsdb;
