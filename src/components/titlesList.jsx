import Item from "./item";

function TitlesList (props){
    return  (
        <>
            {props.titles.map((t) => (
               <Item  key={t.id} t={t} deleteTitle={props.deleteTitle}/>
            ))}
      </>
    )
}

export default TitlesList;