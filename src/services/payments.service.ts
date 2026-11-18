import { prisma } from "../config/prisma";

export async function criarPagamento(valor: number){

    if(!Number.isInteger(valor) || valor <= 0){
        throw new Error('Valor igual a zero ou diferente de zero');
    }

    const trintaMinutos = 30 * 60 * 1000;
    const dataExpiracao = new Date(Date.now() + trintaMinutos);

    const salvar = await prisma.payment.create({
        data: {
            valor: valor,
            dataExpiracao: dataExpiracao
        }
    })

    return salvar;

}
    