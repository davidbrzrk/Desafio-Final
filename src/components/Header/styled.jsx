import styled,{createGlobalStyle, css} from "styled-components";

<style>
@import url('https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300..800;1,300..800&display=swap');
</style>


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Platypi;
}
`
  const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Header = styled.header`
width: 15vw;
background-color:  #0B3F30;
display: flex;
align-items: center;
flex-direction: column;
font-size: 12px;
height: 100vh;

h2{
    font-size: 23px;
}

`

export const BoxLogo = styled.div`
height: 38%;
width: 15vw;
justify-content: space-evenly;
display: flex;
flex-direction: column;
align-items: center;
color: #EBD5B8;
img{
    width: 10vw;
    border-radius: 50%;
}
`

export const BoxMenu = styled.nav`
height: 34%;
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
 color: #EBD5B8;  
 text-decoration: none;
font-weight: 400;
}

`
export const BoxIcon = styled.div`
width: 15vw;
height: 18%;
${center}
justify-content: space-evenly;
flex-direction: column;
transform: translateY(50px);
`