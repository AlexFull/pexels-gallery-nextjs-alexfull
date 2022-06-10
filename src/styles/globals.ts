import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

   :root {
     --globalPadding: 18px;
   }

    html {
      box-sizing: border-box;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      
    }

    *, *:before, *:after {
      box-sizing: inherit;
    
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
      margin: 0;
      padding: 0;
      text-rendering: optimizeLegibility;
    }

    ol, ul {
      list-style: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }
    
    p {
      margin-bottom: 16px;
      font-weight: 200;
    }

    h1, h2, h3, h4, h4, h6 {
     line-height: 1;
     font-weight: 700;
    }

`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
`;

export const VideoWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    video {
        object-fit: cover;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }

    svg {
        width: 100%;
    }
`;

export const VideoWrapperContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    color: white;
    flex-direction: column;

    h1 {
        color: #fff;
        font-size: 14rem;
        font-weight: 900;
        letter-spacing: -0.5rem;
    }
`;

export const ImagesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const GalleryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: #121212;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 70px 0;
`;

export const Cta = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-weight: 400;
    font-size: 18px;
    border: 1px solid white;
    width: fit-content;
    margin: 30px auto;
    padding: 14px 36px;
    border-radius: 4px;

    &:hover {
        text-decoration: underline;
    }
`;
