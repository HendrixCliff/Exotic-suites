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


export default function RentalGarage({main, heading,subheading,
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
                        <h3>Rental company's phone number</h3>
                        <h5>{subheading}</h5>
                </SuitHead>
                <SuitHead>
                        <h3>Adjust the car to the driving conditions. <br/> the city center.</h3>
                        <h5>{subheading2}</h5>
                </SuitHead>
                <SuitHead>
                        <h3>Make sure all of the dents and scratches are documented.</h3>
                        <h5>{subheading3}</h5>
                </SuitHead>
                </Suitor>
                <Suitor>
                <SuitHead>
                        <h3>Inquire whether car insurance is needed.</h3>
                        <h5>{subheading4}</h5>
                </SuitHead>
                <SuitHead>
                        <h3>Returning the car at a different branch may cost you more.</h3>
                        <h5>{subheading5}</h5>
                </SuitHead>
                <SuitHead>
                        <h3>If you are returning the car to an airport, remember to leave enough time to check in to your flight.</h3>
                        <h5>{subheading6}</h5>
                </SuitHead>
                </Suitor>
                <Suitor>
                <SuitHead>
                        <h3>Comparison of the rental companies.</h3>
                        <h5>{subheading7}</h5>
                </SuitHead>
                <SuitHead>
                        <h3>Do you have a GPS? Consider bringing it with you.</h3>
                        <h5>{subheading8}</h5>
                </SuitHead>
                <SuitHead>
                        <h3>Don't forget to fill the gas tank.</h3>
                        <h5>{subheading9}</h5>
                </SuitHead>
                </Suitor>
        </div>
    )
}