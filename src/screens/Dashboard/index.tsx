import React from 'react';
import HighlightCard from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
    Container,
    Header,
    UserInfo,
    UserName,
    Avatar,
    User,
    UserGreeting,
    UserWrapper,
    FeatherIcon,
    HighlightCards,
    Transactions,
    Title,
    TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: 'Venda de sites',
            amount: 'R$ 12.259,00',
            date: '03/04/2020',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            }
        },
        {
            id: '2',
            type: 'negative',
            title: 'Hamburguer Pizzy',
            amount: 'R$ 59,00',
            date: '03/04/2020',
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            }
        },
        {
            id: '3',
            type: 'negative',
            title: 'Aluguel do apartamento',
            amount: 'R$ 1.200,00',
            date: '03/04/2020',
            category: {
                name: 'Casa',
                icon: 'home'
            }
        },
    ]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Avatar
                            source={{ uri: 'https://avatars.githubusercontent.com/u/37047803?v=4' }}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Matheus</UserName>
                        </User>
                    </UserInfo>
                    <FeatherIcon name='power' />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    title={'Entradas'}
                    amount={'R$ 17.400,00'}
                    lastTransaction={'Última entrada dia 14 de abril'}
                    type={'up'} />
                <HighlightCard
                    title={'Saídas'}
                    amount={'R$ 1.259,00'}
                    lastTransaction={'última saída dia 03 de abril'}
                    type={'down'} />
                <HighlightCard
                    title={'Total'}
                    amount={'R$ 16.141,00'}
                    lastTransaction={'01 a 16 de abril'}
                    type={'total'} />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionsList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
        
                {/* <TransactionCard
                    data={data[0]}
                /> */}
            </Transactions>
        </Container >
    )
}