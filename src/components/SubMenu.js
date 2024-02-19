import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 60px;
    text-decoration: none;
    font-size: 22px;

    &:hover{
        background #252831;
        cursor: pointer;
    }

`
const SidebarLabel = styled.span`
    margin-left: 16px;    
`;

const SidebarLinkContent = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 60px;
    text-decoration: none;
    font-size: 22px;

    &:hover{
        background #252831;
        cursor: pointer;
    }  
`;

const Icon = styled(Link)`
font-size: 26px;
display: flex;
color: white;
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    `

const SubMenu = ({item}) => {
    const [subNav, setsubNav] = useState(false)

    const showsubNav = () => setsubNav(!subNav)
    return(
        <>
        <SidebarLink to={item.path} onClick={item.subNav && showsubNav} >
            <div>
            <SidebarLinkContent to={item.path}>
                <Icon>{item.icon}</Icon>
                <SidebarLabel>{item.title}</SidebarLabel>
            </SidebarLinkContent>
            </div>
            <div>
                {item.subNav && subNav
                ? item.iconOpened 
                : item.subNav
                ? item.iconClosed 
                : null}
            </div>
        </SidebarLink>
        {subNav && item.subNav.map((item, index)=>{
            return(
                <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            )
        })}
        </>
    )
}

export default SubMenu;