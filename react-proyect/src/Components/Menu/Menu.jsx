import { MenuList } from './MenuList'
import { useState} from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './Menu.css'
import { UserWidget } from '../UserWidget/UserWidget'



export const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)


    const handleClose = () => {
        setShowMenu(false)
    }

    return (
        <div className={showMenu ? "menu-active" : ""}> 


            <div className='menu__backdrop' onClick={handleClose}>


                <MenuList close={handleClose}/>

                <UserWidget />

                <div className='cart-widget-container'>
                    <CartWidget className='cart-widget'/>
                </div>





            </div>
    
            
        </div>
    )
}