import ReactLogo from '../logo.svg';

export default function Header() {
    return ( <header>
        <h1> Les composants React </h1> 
        <img src = { ReactLogo }
        alt = "Logo react" />
        </header>
    );
}