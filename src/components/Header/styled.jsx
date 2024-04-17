import styled,{createGlobalStyle, css} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
  const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Header = styled.header`
width: 15vw;
background-color: #4A5051;
display: flex;
align-items: center;
flex-direction: column;

`

export const BoxLogo = styled.div`
height: 38vh;
width: 15vw;
justify-content: space-evenly;
display: flex;
flex-direction: column;
align-items: center;
color: white;
img{
    width: 10vw;
    border-radius: 50%;
}
`

export const BoxMenu = styled.nav`
height: 38vh;
width: 15vw;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
li{
    list-style: none;
    border-bottom: solid 1px white;
    height: 12.5vh;
    width: 15vw;
    ${center}
}
li:nth-child(1){
   border-top: solid 1px white; 
}
a{
 color: white;  
 text-decoration: none;
}

`
export const BoxIcon = styled.div`
width: 15vw;
height: 28vh;
${center}
justify-content: space-evenly;
flex-direction: column;
`