import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListaPortfolio.module.css";
import { Portfolio, getPortfolios, deletePortfolio } from "../../../services/portfolioService";


const ListaPortfolio: React.FC = () => {
    const navigate = useNavigate();

    const [portfolios , setPortfolios] = React.useState<Portfolio[]>([/*{
        id:1,
        link: 'https://academy.comeialabs.com.br/',
        image:'https://picsum.photos/300/200?random=1',
        titulo: 'Portfólio 1',
    },
    {
        id:2,
        link: 'https://academy.comeialabs.com.br/',
        image:'https://picsum.photos/300/200?random=2',
        titulo: 'Portfólio 2',
    },
    {
        id:3,
        link: 'https://academy.comeialabs.com.br/',
        image:'https://picsum.photos/300/200?random=3',
        titulo: 'Portfólio 3',
    }*/]);

    const fetchPortfolios = async () => {
        try {
            const portfolios = await getPortfolios();
            setPortfolios(portfolios);
        } catch (error) {
            console.log('Erro ao buscar portfolios', error);            
        }
    }

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const handleEdite = async (portfolio: Portfolio) => {
        navigate("/portfolio/cadastro", { state: portfolio });
    };

    const handleDelete = async (id: number) => {
        try {
            await deletePortfolio(id);
            fetchPortfolios();
            alert('Portfolio excluído com sucesso!');
        } catch (error) {
            console.log('Erro ao excluir portfolio', error);
            alert("Ocorreu um erro ao excluir o portfolio");
        }
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Link</th>
                    <th>Imagem</th>
                    <th>Título</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {portfolios.map((portfolio, index) => (
                    <tr key={index}>
                    <td><a href={portfolio.link} target="_blank" rel="noreferrer">{portfolio.link}</a></td>
                    <td><img src={portfolio.image} alt={portfolio.image} className={styles.image} /></td>
                    <td>{portfolio.titulo}</td>
                    <td>
                            <button onClick={() => handleEdite(portfolio)}>Editar</button>
                            <button onClick={() => handleDelete(portfolio.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default ListaPortfolio;


/*import React, {useState} from "react";

import styles from "./ListaPortfolio.module.css";


interface Portfolio {
    link: string;
    image: string;
    titulo: string;
};


const ListaPortfolio: React.FC = () => {

    const [portfolio, setPortfolio] = useState<Portfolio[]>([
        {
            link: 'https://academy.comeialabs.com.br/',
            image:'https://picsum.photos/300/200?random=1',
            titulo: 'Portfólio 1',
        },
        {
            link: 'https://academy.comeialabs.com.br/',
            image:'https://picsum.photos/300/200?random=2',
            titulo: 'Portfólio 2',
        },
        {
            link: 'https://academy.comeialabs.com.br/',
            image:'https://picsum.photos/300/200?random=3',
            titulo: 'Portfólio 3',
        }
    ]); 

    const handleEdit = (index: number) => {
        // lógica para lidar com a edição do item de índice "index"
    };
    
    const handleDelete = (index: number) => {
        // lógica para lidar com a edição do item de índice "index"
        //setPortfolio(portfolio.filter((_, i) => i !== index))
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>    
                    <th>Imagem</th> 
                    <th>Link</th> 
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {portfolio.map((itemPortfolio, index) => (
                <tr key={index}>
                    <td>{itemPortfolio.titulo}</td>
                    <td><img src={itemPortfolio.image} alt={itemPortfolio.titulo} className={styles.image} /></td>
                    <td><a href={itemPortfolio.link} target="_blank" rel="noreferrer">{itemPortfolio.link}</a></td>
                    <td>
                    <button onClick={() => handleEdit(index)}>Editar</button>
                    <button onClick={() => handleDelete(index)}>Excluir</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default ListaPortfolio;*/