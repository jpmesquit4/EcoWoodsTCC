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
    select  ID_Produto              id,
            ID_Categoria            categoria,
            NM_produto              produto,
		    DS_Descricao            descricao,
            VL_Preco                preco,
            DS_Tamanho              tamanho,
            NR_Estoque              estoque,
            ID_Adm                  adm
    from    TB_Produto;
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
            ID_Adm                  adm
    from    TB_Produto
    where   NM_Produto              like ?
    `;

    const [linhas] = await con.query(comando, [ `%${nome}%` ])
    return linhas;
}

export async function alterarProdutoPorID(id, produto) {
    const comando =
        `
        UPDATE  TB_Produto
        SET     ID_Categoria            = ?,
                NM_produto              = ?,
                VL_Preco                = ?,
                NR_Estoque              = ?,
                BT_Favorito             = ?
        WHERE   ID_Produto = ?
        `;

    const [resposta] = await con.query(comando, [produto.categoria, produto.produto, produto.preco, produto.estoque, produto.favorito, id])
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
        set     IMG_Produto     = ?
        where   ID_Produto      = ?;
    `

    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}



