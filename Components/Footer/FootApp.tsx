import './FootStyle.css';

function FootApp() {
    return ( 
        <>
        <footer>
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
            <p>Follow us on social media:</p>
            <div>
                <a href="#" className="text-white hover:text-gray-400">Facebook</a>
                <a href="#" className="text-white hover:text-gray-400">Twitter</a>
                <a href="#" className="text-white hover:text-gray-400">Instagram</a>
            </div>
        </footer>
        </>
     );
}

export default FootApp;