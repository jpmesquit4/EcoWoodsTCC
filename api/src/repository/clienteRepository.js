import { con } from './connection.js';

export async function inserirCliente(usuario, telefone, email, senha, nascimento, genero) {
    const comando = `insert into TB_Usuario(NM_Usuario, NR_Telefone, DS_Email, DS_Senha, DT_Nascimento, DS_Genero)
                                      value(?,?,?,?,?,?);`


    const [linhas] = await con.query(comando, [usuario, telefone, email, senha, nascimento, genero])
    return linhas[0];
}


// export async function buscarTodosCliente() {
//     const comando =
//         `
//     select  id_cliente          id,
//             nm_cliente          nome,
// 		    ds_email            email,
//             ds_telefone         telefone,
//             ds_cpf              cpf,
//             ds_cnh              cnh    
//     from tb_clienteVeiculos;
//     `

//     const [linhas] = await con.query(comando)
//     return linhas;
// }