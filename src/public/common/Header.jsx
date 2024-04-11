import React from 'react'
import MiniLogo from '../../assets/miniLogo.png'

const Header = () => {
  return (
    <div className='flex justify-between px-10 bg-mainOrange'>
        <div>
            <img src={MiniLogo} alt="" className='' />
        </div>

        <div className='flex items-center justify-between gap-14 text-xl font-semibold'>
            <h1>Accueil</h1>
            <h1>Produits</h1>
            <h1>Partenaires</h1>
            <h1>Contact</h1>
            <h1 className=' text-mainOrange bg-mainBlack py-2 px-5 rounded-xl'>Commandez</h1>
        </div>
    </div>
  )
}

export default Header