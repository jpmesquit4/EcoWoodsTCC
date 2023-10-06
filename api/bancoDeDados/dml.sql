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
insert into TB_Produto(ID_Categoria, NM_Produto, DS_Descricao, VL_Preco, NR_Estoque, BT_Favorito)
				value(?, ?, ?, ?, ?, ?);
                

-- 5° Consultar produto
select * from TB_Produto
INNER JOIN TB_Produto_Imagem
ON TB_Produto.ID_Produto = TB_Produto_Imagem.ID_Produto;



-- 6° Editar Produto
update TB_Produto
set ID_Categoria = ?,
    NM_Produto = ?,
    DS_Descricao = ?,
    VL_Preco = ?,
    NR_Estoque = ?,
    BT_Favorito = ?
where ID_Usuario = ?;




-- 7° Deletar Produto
Delete from TB_Produto where ID_Produto = ?


