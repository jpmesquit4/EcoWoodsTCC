drop table TB_Categoria;
create table TB_Categoria(
ID_Categoria		int primary key auto_increment,
NM_Categoria		varchar(100)
);

drop table TB_Produto;
create table TB_Produto(
ID_Produto			int primary key auto_increment,
ID_Categoria		int,
NM_Produto			varchar(100),
DS_Descricao		varchar(200),
VL_Preco			decimal(8,2),
NR_Estoque			int,
BT_Favorito			bool,
FOREIGN KEY (ID_Categoria) REFERENCES TB_Categoria(ID_Categoria)
);

drop table TB_Tamanho_Produto;
create table TB_Tamanho_Produto(
ID_Tamanho			int primary key auto_increment,
ID_Produto			int,
DS_Tamanho			varchar(100),
FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto)
);

drop table TB_Produto_Imagem;
create table TB_Produto_Imagem(
ID_Imagem_produto			int primary key auto_increment,
ID_Produto					int,
IMG_Produto					varchar(100),
FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto)
);

drop table TB_Carrinho;
create table TB_Carrinho(
ID_Carrinho			int primary key auto_increment,
ID_Produto			int,
FOREIGN KEY (ID_Produto) REFERENCES TB_Produto(ID_Produto)
);

drop table TB_Usuario;
create table TB_Usuario(
ID_Usuario				int primary key auto_increment,
NM_Usuario				varchar(200),
NR_Telefone				varchar(100),
DS_Email				varchar(100),
DS_Senha				varchar(100),
DT_Nascimento			date,
DS_Genero				varchar(100)
);

drop table TB_Cartao;
create table TB_Cartao(
ID_Cartao				int primary key  auto_increment,
ID_Usuario				int,
NM_Titular				varchar(100),
NR_Cartao				varchar(100),
DS_CVV					int,
DS_Vencimento			varchar(100),
FOREIGN KEY (ID_Usuario) REFERENCES TB_Usuario(ID_Usuario)
);

drop table TB_Endereco;
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

drop table TB_Pedido;
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

drop table TB_Pedido_Item;
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

drop table TB_Admin;
create table TB_Admin(
ID_Adm					int primary key auto_increment,
NM_Adm					varchar(100),
DS_Senha				varchar(100)
);