import { con } from './connection.js';

export async function inserirProduto(produto) {
    const comando = `insert into TB_Produto(ID_Adm, NM_Produto, DS_Descricao, VL_Preco, NR_Estoque, ID_Categoria, DS_Tamanho)
                                            value(?, ?, ?, ?, ?, ?, ?);`


    const [resposta] = await con.query(comando, [produto.adm, produto.nome, produto.descricao, produto.preco, produto.estoque, produto.categoria, produto.tamanhos])
    produto.id = resposta.insertId;

    return produto;
}

export async function buscarTodosProdutos() {
    const comando =
        `
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
        TB_Produto.ID_Categoria = TB_Categoria.ID_Categoria
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function buscarPorId(id) {
    const comando =
        `
    select  ID_Produto              id,
            ID_Categoria            categoria,
            NM_produto              produto,
		    DS_Descricao            descricao,
            VL_Preco                preco,
            DS_Tamanho              tamanho,
            NR_Estoque              estoque,
            img_produto             imagem
    from    TB_Produto
    where   ID_Produto = ?
    `;

    const [linhas] = await con.query(comando, [id])
    return linhas[0];
}

export async function buscarPorNome(nome) {
    const comando =
        `
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
    where   NM_Produto              like ?
    `;

    const [linhas] = await con.query(comando, [ `%${nome}%` ])
    return linhas;
}

export async function buscarPorCategoria(categoria) {
    const comando =
        `
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
        TB_Produto.ID_Categoria = TB_Categoria.ID_Categoria
	where 
		NM_Categoria = ?;
    `;

    const [linhas] = await con.query(comando, [categoria])
    return linhas;
}

export async function consultarProdutos(){

    let comando=`
    select  ID_Produto              id,
    ID_Categoria                    categoria,
    NM_produto                      produto,
    DS_Descricao                    descricao,
    VL_Preco                        preco,
    DS_Tamanho                      tamanho,
    NR_Estoque                      estoque,
    ID_Adm                          adm,
    img_produto                     imagem
    from    TB_Produto
    where   ID_Categoria            = 1
`
    const [resp] = await con.query(comando,[]);

    return resp;
}

export async function alterarProdutoPorID(id, produto) {
    const comando =
        `
        UPDATE  TB_Produto
        SET     ID_Categoria            = ?,
                NM_produto              = ?,
                VL_Preco                = ?,
                NR_Estoque              = ?
        WHERE   ID_Produto = ?
        `;

    const [resposta] = await con.query(comando, [produto.categoria, produto.produto, produto.preco, produto.estoque, id])
    return resposta.affectedRows;
}

export async function removerProduto(id) {
    const comando =
        `
    DELETE 
    from TB_Produto   
    where ID_Produto          = ? `;

    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}

export async function alterarImagem(imagem, id) {
    const comando = `   
        update  TB_Produto
        set     img_produto     = ?
        where   ID_Produto      = ?;
    `

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}

export async function consultarPreco(id){
   
    let comando=`
    SELECT TP.ID_Produto as id, TP.VL_Preco as preco
    FROM TB_Produto TP
    INNER JOIN Tabela_Preco TPrecos ON TP.ID_Produto = TPrecos.ID_Produto
    WHERE TP.ID_Produto = ?;   
    `
    const [resp] = await con.query(comando,[id]);
    return resp;
}



