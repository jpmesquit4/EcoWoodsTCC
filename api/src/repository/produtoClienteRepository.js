import { con } from './connection.js';

export async function inserirQuantidadeItem(quantidade) {
    const comando = `insert into TB_Pedido_Item(ds_quantidade_item)
                                            value(?);`


    const [resposta] = await con.query(comando, [quantidade.quantidade])
    quantidade.id = resposta.insertId;

    return quantidade;
}

export async function listarPedidoItem() {
    const comando =
        `
        SELECT ds_quantidade_item as quantidade
        from TB_Pedido_Item
            
    `

    const [linhas] = await con.query(comando)
    return linhas[0];
}

export async function deletarPedidoItem() {
    const comando =
        `
        DELETE FROM TB_Pedido_Item WHERE ID_Pedido_Item = 1;
            
        `

    const [resposta] = await con.query(comando, [])
    return resposta.affectedRows;
}

export async function listarNoCarrinho(carrinho) {
    const comando = `
        SELECT
            Carrinho.ID_Carrinho,
            Produto.ID_Produto,
            Produto.NM_Produto,
            Produto.DS_Descricao,
            Produto.VL_Preco,
            Produto.DS_Tamanho,
            Produto.NR_Estoque,
            Produto.img_produto,
            Pedido_Item.ID_Pedido_Item,
            Pedido_Item.ds_quantidade_item
            FROM
            TB_Carrinho Carrinho
        INNER JOIN
            TB_Produto Produto ON Carrinho.ID_Produto = Produto.ID_Produto
        INNER JOIN
            TB_Pedido_Item Pedido_Item ON Carrinho.ID_Pedido_Item = Pedido_Item.ID_Pedido_Item
        where 
            Carrinho.ID_Carrinho = ?
     ;
     `


    const [resposta] = await con.query(comando, [carrinho.id])

    return resposta;
}   

export async function removerTabelaPedidoItem() {
    const comando =
        `
        drop table TB_Pedido_Item;
            
        `

    const [resposta] = await con.query(comando, [])
    return resposta.affectedRows;
}

export async function criarTabelaPedidoItem() {
    const comando =
        `
        CREATE TABLE TB_Pedido_Item (
            ID_Pedido_Item INT PRIMARY KEY AUTO_INCREMENT,
            ds_quantidade_item varchar(20)
        ); 
            
        `

    const [resposta] = await con.query(comando, [])
    return resposta.affectedRows;
}

