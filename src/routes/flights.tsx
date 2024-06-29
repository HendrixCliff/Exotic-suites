import {Outletter,
    FormPager, InputRadio,InnerSeparator ,Hool,
    Label, SuiteCoverer ,Container,DisplayRow ,Content,NavButtons,Displayer,DisplayRowwering , DisplayRowwer ,InputText,ButtonPopper,InnerInputTexter,} from '../components/styles/Container.tsx'
import {rentals} from '../utilities/data.ts'
import FlightAirport from '../flight-airpot.tsx'


export default function Flights() {
    const guests = ['7:00AM','8:00AM','9:00AM','10:00AM'
        ,'11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM'
        ,'7:00PM','8:00PM','9:00PM','10:00PM','11:00PM','12:00AM'
       
    ]
    const rooms = ['7:00AM','8:00AM','9:00AM','10:00AM'
        ,'11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM'
        ,'7:00PM','8:00PM','9:00PM','10:00PM','11:00PM','12:00AM'
       
    ]
    const classFlight = [
        'Economy','Business','First'
    ]
    const travelers = [1,2,3,4,5,6]
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
                    <SuiteCoverer  src="/images/flight5.jpg"/>
                </Content>
            </Displayer>
          <FormPager> 
                    <Hool>Flight Search</Hool>
                    <InputRadio >
                    <div>
                        <Label>Round Trip</Label>
                        <input id="round-trip" type="radio"/>
                    </div>
                    <div>
                        <Label>One Way</Label>
                        <input id="one-way" type="radio"/>
                    </div>
                    <div>
                        <Label>Multi Destinations</Label>
                        <input id="multi-destination" type="radio"/>
                    </div>
                    <div>
                        <Label>Direct Flights only</Label>
                        <input id="direct" type="radio"/>
                    </div>
                    </InputRadio > 
                {/* <Separator width={'90%'} gap={'.4em'}> */}
                 <InnerInputTexter>
                
                    <DisplayRow >
                        <div>
                        <Label>From</Label>
                        <InputText width={'60%'} id='stay' type="text" placeholder="Lagos, Nigeria"/>
                        </div>
                        <div>
                    <Label>To</Label>
                           <InputText width={'60%'} id='stay' type="text" placeholder="Destination name or code"/>                        
                    </div>
                     </DisplayRow > 
                     <DisplayRowwering >
                     <div>
                            <Label> Departing</Label>
                            <input id='check-in' type='date' placeholder='07-07-2024'/>
                        </div>
                    
                      <div>
                        <Label> Returning</Label>
                        <input id='check-out' type='date' placeholder='09-07-2024'/>
                      </div>   
                     </DisplayRowwering > 
                     < DisplayRowwer >
                     <div>
                            <Label>Time</Label>
                            <select id="guest" >
                                <option>Anytime</option>
                                {guests.map((guest, index) => {
                                    return  <option key={index}>{guest}</option>
                                })}
                            </select>
                        </div>
                        <div>
                    <Label>Time</Label>
                        <select id="room" >
                            <option>Anytime</option>
                            {rooms.map((room, index) => {
                                return <option key={index}>{room}</option>
                            })}
                        </select>
                    </div>
                    </ DisplayRowwer >  
                    < DisplayRowwer >
                         <div>
                            <Label>Class</Label>
                            <select id="room" >
                                {classFlight.map((array, index) => {
                                    return <option key={index}>{array}</option>
                                })}
                            </select>
                        </div>
                        
                        <div>
                            <Label>Travelers</Label>
                            <select id="room" >
                                {travelers.map((travel, index) => {
                                    return <option key={index}>{travel}</option>
                                })}
                            </select>
                        </div>    
                    </ DisplayRowwer >  
                    <DisplayRow>   
                         <ButtonPopper top={'.6em'}>SEARCH</ButtonPopper>
                         <InnerSeparator>
                         <input type="checkbox"/>
                         <Label>Prefer Non-stop Flights</Label>
                         </InnerSeparator>

                    </DisplayRow>
                    </InnerInputTexter>
         </FormPager>
                    <FlightAirport  main={rentals.main} heading={rentals.heading}  
                    subheading={rentals.subheading} subheading2={rentals.subheading2} subheading3={rentals.subheading3}
                    subheading4={rentals.subheading4} subheading5={rentals.subheading5}  subheading6={rentals.subheading6} subheading7={rentals.subheading7}
                    subheading8={rentals.subheading8} subheading9={rentals.subheading9}/>
        </Outletter>
    )
}