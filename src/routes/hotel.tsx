
import  {Outletter,Forming,Cover,Content,Container,Displayer,NavButtons,Hoo,Label,InnerInputText,InputText,InnerForm, Button ,SuiteCover} from 
'../components/styles/Container.tsx'
import  {suites} from '../utilities/data.ts'
import SuiteCase from '../suitecase.tsx'



export default function Hotel() {
    
    const guests = [1,2,3,4,5,6]
    const rooms = [1,2,3,4]



    return(
        <Outletter  width={'100%'} height={'80em'}>
             <Displayer>
                <Container>
                    <NavButtons to='/flights'>Flights</NavButtons>
                    <NavButtons to='/'>Suites</NavButtons>
                    <NavButtons to='/carrentals'>Car  Rentals</NavButtons>
                    <NavButtons to='/cruises'>Cruises</NavButtons>
                </Container>
                <Content>
                   <SuiteCover src="/images/island2.jpg"/>
                </Content>
            </Displayer>
                 
                    <Forming>
                   <Cover>
                    <Hoo top={'0em'}>Search Suites</Hoo>
                    <InnerInputText>
                    <Label id='stay'>Staying In</Label>
                    <InputText width={'70%'} id='stay' type="text" placeholder="City or airport code"/>
                    </InnerInputText>
                    
                    <InnerForm>

                        
                        <div>
                        <Label id='check-out'> Check Out</Label>
                        <input id='check-out' type='date' placeholder='09-07-2024'/>
                        
                        </div>
                       
                        <div>
                        <Label id="guest">Guests</Label>
                        <select id="guest" >
                            {guests.map((guest, index) => {
                                return <option key={index}>{guest}</option>
                            })}
                        </select>
                        </div>
                    
                    <div>
                    <Label id="room">Rooms</Label>
                        <select id="room" >
                            {rooms.map((room, index) => {
                                return <option key={index}>{room}</option>
                            })}
                        </select>
                    </div>
                    </InnerForm>
                    <Button>SEARCH</Button>
                    </Cover>
                    </Forming>
                 
                
              <SuiteCase  main={suites.main} heading={suites.heading}  
                subheading={suites.subheading} subheading2={suites.subheading2} subheading3={suites.subheading3}
                subheading4={suites.subheading4} subheading5={suites.subheading5}  subheading6={suites.subheading6} subheading7={suites.subheading7}
                subheading8={suites.subheading8} subheading9={suites.subheading9}/>
             
        </Outletter>
    )
}