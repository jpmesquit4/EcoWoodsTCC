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
    where   ID_Categoria            = ?
    `;

    const [linhas] = await con.query(comando, [categoria])
    return linhas;
}

export async function consultarProdutos(filtro){

    let comandoBase=`    
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
    where   ID_Categoria            = 1
`

    let comandoCondicao=``;
    if(filtro.semEstoque){

        comandoCondicao=comandoCondicao+` and nr_qntdEstoque=0 `
    }  
    if(filtro.salaDeEstar){

        comandoCondicao=comandoCondicao+` and ID_Categoria=1 `
    }                        
    
    if(filtro.cozinha){

        comandoCondicao=comandoCondicao+` and ID_Categoria=2 `;
    }

    if(filtro.closet){

        comandoCondicao=comandoCondicao+` and ID_Categoria=3 `
    }
    
    if(filtro.escritorio){

        comandoCondicao=comandoCondicao+` and ID_Categoria=4 `;
    }

    if(filtro.banheiro){

        comandoCondicao=comandoCondicao+` and ID_Categoria=5 `;
    }

    if(filtro.lavanderia){

        comandoCondicao=comandoCondicao+` and ID_Categoria=6 `;
    }

    let comandoOrder=`ORDER BY `;
    let contarPosicoes=0;
    let colunas=[];

    if(filtro.menorEstoque){

        colunas[contarPosicoes]=`NR_Estoque asc`;
        comandoCondicao=comandoCondicao+` and NR_Estoque!=0 `;

        contarPosicoes=contarPosicoes+1;
    }


    for(let item of colunas){

        if(item!==colunas[colunas.length-1] && item!=undefined){

            comandoOrder=comandoOrder+item+','
        }

        else{

            comandoOrder=comandoOrder+item
        }
    }

    // Caso nenhum dos valores anteriores seja true, seta o comandoOrder como sendo vazio para não dar erro
    if(comandoOrder=='ORDER BY '){

        comandoOrder='';
    }

    // #Filtro de quantidade em estoque não pode estar ativo junto do filtro de estoque=0`;
    let command=comandoBase+comandoCondicao+comandoOrder;

    const [resp] = await con.query(command,[filtro.semEstoque, filtro.salaDeEstar, filtro.cozinha, filtro.closet, filtro.escritorio, filtro.banheiro, filtro.lavanderia, filtro.menorEstoque]);

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



