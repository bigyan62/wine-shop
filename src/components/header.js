import React from 'react';


const Header = () => {

  return (
    <header className='site-header'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='banner-log'>
                        <a href='#' title=''>
                            <img src='' alt='Logo'/>
                        </a>
                    </div>
                </div>
                <div className='col'>
                    <div className='nav'>
                        <div className='overwrap'>
                            <ul className='primary-menu'>
                                <li><a href="" title=''>Home</a></li>
                                <li><a href="" title=''>winery</a></li>
                                <li><a href="" title=''>wines</a></li>
                                <li><a href="" title=''>contact</a></li>
                                <li><a href="" title=''>shop</a></li>
                                <li><a href="" title=''>experiences</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='min-cart'>
                    <i></i>
                </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header