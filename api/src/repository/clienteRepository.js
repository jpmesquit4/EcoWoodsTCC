import { con } from './connection.js';

export async function inserirCliente(usuario) {
     const comando = `insert into TB_Usuario(NM_Usuario, DS_Email, DS_Senha, DT_Nascimento, DS_Genero)
                                       value(?,?,?,?,?);`


     const [resposta] = await con.query(comando, [usuario.usuario, usuario.email, usuario.senha, usuario.nascimento, usuario.genero])
     usuario.id = resposta.insertId;

     return usuario;
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