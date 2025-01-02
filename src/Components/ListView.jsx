export function ListView({paragraphs}){
    return (
        <div>
             { paragraphs.map((element,index)=> <p key={index}>{element.Info}</p> )  }
        </div>
    )
}