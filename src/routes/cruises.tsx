import  {Outletter,CoverPage,SuiteCoverer,Hooler,Label,InnerInnerSeparator,
   InputText, ButtonPoppy ,Labeller,Content,Displayer,Container, NavButtons,FormPagering,} from 
'../components/styles/Container.tsx'
import CruiseShip from '../cruise-ship.tsx'
import {cruises} from '../utilities/data.ts'

export default function Cruises() {
    const lengths = ['1-2 Nights','3-4 Nights','5-6 Nights','+10 Nights']
    return(
        <Outletter  width={'100%'} height={'70em'}>
              <Displayer>
                <Container>
                    <NavButtons to='/flights'>Flights</NavButtons>
                    <NavButtons to='/'>Suites</NavButtons>
                    <NavButtons to='/carrentals'>Car  Rentals</NavButtons>
                    <NavButtons to='/cruises'>Cruises</NavButtons>
                </Container>
                <Content>
                <SuiteCoverer src="/images/cruise3.jpg"/>
                </Content>
            </Displayer>
             <FormPagering>
                   <CoverPage>
                        <Hooler>Find the Best Cruise Prices</Hooler>
                      
                        <InnerInnerSeparator>
                            <div>
                                <Label id='stay'>Destination</Label>
                                <InputText width={'70%'} id='stay' type="text" placeholder="Any Destination"/>
                            
                            </div>
                            <div>
                                <Label id='check-in'> Departure</Label>
                                <input id='check-in' type='date' placeholder='07-07-2024'/>
                            </div>
                        </InnerInnerSeparator>
                        <InnerInnerSeparator>
                            <div>
                                <Label id='stay'>Cruise Line</Label>
                                <InputText width={'70%'} id='stay' type="text" placeholder="Any Cruise Line"/>
                            </div>
                            <Labeller>
                                <Label id="guest">Length</Label>
                                <select id="guest" >
                                    {lengths.map((length, index) => {
                                        return <option key={index}>{length}</option>
                                    })}
                                </select>
                            </Labeller>
                        </InnerInnerSeparator>
                        
                    </CoverPage>
                    <ButtonPoppy>SEARCH</ButtonPoppy>
                </FormPagering>
                <CruiseShip  main={cruises.main} heading={cruises.heading}  
                subheading={cruises.subheading} subheading2={cruises.subheading2} subheading3={cruises.subheading3}
                subheading4={cruises.subheading4} subheading5={cruises.subheading5}  subheading6={cruises.subheading6} subheading7={cruises.subheading7}
               />
             
        </Outletter>
    )
}