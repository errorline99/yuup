import Usezz from "./romote";

export default function Cliz(props){
    var names = props.name
    var vote = props.point
    var weekWhatever = props.weekName
    var weekOf = props.weekFlash
    
    return(<>
        <Usezz votes={vote} weekDone={weekOf} weekYes={weekWhatever} title={names}/>
        </>
    )

}