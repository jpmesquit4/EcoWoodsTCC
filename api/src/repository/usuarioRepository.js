import { con } from './connection.js';

export async function login(email, senha) {
    const comando = `
    Select  ID_Adm      id,
            NM_Adm      nome,
            DS_email    email        
    from    TB_Admin 
    where   DS_Email    = ? 
    and     DS_Senha    = ?;
    `

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
 
}