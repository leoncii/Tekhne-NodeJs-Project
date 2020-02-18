import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
        width: 100%;
    /* height: 75px; */
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.8296067312862097) 0%, rgba(106,9,121,1) 50%, rgba(0,0,0,1) 100%);
    display: grid;
    grid-template-columns: 160px 1fr ;
    grid-template-rows: 60px;
    position: fixed;
    top: -20px;
    left: 0;
    right: 0;
    /* height: 75px; */
`

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;

`
export const Li = styled.li`
     margin-top: 13px;
`
export const A = styled.a`
    color: white;
    text-decoration: none;
    font-size: 24px;
`
    //  .navigation-menu ul{
    //         list-style: none;
    //         padding: 0;
    //         margin: 0;
    //         display: grid;
    //         grid-template-columns: 1fr 1fr 1fr;
    //         align-items: center;
    //         justify-items: center;
    //     }
    //     .navigation-menu ul li{
    //         margin-top: 13px;
    //     }
    //     .navigation-menu ul a{
    //         color: white;
    //         text-decoration: none;
    //         font-size: 24px;
    //     }