
import {useNavigate} from 'react-router-dom'
 import {UnorderedList,List} from '../components/styles/Container.tsx'
export default function AboutUs() {
    const navigate = useNavigate()
    const eventory = [
        {
            id: '/',
            route: 'Home',
        },
        {
            id: '/blog',
            route: 'Blog',
        },
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
      ] 
     

    return(
        <div>
            <h3>About Us</h3>
            <UnorderedList gap={'1.5em'}>
                {eventory.map((client, index) => {
                  return  <List list={'none'}  onClick={()=> navigate(client.id)} key={index}>{client.route}</List> 
                })}
            </UnorderedList>
        </div>
    )
}