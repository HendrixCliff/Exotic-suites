
import {useNavigate, Outlet} from 'react-router-dom'
import { BasicallyFooter,Outletter,Basic,BasicFooter,BasicContainer,UnorderedList, List} from './components/styles/Container.tsx'
// Container,     NavButtons, 


const eventory = [
  {
    id: '/flights',
    route: 'Flights',
  },
  {
    id: '/suites',
    route: 'Suites'
  },
  {
    id: '/carrentals',
    route: 'Car Rentals',
  },
  {
    id: '/cruises',
    route: 'Cruises'
  },
  {
    id: '/blog',
    route: 'Blog',
  }
]
const footer = [
  {
    id:  '/aboutus',
    route: 'About Us',
  },
  {
    id: '/contactus',
    route: 'Contact Us',
  },
  {
    id: '/termsofuse',
    route: 'Terms of Use',
  },
  {
    id: '/privacypolicy',
    route: 'Privacy Policy'
  }
]

function App() {
  const navigate = useNavigate()
  return (
        <Basic>
          {/* <Container>
          <NavButtons to='/flights'>Flights</NavButtons>
          <NavButtons to='/'>Suites</NavButtons>
          <NavButtons to='/carrentals'>Car  Rentals</NavButtons>
          <NavButtons to='/cruises'>Cruises</NavButtons>
          </Container> */}
          <Outletter width={'100%'} height={'100%'}> <Outlet/></Outletter>
          <BasicContainer>
              <div>
                <h3>Exotic Getaways</h3>
                <h4> 
                Save70 was founded by three friends with<br/>
                 years of experience in the online tourism field. <br/>
                 We love to travel and to share our insights with<br/>
                  other vacation goers. After years of using tourism <br/>
                  websites, we noticed that often times it's possible<br/>
                   to save a lot of money with the help of efficient<br/>
                    and thorough price comparisons.
                </h4>
              </div>
              <BasicFooter>
                <h2>NEWSLETTER SIGN UP</h2>
                <h4>Offers in your inbox <br/>
                Subscribe to our weekly newsletter to get updates<br/> on our latest deals.</h4>
                <input type="email" placeholder="EMAIL ADDRESS"/>
                <button type="submit">GO</button>
              </BasicFooter>
              
             <BasicallyFooter top={'0em'}>
             <h2>QUICK LINKS</h2>
              <UnorderedList gap={'0'} >
                <ul>
                {eventory.map((client, index) => {
                  return  <List list={'.1em solid #000000'} onClick={()=> navigate(client.id)} key={index}>{client.route}</List> 
                })}
                </ul>
                <ul>
                  {footer.map((client, index)=> {
                    return <List list={'.1em solid #000000'} key={index} onClick={()=> navigate(client.id)}>{client.route}</List>
                  })}
                </ul>
              </UnorderedList >
             </BasicallyFooter>
              
              
          </BasicContainer>
        </Basic>
    
  )
}

export default App
