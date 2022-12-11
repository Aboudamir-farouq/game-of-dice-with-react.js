function Img(props){
    if(props.display == 1){
        return (
            <img id={props.id} src={props.src}/>
        );
    }else{
        return <></>
    }
}

export default Img;