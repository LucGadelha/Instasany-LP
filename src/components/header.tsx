import React from 'react'
import Logomg from '../../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import SearchIcon from '../../assets/icon-search.svg'
import IconUser from '../../assets/icon-user.svg'
import GridContainer from './grid'

const arrMenu = [
    'Início',
    'Benefícios',
    'Pra quem é o curso?',
    'Preços promocionais',
    'Sobre',
]

const Header = () => {
    const activeStyled = 'bg-green-actived text-opacity-100 rounded-full'
  return (
    <header className='relative w-full h-24 bg-green-primary flex items-center'>
        <GridContainer className='flex items-center justify-between'>
                <Image src={Logomg} alt="Logo"/>
                <div className='flex items-center gap-20'>
                    <nav className='flex gap-2'>
                    {
                        arrMenu.map((item, index) => (
                        <Link href='#' key={index} className={`px-3 py-2 text-white text-opacity-40 hover:text-opacity-100 transition-all ${index === 0 ? activeStyled : ''}`} >{item}</Link>))
                    }
                    </nav>
                    <div className='flex items-center gap-6'>
                        <button>
                            <Image src={SearchIcon} alt="Icon Search"/>
                        </button>
                        <button className='flex items-center gap-2'>
                            <Image src={IconUser} alt="Icon User"></Image>
                            <span className='text-white font-medium'>Fazer Login</span>
                        </button>
                    </div>
                </div>
        </GridContainer>
    </header>
  )
}

export default Header
