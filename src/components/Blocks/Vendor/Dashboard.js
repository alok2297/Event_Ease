import React, { useState, useContext, useEffect } from 'react'
import Sidebar from './Sidebar'
import { Container } from 'components/Elements/Container'
import { AuthContext } from '../Authentication/AuthContext'
import { useNavigate } from 'react-router-dom'
import Information from './Info'
import { Projects } from './Projects'
import { Menu } from './Menu'
import { Banquets } from './Banquets'
import { Bookings } from './Bookings'
import "./Dashboard.css"

const Dashboard = () => {
  const [page, setPage] = useState('information');
  const { userAuthType } = useContext(AuthContext);
  const navigate = useNavigate();

  const renderPage = () => {
    switch (page) {
      case 'information':
        return <Information />;
      case 'projects':
        return <Projects />;
      case 'menu':
        return <Menu />;
      case 'banquets':
        return <Banquets />;
      case 'bookings':
        return <Bookings />;
      default:
        return <Information />;
    }
  };
  
  useEffect(() => {
    if ((localStorage.getItem('role')) !== "Vendor") {
      navigate('/vendor-login');
    }
  }, [userAuthType, navigate]);

  return (
    <Container children={
      <div className='vendor-dashboard'>
        {
          userAuthType === 'Vendor' &&
          <React.Fragment>
            <div className='sidebar-cntr'>
              <Sidebar setPage={setPage} selectedPage={page}/>
            </div>
            <div className='component-renderer'>
              {renderPage()}
            </div>
          </React.Fragment>
        }
      </div>
    }>
    </Container>
  )
}

export default Dashboard;
