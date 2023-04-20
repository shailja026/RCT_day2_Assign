export function Content(props){

    return(
        <div className="main">
        <p> Subject   :<span>  {props.Subject} </span></p>
        <p> To   : <span>{props.to}</span></p>
       

        <p>I am having a <span> {props.event} </span>next Frieday at my Home . Would you like to come? It will be fun. <br/>Lots of people from my school are cominng. You know some of them <span>{props.friends} </span>.</p>
         
         <p>My house is behind our school, near <span>{props.landmark}</span> .</p>
         
         <p>I hope you will come and see you soon </p>
         
        <p> from,</p>
     <strong> {props.name} </strong> 
        {/* <p>{ props.friends}</p> */}

        </div>
    )
}