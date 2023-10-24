import { NavLink } from 'react-router-dom';

const Footer = ({loggedIn}) => {

    const classes = {
        "container": "fixed bottom-0 left-0 text-white z-20 w-screen py-[2px] sm:px-[20px] px-[10px] bg-[#00000070] flex justify-between",
        "tx": "text-xs text-red-600 hover:text-red-800 font-bold",
        "lgCon": "w-fit flex justify-end font-bold text-sm text-center",
        "lgImg": "h-5 w-5 mr-2 float-left rounded-lg"
    }

    const txt = {
        "btn": "Delete Account",
        "li": "/deleteProfile",
        "imgAlt": "Logo",
        "img": "https://res.cloudinary.com/de49puo0s/image/upload/v1697884155/gloaysc8nlrnimvcxwmi.jpg"
    }

    return ( 
        <div className={classes.container}>
            {loggedIn && <NavLink to={txt.li} className={classes.tx}>{txt.btn}</NavLink>}
            <div className={classes.lgCon}>
                    <img src={txt.img} className={classes.lgImg} alt={txt.imgAlt}/>
             </div>
        </div>
     );
}
 
export default Footer;