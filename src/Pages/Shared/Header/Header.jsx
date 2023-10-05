import moment from 'moment/moment';
import Logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <img className='mb-5' src={Logo} alt="" />
                <p className='text-[#706F6F] font-[18px] text-[18px] text-center'>Journalism Without Fear or Favour</p>
                <p className='font-bold text-center'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
        </div>
    );
};

export default Header;