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

export default function SuiteCase({main, heading,subheading,
    subheading2,
    subheading3,
    subheading4,
    subheading5,
    subheading6,
    subheading7,
    subheading8,subheading9}: SuiteHood) {
    return(
        <div>
                <div>
                        <Hunck>{main}</Hunck>
                        <Ho>{heading}</Ho>
                </div>
           <Suitor>
            <SuitHead>
                <h3>Look for extras.</h3>
                <h5>{subheading}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Stay in hotels right outside <br/> the city center.</h3>
                    <h5>{subheading2}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Upgrade to a suite.</h3>
                    <h5>{subheading3}</h5>
            </SuitHead>
           </Suitor>
           <Suitor>
            <SuitHead>
                    <h3>Book in a business minded hotel.</h3>
                    <h5>{subheading4}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Be a rewards member.</h3>
                    <h5>{subheading5}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Go out to eat.</h3>
                    <h5>{subheading6}</h5>
            </SuitHead>
            </Suitor>
            <Suitor>
            <SuitHead>
                    <h3>Ask for a corner room.</h3>
                    <h5>{subheading7}</h5>
            </SuitHead>
            <SuitHead>
                    <h3>Bring your own snacks or hit <br/> the grocery store.</h3>
                    <h5>{subheading8}</h5>
            </SuitHead>
            <SuitHead>
                <h3>Avoid the weekend.</h3>
                <h5>{subheading9}</h5>
            </SuitHead>
        </Suitor>
                  
          
       
        </div>
    )
}