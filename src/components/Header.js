// Import Assets
import profile from '../assets/matimu_ignatius_profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Matimu Ignatius" />

            <div className='header__content'>
                <h1>Hi, I'm Matimu Ignatius</h1>
                <p>Smart Contract/Solidity Developer Currently Buidling Blockchain Dapps...</p>
                <a href="mailto:matimu.f.ignatius@gmail.com" className='button'>Get In Touch</a>                
            </div>
        </section>
    );
}

export default Header;