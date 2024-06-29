import {Suitor,Ho,SuitHead,Huncker} from  './components/styles/Container.tsx'

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
  
}


export default function CruiseShip({main, heading,subheading,
    subheading2,
    subheading3,
    subheading4,
    subheading5,
    subheading6,
    subheading7,
    }: SuiteHood) {
    return(
        <div>
        <Huncker>{main}</Huncker>
           <Ho>{heading}</Ho>
                <Suitor>
                        <SuitHead>
                                <h3>Type and location of your room.</h3>
                                <h5>{subheading}</h5>
                        </SuitHead>
                        <SuitHead>
                                <h3>Phones.</h3>
                                <h5>{subheading2}</h5>
                        </SuitHead>
                        <SuitHead>
                                <h3>Knowledge is power (and fun).</h3>
                                <h5>{subheading3}</h5>
                        </SuitHead>
                 </Suitor>
                 <Suitor>
                        
                        <SuitHead>
                                <h3>Visas and Documents.</h3>
                                <h5>{subheading4}</h5>
                        </SuitHead>
                        <SuitHead>
                                <h3>Choose the best type of cruise for you.</h3>
                                <h5>{subheading5}</h5>
                        </SuitHead>
                        <SuitHead>
                                <h3>Insurance.</h3>
                                <h5>{subheading6}</h5>
                        </SuitHead>
                        <SuitHead>
                                <h3>Last thing.</h3>
                                <h5>{subheading7}</h5>
                        </SuitHead>
                </Suitor>
        </div>
    )
}