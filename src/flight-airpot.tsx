import {Suitor, Hunck,Ho,SuitHead} from  './components/styles/Container.tsx'

type SuiteHood = {
    main: string,
    heading: string,
    subheading: string,
    subheading2: string,
    subheading3:  string,
    subheading4: string,
    subheading5: string,
    subheading6:  string,
    subheading7:  string,
    subheading8:  string,
    subheading9:  string,
}


export default function FlightAirport({main, heading,subheading,
    subheading2,
    subheading3,
    subheading4,
    subheading5,
    subheading6,
    subheading7,
    subheading8,subheading9}: SuiteHood) {
    return(
        <div>
            <Hunck>{main}</Hunck>
           <Ho>{heading}</Ho>
           <Suitor>
            <SuitHead>
                <h3>Airlines put out their fare sales on Tuesday morning.</h3>
                <h5>{subheading}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Fly during the least popular times.</h3>
                    <h5>{subheading2}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Choose your seat later.</h3>
                    <h5>{subheading3}</h5>
            </SuitHead>
          </Suitor>
          <Suitor>
        
            <SuitHead>
                    <h3>Fly on holidays.</h3>
                    <h5>{subheading4}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Don't wait until the last-minute to book.</h3>
                    <h5>{subheading5}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Avoiding extra fees</h3>
                    <h5>{subheading6}</h5>
            </SuitHead>
            </Suitor>
            <Suitor>
            <SuitHead>
                    <h3>Pack your own snacks.</h3>
                    <h5>{subheading7}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Fly carry-on only. Baggage fees vary wildly.</h3>
                    <h5>{subheading8}</h5>
            </SuitHead>
            <SuitHead>
                <h3>Avoid the upgrade it's not necessary.</h3>
                <h5>{subheading9}</h5>
            </SuitHead>
        </Suitor>
        </div>
    )
}