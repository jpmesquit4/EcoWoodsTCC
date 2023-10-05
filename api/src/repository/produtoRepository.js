import { con } from './connection.js';

export async function inserirProduto(categoria, produto, descricao, preco, estoque, favorito) {
    const comando = `insert into TB_Produto(ID_Categoria, NM_Produto, DS_Descricao, VL_Preco, NR_Estoque, BT_Favorito)
                                            value(?, ?, ?, ?, ?, ?);`


    const [linhas] = await con.query(comando, [categoria, produto, descricao, preco, estoque, favorito])
    return linhas[0];
}

export async function buscarTodosProdutos() {
    const comando =
        `
    select  ID_Categoria        categoria,
            NM_produto          produto,
		    DS_Descricao            descricao,
            VL_Preco              preco,
            NR_Estoque            estoque,
            BT_Favorito         favorito
    from    TB_Produto;
    `

    const [linhas] = await con.query(comando)
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
        
    `
}



