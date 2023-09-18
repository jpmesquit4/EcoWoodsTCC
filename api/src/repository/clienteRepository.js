import { con } from './connection.js';

export async function inserirCliente(nome, email, telefone, cpf, cnh) {
    const comando = `INSERT INTO tb_clienteVeiculos (nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
	                                         VALUES (?, ?, ?, ?, ?)`


    const [linhas] = await con.query(comando, [nome, email, telefone, cpf, cnh])
    return linhas[0];
}


export async function buscarTodosCliente() {
    const comando =
        `
    select  id_cliente          id,
            nm_cliente          nome,
		    ds_email            email,
            ds_telefone         telefone,
            ds_cpf              cpf,
            ds_cnh              cnh    
    from tb_clienteVeiculos;
    `

    const [linhas] = await con.query(comando)
    return linhas;
}