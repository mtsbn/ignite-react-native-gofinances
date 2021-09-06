import styled from "styled-components/native";
import { StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;    
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Avatar = styled.Image`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: ${RFValue(17)}px;
`;
export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${StatusBar.currentHeight + RFValue(28)}px;
`;


export const FeatherIcon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;