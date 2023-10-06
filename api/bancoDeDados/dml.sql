use ecoWoodsDB;

-- 1° Cadastrar usuario
insert into TB_Usuario(NM_Usuario, NR_Telefone, DS_Email, DS_Senha, DT_Nascimento, DS_Genero)
					value(?,?,?,?,?,?);



-- 2° Login Usuario
Select NM_Usuario, DS_Senha from TB_Usuario where NM_Usuario = ? and DS_Senha = ?;



-- 3° Login ADM

insert into TB_Admin(NM_Adm, DS_email, DS_Senha)
			   value('admin', 'admin@admin.com.br', '1234');



-- 4° Cadastro Produto
insert into TB_Produto(ID_Categoria, NM_Produto, DS_Descricao, VL_Preco, NR_Estoque, BT_Favorito, img_prdouto)
				value(?, ?, ?, ?, ?, ?, ?);

--4.1° alterar imagem
update  TB_Produto
set     IMG_Produto     = '/storage/produto/asdasdasd.jpg'
where   ID_Produto      = 1;
                

-- 5° Consultar todos produto
select  ID_Produto           id,
        NM_Produto           nome,
        DS_Descricao         descricao,
        VL_Preco             preco,
        NR_Estoque           estoque,
        BT_Favorito          favorito
from    TB_Produto;  


-- 5.1° Consultar produtos por nome
select  ID_Produto           id,
        NM_Produto           nome,
        DS_Descricao         descricao,
        VL_Preco             preco,
        NR_Estoque           estoque,
        BT_Favorito          favorito
from    TB_Produto
where   NM_Produto          like '%a%';

-- 5.2° Consultar produtos por id
select  ID_Produto           id,
        NM_Produto           nome,
        DS_Descricao         descricao,
        VL_Preco             preco,
        NR_Estoque           estoque,
        BT_Favorito          favorito,
        img_produto          image,
from    TB_Produto
where   ID_Produto          = ?;  
       



-- 6° Editar Produto
update  TB_Produto
set     ID_Categoria = ?,
        NM_Produto = ?,
        DS_Descricao = ?,
        VL_Preco = ?,
        NR_Estoque = ?,
        BT_Favorito = ?,
        img_Produto = ?
where   ID_Produto = ?;




-- 7° Deletar Produto
Delete from TB_Produto where ID_Produto = ?


