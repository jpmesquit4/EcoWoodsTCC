import { con } from './connection.js';

export async function inserirCliente(usuario) {
     const comando = `insert into TB_Usuario(NM_Usuario, DS_Email, DS_Senha, DT_Nascimento, DS_Genero)
                                       value(?,?,?,?,?);`


     const [resposta] = await con.query(comando, [usuario.usuario, usuario.email, usuario.senha, usuario.nascimento, usuario.genero])
     usuario.id = resposta.insertId;

     return usuario;
}

export async function inserirInfoEndereco(endereco, usuario) {
    const comando = `insert into TB_Endereco(ID_Usuario, DS_Cep, DS_Rua, DS_Numero, DS_Bairro, DS_Estado, DS_Cidade)
                                      value(?,?,?,?,?,?,?);`


    const [resposta] = await con.query(comando, [usuario.id, endereco.cep, endereco.rua, endereco.numero, endereco.bairro, endereco.estado, endereco.cidade])

    return usuario;
}

export async function listarEnderecos(usuario) {
    const comando = `
        select  ID_Usuario as user,
                DS_Cep as cep,
                DS_Rua as rua,
                DS_Numero as numero,
                DS_Bairro as bairro,
                DS_Estado as estado,
                DS_Cidade as cidade
        from TB_Endereco
        where ID_Usuario = ?;                  
    `


    const [linhas] = await con.query(comando, [usuario.id])
    return linhas[0];
}


export async function inserirInfoCartao(cartao, usuario) {
    const comando = `insert into TB_Cartao(ID_Usuario, NM_Titular, DS_Cartao, DS_CVV, DS_Vencimento)
                                      value(?,?,?,?,?);`


    const [resposta] = await con.query(comando, [usuario.id, cartao.titular, cartao.cartao, cartao.cvv, cartao.vencimento])

    return usuario;
}

export async function listarCartaoPorID(id) {
    const comando = 
    `
    SELECT  ID_Usuario as usuario, NM_Titular as titular, DS_Cartao as numero, DS_CVV as cvv, DS_Vencimento as vencimento
    FROM    TB_Cartao
    where   ID_Usuario = ?
    `;

    const [linhas] = await con.query(comando, [id])
    return linhas[0];
 
}

export async function loginCliente(usuario, email, senha) {
    const comando = 
    `
    SELECT ID_Usuario AS id, NM_Usuario AS nome, DS_Email AS email
    FROM TB_Usuario
    WHERE NM_Usuario = ?   
    AND DS_Email = ?  
    AND DS_Senha = ?   
    `;

    const [linhas] = await con.query(comando, [usuario, email, senha])
    return linhas[0];
 
}

export async function listarInfoClientes(id) {
    const comando = 
    `
    SELECT  ID_Usuario AS id,
            NM_Usuario AS nome,
            DS_Email AS email,
            DT_Nascimento as nascimento,
            DS_Genero as genero
    FROM    TB_Usuario
    where   id_Usuario = ?
    `;

    const [linhas] = await con.query(comando, [id])
    return linhas[0];
 
}

export async function alterarInfo(id, usuario) {
    const comando =
        `
        UPDATE  TB_Usuario
        SET     NM_Usuario              = ?,
                DS_Email                = ?,
                DT_Nascimento           = ?,
                DS_Genero               = ?,
                ID_Usuario              = ?
        WHERE   ID_Usuario = ${id}
        `;

    const [resposta] = await con.query(comando, [usuario.nome, usuario.email, usuario.nascimento, usuario.genero, id])
    return resposta.affectedRows;
}

