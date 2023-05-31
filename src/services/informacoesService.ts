import api from './api';

export interface Informacoes {
    id: number;
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;

}

export async function updateInformacoes(informacoes:Informacoes): Promise<Informacoes> {
    const response = await api.put<Informacoes>('app/informacoes/1', informacoes);
    return response.data;
}

export async function getInformacoes(): Promise<Informacoes> {
    const response = await api.get<Informacoes>('app/informacoes/1');
    return response.data;
}
