import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import swimming from '../../../assets/qZone1.png';
import swimming1 from '../../../assets/qZone2.png';
import swimming2 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold mb-7'>Login With</h2>
            <div>
                <div>
                    <button className="btn btn-outline font-bold w-full mb-4"><FcGoogle className='text-xl'></FcGoogle>Login With Google</button>
                </div>
                <div>
                    <button className="btn btn-outline font-bold w-full"><BsGithub className='text-xl'></BsGithub>Login With Github</button>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold mb-5 mt-7'>Find Us On</h2>
                <div>
                    <a href="" className='flex items-center font-medium	text-xl border rounded-t-md py-2'><FaFacebook className="mr-3 w-6 h-6 ml-3"></FaFacebook> Facebook</a>
                </div>
                <div>
                    <a href="" className='flex items-center font-medium	text-xl border  border-y-0  py-2'><FaTwitter className="mr-3 w-6 h-6 ml-3"></FaTwitter> Twitter</a>
                </div>
                <div>
                    <a href="" className='flex items-center font-medium	text-xl rounded-b-md border py-2'><FaInstagram className="mr-3 w-6 h-6 ml-3"></FaInstagram> instagram</a>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold mb-5 mt-7'>Q Zone</h2>
                <div>
                    <img src={swimming} alt="" />
                </div>
                <div>
                    <img src={swimming1} alt="" />
                </div>
                <div>
                    <img src={swimming2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;