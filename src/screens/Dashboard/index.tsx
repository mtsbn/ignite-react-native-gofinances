import React from 'react';
import HighlightCard from '../../components/HighlightCard';
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
} from './styles';

export function Dashboard() {
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
                    type={'up'}/>
                <HighlightCard
                    title={'Saídas'}
                    amount={'R$ 1.259,00'}
                    lastTransaction={'última saída dia 03 de abril'} 
                    type={'down'}/>
                <HighlightCard
                    title={'Total'}
                    amount={'R$ 16.141,00'}
                    lastTransaction={'01 a 16 de abril'} 
                    type={'total'}/>
            </HighlightCards>
        </Container >
    )
}