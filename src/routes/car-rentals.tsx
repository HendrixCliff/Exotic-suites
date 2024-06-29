import {SuiteCoverer,Displayer,Content,Container, InnerFormer,NavButtons,Outletter, InnerInputTexting,BasicallyFooter, Hoo,ButtonPop,Form,InputText, Label,} from  '../components/styles/Container.tsx'
import  {rentals} from '../utilities/data.ts'
import RentalGarage from '../rental-garage.tsx'

export default function CarRentals() {
    const guests = ['7:00AM','8:00AM','9:00AM','10:00AM'
        ,'11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM'
        ,'7:00PM','8:00PM','9:00PM','10:00PM','11:00PM','12:00AM'
       
    ]
    const rooms = ['7:00AM','8:00AM','9:00AM','10:00AM'
        ,'11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM'
        ,'7:00PM','8:00PM','9:00PM','10:00PM','11:00PM','12:00AM'
       
    ]

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
                   <SuiteCoverer src="/images/car6.jpg"/>
                </Content>
            </Displayer>
            <Form>
                    <Hoo top={'0em'}>Car Rentals</Hoo>
                    <InnerInputTexting>
                        <Label id='stay'>Pick Up Location</Label>
                        <InputText width={'100%'} id='stay' type="text" placeholder="City or airport code"/>
                    </InnerInputTexting>
                    
                    <BasicallyFooter top={'-7em'}>
                      <InnerFormer>
                        <div>
                            <Label id='check-in'> Pick Up Date</Label>
                            <input id='check-in' type='date' placeholder='07-07-2024'/>
                        </div>
                        <div>
                            <Label id="guest">Time</Label>
                            <select id="guest" >
                                {guests.map((guest, index) => {
                                    return <option key={index}>{guest}</option>
                                })}
                            </select>
                        </div>
                     </InnerFormer>
                     <InnerFormer>
                        <div>
                                <Label id='check-out'> Drop OffDate</Label>
                                <input id='check-out' type='date' placeholder='09-07-2024'/>
                            </div>
                        <div>
                                <Label id="room">Time</Label>
                                <select id="room" >
                                    {rooms.map((room, index) => {
                                        return <option key={index}>{room}</option>
                                    })}
                                </select>
                        </div>
                     </InnerFormer>
                     <ButtonPop top={'0em'}>Check Rates</ButtonPop>
                    </BasicallyFooter>
                    </Form>
                <RentalGarage  main={rentals.main} heading={rentals.heading}  
                subheading={rentals.subheading} subheading2={rentals.subheading2} subheading3={rentals.subheading3}
                subheading4={rentals.subheading4} subheading5={rentals.subheading5}  subheading6={rentals.subheading6} subheading7={rentals.subheading7}
                subheading8={rentals.subheading8} subheading9={rentals.subheading9}/>
          
        </Outletter>
        
    )
}