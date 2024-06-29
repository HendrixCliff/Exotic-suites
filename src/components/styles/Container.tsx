import styled from 'styled-Components'
import {NavLink} from 'react-router-dom'
export {Container,Hool,Hooler,Hunck,Huncker,Forming,InnerInputTexting,ButtonPoppy,Labeller,Content,Displayer,FormPagering, InnerFormer, SuiteCoverer,InnerInputTexter,FormPager,ButtonPopper,DisplayRowwering , DisplayRowwer ,DisplayRow ,BasicallyFooter,Ho,BasicContainer,BasicFooter,InnerInnerSeparator,CoverPage,InnerInnerInputText,Separator,FormPage,InnerSeparator,InputRadio , Cover,SuitHead,Hoo,Suitor,InnerInputText,InputText,Label ,Button,ButtonPop,InnerForm,Form, SuiteCover,Basic,NavButtons,Outletter, UnorderedList,List} 

type SectionProp = {
    list: string,
  
}

type Unordered = {
    gap: string
}
type Hotel = {
    height: string
    width: string
}
type ButtonFormer = {
    top: string
}
type Hotel2 = {
    top: string
}
type InputWidth = {
    width: string
}
type FormButton = {
    top: string
}
type BasicallyFoot = {
    top: string
}

const Container = styled.div`
display: flex;
flex-direction: row;
 gap: 4em;
 background: #ffffff;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 7em;
 
  @media screen and  (max-width: 600px) {
    flex-direction: column;
    gap: 0em;
     width: 10%;
      height: 16em;
      padding: 0em;
     box-sizing: border-box;
        margin-top: 0em;
  
}
@media screen and  (min-width: 600px) and (max-width: 700px) {
    flex-direction: column;
    gap: 0em;
     width: 20%;
      height: 16em;
      padding: 0em;
     box-sizing: border-box;
     margin-top: 0em;
  
}
@media screen and  (min-width: 700px) and (max-width: 750px){
    flex-direction: column;
    gap: 0em;
     width: 20%;
      height: 16em;
      padding: 0em;
     box-sizing: border-box;
     margin-top: 0em;
  
}
@media screen and (min-width: 750px) and (max-width: 900px) {
flex-direction: row;
 gap: 4em;
 background: #ffffff;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 2em;
}
@media screen and (min-width: 900px) and (max-width: 1500px) {
    flex-direction: row;
     gap: 4em;
     background: #ffffff;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 1em;
     margin-top: 2em
    }
    
`
const SuiteCover = styled.img`
width: 100%;
height: 28em;
object-fit: fill;
overflow: visible;




@media screen and (max-width: 600px) {
object-fit: fill;
width: 100%;
height: 16em;
overflow: visible;
margin-left: 0em;

}
@media screen and (min-width: 600px) and (max-width: 800px){
    width: 100%;
    height: 16em;
overflow: visible;
margin-left: 0em;
object-fit: fill;
}
@media screen and (min-width: 800px) and (max-width: 1200px){
    width: 100%; 
}
@media screen and (min-width: 1200px) and (max-width: 1500px){
    width: 95%; 
    padding: 1em
}

`
const Content = styled.div`
@media screen and (min-width: 600px) and (max-width: 800px){
    width: 100%;
}
@media screen and (min-width: 800px) and (max-width: 1200px){
    width: 80%; 
}
@media screen and (min-width: 1200px) and (max-width: 1500px){
    width: 90%; 
    padding: 1em
}

`

// Here is where the object-fit property comes in. The object-fit property can take one of the following values:

// fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
// contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
// cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
// none - The image is not resized
// scale-down - the image is scaled down to the smallest version of none or containHere is where the object-fit property comes in. The object-fit property can take one of the following values:

// fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
// contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
// cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
// none - The image is not resized
// scale-down - the image is scaled down to the smallest version of none or contain

const SuiteCoverer = styled.img`
width: 100%;
height: 28em;
object-fit: fill;
overflow: visible;




@media screen and (max-width: 600px) {
object-fit: fill;
height: 16em;
overflow: visible;
margin-left: 0em;;

}InputRadio

    @media screen and (min-width: 600px) and (max-width: 800px){
        width: 100%;
        height: 16em;
    overflow: visible;
    margin-left: 0em;
    object-fit: fill;
    }
    @media screen and (min-width: 800px) and (max-width: 1200px){
        width: 100%; 
    }
    @media screen and (min-width: 1200px) and (max-width: 1500px){
        width: 95%; 
        padding: 1em
    }
`
const Displayer = styled.div`

display: flex;
flex-direction: row;
InputWidth: 100%;
align-items: center;

  @media screen and  (max-width: 600px) {
    flex-direction: row;
    InputWidth: 100%;
    gap: 2em;
    align-items: center;
}  
@media screen and  (min-width: 600px) and (max-width: 750px)  {
    flex-direction: row;
    InputWidth: 100%;
    align-items: center;
    gap: 3em;
} 
@media screen and  (min-width: 750px) and (max-width: 1300px)  {
    flex-direction: column;
    InputWidth: 100%;
    align-items: center;
    gap: 3em;
}  
@media screen and  (min-width: 1300px) and (max-width: 1500px)  {
    flex-direction: column;
    InputWidth: 100%;
    align-items: center;
    gap: 3em;
}  
`



// const ContainerDuck = styled.div`
//   @media screen and  (max-width: 600px) {
//   display: flex;
//   flex-direction: row
//   }
// `
const SuitHead = styled.div`
 display: flex;
 border: .2em solid #edead0;

 @media screen and  (max-width: 600px) {
 width: 100%;
  flex-direction: column;
 height: auto;
 gap: 0em;
 }
 @media screen and  (min-width: 600px) and (max-width: 800px) {
    width: 100%;
     flex-direction: column;
    height: auto;
    gap: 0em;
    }
     @media screen and  (min-width: 800px) and (max-width: 1200px){
    width: 100%;
     flex-direction: column;
    height: auto;
    gap: 0em;
    }
     @media screen and  (min-width: 1200px) and (max-width: 1500px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    gap: 0em;
    }

`

const Suitor = styled.div`
 display: flex;
h3 {
color: #1982c4;
font-weight: bold;


@media screen and (max-width: 600px) {
gap: 2.9em;
padding: 0em;
font-size: .9rem;
flex-direction: column;
width: 100%;
text-align: center;

 h5 {
 font-size: .8rem;
 }
 h3 {
 font-size: 1em;
font-weight: bold;
 }
}
@media screen and (min-width: 600px) and (max-width: 800px) {
    gap: 2.9em;
    padding: 0em;
    font-size: .9rem;
    flex-direction: column;
    width: 100%;
    text-align: center;
    
     h5 {
     font-size: .8rem;
     }
     h3 {
     font-size: 1em;
    font-weight: bold;
     }
    }
     @media screen and (min-width: 800px) and (max-width: 1200px) {
    padding: 0em;
    font-size: .9rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    
     h5 {
     font-size: .8rem;
     }
     h3 {
     font-size: 1em;
    font-weight: bold;
     }
    }
     @media screen and (min-width: 1200px) and (max-width: 1500px) {
    padding: 0em;
    font-size: .9rem;
    width: 100%;
    height: 5em;
    display: flex;
    flex-direction: row;
    text-align: center;
   
    
     h5 {
     font-size: 1.1rem;
     }
     h3 {
     font-size: 1.3em;
    font-weight: bold;
     }
    }

`

const Hoo = styled.h2<Hotel2>`
font-size: 1.6rem;
font-weight: bold;
margin-top: ${props => props.top};

 @media screen and  (max-width: 600px) {
 font-size: 1.7rem;
 text-align: center;
 margin-top: 1em;
 }
 @media screen and  (min-width: 600px) and (max-width: 800px){
    font-size: 1.7rem;
    text-align: center;
    margin-top: 1em;
    }
     @media screen and  (min-width: 800px) and (max-width: 1200px) {
    font-size: 1.7rem;
    text-align: center;
    margin-top: 1em;
    }
     @media screen and  (min-width: 1200px) and (max-width: 1500px) {
    font-size: 1.7rem;
    text-align: center;
    margin-top: 1em;
    }
`
const Hool = styled.h2`
font-size: 1.6rem;
font-weight: bold;
margin-left: 14em;

 @media screen and  (max-width: 600px) {
 font-size: 1.4rem;
 text-align: center;
 margin-top: .3em;
 margin-left: 0em;
 }
 @media screen and  (min-width: 600px) {
    font-size: 1.4rem;
    text-align: center;
    margin-top: .3em;
    margin-left: 0em;
    }
`
const Hooler = styled.h2`
font-size: 1.6rem;
font-weight: bold;
margin-left: 14em;

 @media screen and  (max-width: 600px) {
 font-size: 1.4rem;
 text-align: center;
 margin-top: .3em;
 margin-left: 0em;
 }
 @media screen and  (min-width: 600px) and (max-width: 800px) {
    font-size: 1.4rem;
    text-align: center;
    margin-top: .3em;
    margin-left: 0em;
    }
     @media screen and  (min-width: 800px) and (max-width: 1200px) {
    font-size: 1.4rem;
    text-align: center;
    margin-top: .3em;
    margin-left: 0em;
    }
   @media screen and  (min-width: 1200px) and (max-width: 1500px) {
    font-size: 1.4rem;
    text-align: center;
    margin-top: .3em;
    margin-left: 0em;
    }
`
const InputText = styled.input<InputWidth>`
  width: ${props => props.width};
  padding: .9em;

  @media screen and  (max-width: 600px) {
 
 }  
`
const Hunck = styled.h3`
font-weight: bold;

@media screen and  (max-width: 600px) {
 
}  

@media screen and  (min-width: 600px) and (max-width: 800px) {
font-weight: bold;
margin-left: 10em;
font-size: 1.7rem;
}  
@media screen and  (min-width: 800px) and (max-width: 1200px) {
font-weight: bold;
margin-left: 14em;
font-size: 1.7rem;
}  

@media screen and  (min-width: 1200px) and (max-width: 1500px) {
font-weight: bold;
margin-left: 13em;
font-size: 2rem;
}  
`
const Huncker = styled.h3`
font-weight: bold;

@media screen and  (max-width: 600px) {
 
}  

@media screen and  (min-width: 600px) and (max-width: 800px) {
font-weight: bold;
margin-left: 4em;
font-size: 1.6rem;
}  
@media screen and  (min-width: 800px) and (max-width: 1200px) {
font-weight: bold;
margin-left: 6em;
font-size: 1.7rem;
}  

@media screen and  (min-width: 1200px) and (max-width: 1500px) {
font-weight: bold;
margin-left: 13em;
font-size: 2rem;
}  
`


 const InnerInnerInputText = styled.div`
 display: flex;
 flex-direction: column;
 width: 70%;
 gap: .5em;
 `

const InputRadio = styled.div`
 display: flex;
 flex-direction: row;
 gap: 3em;
 margin-left: 5em;

 @media screen and  (max-width: 600px) {
   gap: 0em;
   margin-left: .1em;
  
 }
 @media screen and  (min-width: 600px) and (max-width: 800px) {
    gap: 0em;
    margin-left: .1em;
   
  }
     @media screen and  (min-width: 800px) and (max-width: 1200px) {
    gap: 0em;
    margin-left: .1em;
   
  }
    @media screen and  (min-width: 1200px) and (max-width: 1500px) {
    gap: 0em;
    margin-left: 12em;
   
  }
`
const Cover = styled.div`
margin-left: 4em;
display: flex;
flex-direction: column;
gap: 3em;
width: 70%;

@media screen and (max-width: 600px) {
width: 100%;
gap: 0em,
margin-left: 0em;
flex-direction: column;

h2 {
margin-top: 0em;}
}
@media screen and (min-width: 600px) {
    width: 100%;
    gap: 0em,
    margin-left: 0em;
    flex-direction: column;
    
    h2 {
    margin-top: 0em;}
    }
 `
 const Ho = styled.h3`
 text-align:  center;

  @media screen and  (max-width: 600px) {
 font-size: 1rem;

 }
 @media screen and  (min-width: 600px) {
    font-size: 1rem;
   
    }
 `
 const CoverPage = styled.div`
 display: flex;
 flex-direction: column;
  
 
  @media screen and (min-width: 600px) and (max-width: 800px)  {
 margin-left: 2em
 }
   @media screen and (min-width: 800px) and (max-width: 1200px)  {
 margin-left: 2em
 }
   @media screen and (min-width: 1200px) and (max-width: 1500px)  {
 margin-left: 5em
 }
 ;
 `

 const Forming = styled.form`
border: .1em solid #000000;
background: transparent

@media screen and (max-width: 600px) {
width: 100%;
margin-left: 0em;
padding: 0em;
height: 15em; 
max-width: 100%


}
@media screen and (min-width: 600px) and (max-width: 800px) {
    width: 80%;
    margin-left: 0em;
    padding: 0em;
    height: 14em; 
    max-width: 100%
    
    
    }
    @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 80%;
    margin-left: 6em;
    padding: 0em;
    height: 14em; 
    max-width: 100%
    
    
    }
    @media screen and (min-width: 1200px) and (max-width: 1500px) {
    width: 60%;
    margin-left: 19em;
    padding: 0em;
    height: 15em; 
    max-width: 100%
    
    
    }
`
const Form = styled.form`
border: .1em solid #000000;
background: transparent

@media screen and (max-width: 600px) {
width: 100%;
margin-left: 0em;
padding: 0em;
height: 15em; 
max-width: 100%


}
@media screen and (min-width: 600px) and (max-width: 800px) {
    width: 100%;
    margin-left: 0em;
    padding: 0em;
    height: 15em; 
    max-width: 100%
    
    
    }
    @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 80%;
    margin-left: 5em;
    padding: 0em;
    height: 15em; 
    max-width: 100%
    
    
    }
    @media screen and (min-width: 1200px) and (max-width: 1500px) {
    width: 60%;
    margin-left: 15em;
    padding: .9em;
    height: 15em; 
    max-width: 100%
    
    
    }
`
const FormPage = styled.form`
display: flex;
border: .1em solid #000000;
flex-direction: column;
background: transparent;
width: 70%;
margin-left: 10em;

@media screen and (max-width: 600px) {
width: 100%;
height: 24em;
display: flex;
flex-direction: column;
border: .1em solid #000000;
margin-left: 0em;

select {
 height: 2em;
 width: 100%
}
 h2 {
font-size: 1.5rem;
}
}
@media screen and (min-width: 600px) {
    width: 100%;
    height: 24em;
    display: flex;
    flex-direction: column;
    border: .1em solid #000000;
    margin-left: 0em;
    
    select {
     height: 2em;
     width: 100%
    }
     h2 {
    font-size: 1.5rem;
    }
    }

`
const FormPager = styled.form`
display: flex;
border: .1em solid #000000;
flex-direction: column;
background: transparent;
width: 70%;
margin-left: 10em;

@media screen and (max-width: 600px) {
width: 100%;
height: 20em;
display: flex;
flex-direction: column;
border: .1em solid #000000;
margin-left: 1em;

select {
 height: 2em;
 width: 100%
}
 h2 {
font-size: 1.5rem;
}
}
@media screen and (min-width: 600px) and (max-width: 800px) {
    width: 100%;
    height: 20em;
    display: flex;
    flex-direction: column;
    border: .1em solid #000000;
    margin-left: 1em;
    
    select {
     height: 2em;
     width: 100%
    }
     h2 {
    font-size: 1.5rem;
    }
    }
@media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 100%;
    height: 20em;
    display: flex;
    flex-direction: column;
    border: .1em solid #000000;
    margin-left: 1em;
    
    select {
     height: 2em;
     width: 100%
    }
     h2 {
    font-size: 1.5rem;
    }
    }
    @media screen and (min-width: 1200px) and (max-width: 1500px) {
    width: 60%;
    height: 20em;
    display: flex;
    flex-direction: column;
    border: .1em solid #000000;
    margin-left: 19em;
    
    select {
     height: 2em;
     width: 100%
    }
     h2 {
    font-size: 1.5rem;
    }
    }
`

const DisplayRow = styled.div`

@media screen and (max-width: 600px) {
display: flex;
flex-direction: row;
gap: 0em;
}
@media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    gap: 0em;
    }
`
const DisplayRowwer = styled.div`

@media screen and (max-width: 600px) {
display: flex;
flex-direction: row;
gap: 6em;
margin-left: 3em;
}
@media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    gap: 6em;
    margin-left: 3em;
    }
`
const DisplayRowwering = styled.div`

@media screen and (max-width: 600px) {
display: flex;
flex-direction: row;
gap: 2.4em;

}
@media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    gap: 2.4em;
    
    }
`

const Label = styled.label`
font-weight: bold;
font-size: 1rem;
`
const Separator = styled.div`



`
const InnerInputText = styled.div`
display: flex;
flex-direction: row;
width: 70%;
gap: 1em;
margin-left: 4em;
height: 10em;
margin-top: 5em;

@media screen and (max-width: 600px) {
 flex-direction: column;
 gap: 0em;
 width: 100%;
 padding: 1em 8em 1em 1em;
 margin-left: .0em;
 margin-top: -4.5em;
}
@media screen and (min-width: 600px) {
    flex-direction: column;
    gap: 0em;
    width: 100%;
    padding: 1em 8em 1em 1em;
    margin-left: .0em;
    margin-top: -4.5em;
   }
`
const InnerInputTexter = styled.div`
display: flex;
flex-direction: row;
width: 70%;
gap: 1em;
margin-left: 4em;
height: 10em;
margin-top: 5em;

@media screen and (max-width: 600px) {
 flex-direction: column;
 gap: 0em;
 width: 100%;
 padding: 1em 8em 1em 1em;
 margin-left: .0em;
 margin-top: 0em;
}
@media screen and (min-width: 600px) and (max-width: 800px) {
    flex-direction: column;
    gap: 0em;
    width: 100%;
    padding: 1em 8em 1em 1em;
    margin-left: .0em;
    margin-top: 0em;
   }
    @media screen and (min-width: 800px) and (max-width: 1200px) {
    flex-direction: column;
    gap: 0em;
    width: 100%;
    padding: 1em 8em 1em 1em;
    margin-left: .0em;
    margin-top: 0em;
   }
        @media screen and (min-width: 1200px) and (max-width: 1500px) {
    flex-direction: column;
    gap: 0em;
    width: 100%;
    padding: 1em 8em 1em 1em;
    margin-left: 12em;
    margin-top: 0em;
   }
`
const InnerInputTexting = styled.div`
display: flex;
flex-direction: row;
width: 70%;
gap: 1em;
margin-left: 4em;
height: 10em;
margin-top: 5em;

@media screen and (max-width: 600px) {
 flex-direction: column;
 gap: 0em;
 width: 92%;
 padding: 1em 8em 1em 1em;
 margin-left: -1em;
 margin-top: 0em;
}
@media screen and (min-width: 600px) {
    flex-direction: column;
    gap: 0em;
    width: 92%;
    padding: 1em 8em 1em 1em;
    margin-left: -1em;
    margin-top: 0em;
   }
`
const InnerSeparator = styled.div`
display: flex;
flex-direction: row;

 @media screen and  (max-width: 600px) {
flex-direction: row;
align-items: center;

 }
 @media screen and  (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    
     }
`

const  InnerForm = styled.div`
display: flex;
flex-direction: row;
gap: 2em;
margin-bottom: .4em;


@media screen and (max-width: 600px) {
 flex-direction: row;
 gap: 0em;
 margin-bottom: 0em;
 margin-top: -9.1em;

}
@media screen and (min-width: 600px) {
    flex-direction: row;
    gap: 0em;
    margin-bottom: 0em;
    margin-top: -9.1em;
   
   }
`
const  InnerFormer = styled.div`
display: flex;
flex-direction: row;
gap: 2em;
margin-bottom: .4em;


@media screen and (max-width: 600px) {
 flex-direction: row;
 gap: 0em;
 margin-bottom: 0em;
 margin-top: 0em;
}
@media screen and (min-width: 600px) {
    flex-direction: row;
    gap: 0em;
    margin-bottom: 0em;
    margin-top: 0em;
    
   
   
   
   }
`
const Labeller = styled.div`
width: 20%;

`
const FormPagering = styled.form`
display: flex;
border: .1em solid #000000;
background: transparent;

@media screen and (max-width: 600px) {
width: 100%;
height: 18em;
flex-direction: column;
margin-left: 0em;
margin-top: 3em;

select {
 height: 2em;
 width: 100%
}
 h2 {
font-size: 1.5rem;
}
}
@media screen and (min-width: 600px) and (max-width: 800px) {
    width: 100%;
    height: 19em;
    display: flex;
    flex-direction: column;
    border: .1em solid #000000;
    margin-left: 0em;
    margin-top: 3em;
    
    select {
     height: 4em;
     width: 100%
    }
     h2 {
    font-size: 1.5rem;
    }
    }
    @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 90%;
    height: 18em;
    display: flex;
    flex-direction: column;
    border: .1em solid #000000;
    margin-left: 2em;
    margin-top: 3em;
    
    select {
     height: 4em;
     width: 100%
    }
     h2 {
    font-size: 1.5rem;
    }
    }
     @media screen and (min-width: 1200px) and (max-width: 1500px) {
    width: 60%;
    height: 19em;
    display: flex;
    flex-direction: column;
    border: .1em solid #000000;
    margin-left: 19em;
    margin-top: 3em;
    
    select {
     height: 4em;
     width: 100%
    }
     h2 {
    font-size: 1.5rem;
    }
    }

`
const InnerInnerSeparator = styled.div`

 @media screen (max-width: 600px) {
  width: 95%;
 display: flex;
 flex-direction: row;
 align-items: center;
 }
 @media screen (min-width: 600px) and (max-width: 800px) {
  width: 80%;
 display: flex;
 flex-direction: row;
 align-items: center;
 
 }
  @media screen (min-width: 800px) and (max-width: 1200px) {
  width: 70%;
 display: flex;
 flex-direction: row;
 align-items: center;
 }
  @media screen (min-width: 1200px) and (max-width: 1500px) {
  width: 60%;
 display: flex;
 flex-direction: row;
 align-items: center;
 }
`

const Button = styled.button`
width: 18%;
padding: .5em;
background: #f2f230;
color: #000000;
font-weight: bold;
font-size: 1.2rem;

@media screen and (max-width: 600px) {
width: 50%;
padding: .3em;
font-size: 1.1rem;
}
@media screen and (min-width: 600px) {
    width: 50%;
    padding: .3em;
    font-size: 1.1rem;
    }
`
const ButtonPoppy = styled.button`
width: 18%;
padding: .5em;
background: #f2f230;
color: #000000;
font-weight: bold;
font-size: 1.2rem;

@media screen and (max-width: 600px) {
width: 50%;
padding: .3em;
font-size: 1.1rem;
margin-left: 5em;
margin-bottom: .5em;
margin-top: 1em
}
@media screen and (min-width: 600px) and (max-width: 800px) {
    width: 50%;
    padding: .3em;
    font-size: 1.1rem;
    margin-left: 7em;
    margin-bottom: .5em;
    margin-top: 1em
    }
    @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 50%;
    padding: .3em;
    font-size: 1.1rem;
    margin-left: 13em;
    margin-bottom: .5em;
    margin-top: 1em
    }
    @media screen and (min-width: 1200px) and (max-width: 1500px) {
    width: 30%;
    padding: .3em;
    font-size: 1.1rem;
    margin-left: 29em;
    margin-bottom: .5em;
    margin-top: 1em
    }

`

const ButtonPop = styled.button<FormButton>`
background: #f2f230;
color: #000000;
font-weight: bold;


@media screen and (max-width: 600px) {
width: 50%;
padding: .3em;
font-size: 1.1rem;
margin-left: 5em;
margin-bottom: .5em;
margin-top: ${props => props.top}
}
@media screen and (min-width: 600px) and (max-width: 800px) {
    width: 50%;
    padding: .3em;
    font-size: 1.1rem;
    margin-left: 0em;
    margin-bottom: .5em;
    margin-top: ${props => props.top};
    }
    @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 50%;
    padding: .3em;
    font-size: 1.1rem;
    margin-left: 13em;
    margin-bottom: .5em;
    margin-top: ${props => props.top};
    }
`

const ButtonPopper = styled.button<ButtonFormer>`
width: 100%;
padding: .5em;
background: #f2f230;
color: #000000;
font-weight: bold;
font-size: 1.2rem;

@media screen and (max-width: 600px) {
width: 50%;
padding: .3em;
font-size: 1.1rem;
margin-left: 5em;
margin-bottom: .5em;
margin-top: ${props => props.top}
}
@media screen and (min-width: 600px) and (max-width: 800px) {
    width: 50%;
    padding: .3em;
    font-size: 1.1rem;
    margin-left: 5em;
    margin-bottom: .5em;
    margin-top: ${props => props.top}
    }
    @media screen and (min-width: 800px) and (max-width: 1200px){
    width: 50%;
    padding: .3em;
    font-size: 1.1rem;
    margin-left: 5em;
    margin-bottom: .5em;
    margin-top: ${props => props.top}
    }
   @media screen and (min-width: 1200px) and (max-width: 1500px){
    width: 43%;
    padding: .3em;
    font-size: 1.1rem;
    margin-left: 2em;
    margin-bottom: .5em;
    margin-top: ${props => props.top}
    }
`
const Basic = styled.div`
width: 100%;
max-width: 100%;
padding: 0em;
margin: 0em;
height: 100%;
display: flex;
flex-direction: column;
object-fit: fill;
overflow: visible;

@media screen and (max-width: 600px) {
padding: 0em;
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
// vertical-align: top property;
// outline:none;
object-fit: fill;
overflow: visible;


}
@media screen and (min-width: 600px) {
    padding: 0em;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    // vertical-align: top property;
    // outline:none;
    object-fit: fill;
    overflow: visible;
    
    
    }
`
const BasicFooter = styled.div`
@media screen and (max-width: 600px) {
input {
width: 70%;
}
}
@media screen and (min-width: 600px) {
    input {
    width: 70%;
    }
    }

`

const BasicallyFooter = styled.div<BasicallyFoot>`
display: flex;
flex-direction: column; 
margin-top: -2.5em;
margin-left: 1.5em;

@media screen and (max-width: 600px) {
margin-top: ${props => props.top};
margin-left: .1em;
align-items: center;
padding: 1em

h2 {
    margin-top: 5em;
}
}
@media screen and (min-width: 600px) {
    margin-top: ${props => props.top};
    margin-left: .1em;
    align-items: center;
    padding: 1em
    
    h2 {
        margin-top: 5em;
    }
    }

`
const BasicContainer = styled.div`
display: flex;
background: #145c9e;
color: #ffffff;


@media screen and (max-width: 600px) {
gap: .2em;
padding: 1em  auto;
width: 100%;


h4 {
font-size: .7rem;
}
h3 {
font-size: 1rem;
}
h2 {
font-size: .9rem;
}
}
@media screen and (min-width: 600px) and (max-width: 800px) {
    gap: .2em;
    padding: 1em  auto;
    width: 100%;
    
    
    h4 {
    font-size: .7rem;
    }
    h3 {
    font-size: 1rem;
    }
    h2 {
    font-size: .9rem;
    }
    }
    @media screen and (min-width: 800px) and (max-width: 1200px){
    gap: 1em;
    flex-direction: row;
    padding: 1em  auto;
    width: 93%;
    padding: 2em;
    
    
    h4 {
    font-size: 1.1rem;
    }
    h3 {
    font-size: 1.5rem;
    }
    h2 {
    font-size: 1.3rem;
    }
    }
    @media screen and (min-width: 1200px) and (max-width: 1500px){
    gap: 8em;
    flex-direction: row;
    padding: 1em  auto;
    width: 100%;
    padding: 2em;
    
    
    h4 {
    font-size: 1.1rem;
    }
    h3 {
    font-size: 1.5rem;
    }
    h2 {
    font-size: 1.3rem;
    }
    }
`
const Outletter = styled.div<Hotel>`
 width: ${props => props.width};
 height: ${props => props.height }
 background: #ffffff;
 color: #000000;
 padding: 0em; 
   max-width: 100%

 @media screen and  (max-width: 600px) {
  width: 100%;
  height: 100%;
  margin-right: 0em;
  max-width: 100%



 }
 @media screen and  (min-width: 600px) {
    width: 100%;
    height: 100%;
    margin-right: 0em;
    max-width: 100%
  
  
  
   }
`


const NavButtons = styled(NavLink)`
width: 10%;
background: #ffffff;
padding: 1em;
text-align: center;
text-decoration: none;
font-size: 1.1rem;
font-weight: bold;
color: #000000;
`
const UnorderedList = styled.div<Unordered>`
display: flex;
flex-direction: row;
gap: ${props => props.gap || '0em'}
`

const List = styled.li<SectionProp>`
list-style: none;
font-size: 1.1rem;
border-bottom: ${props => props.list || '.1em solid #000000'};
`
