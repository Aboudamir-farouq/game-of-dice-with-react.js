import React from "react";
import "./App.css"
import Button from "./composant/button";
import Header from "./composant/header";
import Img from "./composant/img"
import Result from "./composant/result";

import img1 from "./Img/dé-1.png"
import img2 from "./Img/dé-2.png"
import img3 from "./Img/dé-3.png"
import img4 from "./Img/dé-4.png"
import img5 from "./Img/dé-5.png"
import img6 from "./Img/dé-6.png"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            nombre:0,
            face:-1,
            essai:0,
            message: "",
            restartGame: false 
        };
        this.onClickJouer = this.onClickJouer.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.restart = this.restart.bind(this);
        this.listImg = [img1, img2, img3, img4, img5, img6];
        this.listImgCompsant = [];

    }

    getRandomInt(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    }

    onClickJouer(){
        if(this.state.restartGame == true){
            this.setState({message: "merci de cliquer sur le boutton 'Recommencer' pour recommencer le jeu"})
        }else{
            let nbre = this.getRandomInt(0, 6);
            let nbre_face = this.getRandomInt(0, 6);
            this.setState({face: nbre_face});
            this.setState({nombre: nbre});
            if(nbre != nbre_face){
                this.setState({essai: this.state.essai + 1});
                this.setState({message: "vous l'avez rater. Ressayer une autre fois en cliquant sur jouer"});
                this.setState({restartGame: false});
            }else{
                this.setState({message: "Bravos c'est la bonne réponse. Cliquer sur recommencer pour rejouer"});
                this.setState({restartGame: true});   
            }
        }
    }

    restart(){
        this.setState({
            nombre:0,
            face:-1,
            essai:0,
            message: "",
            restartGame: false 
        })
    }

    changeHandler(){
        this.listImgCompsant = [];
        for(let i = 0; i<6; i++){
            if(i == this.state.nombre){
                this.listImgCompsant.push(<Img src={this.listImg[i]} display="1"/>)
            }else{
                this.listImgCompsant.push(<Img src={this.listImg[i]} display="0"/>)
            }
        }
    }

    render(){
        this.changeHandler();
        return (
            <div id="App">
                <Header />
                {this.listImgCompsant}
                <Button id="jouer" value="Jouer" onClick={this.onClickJouer} onChange={this.changeHandler}/>
                <div id="vertical_line"></div>
                <Result face={parseInt(this.state.face) + 1} essai={this.state.essai} message={this.state.message}/>
                <Button id="restart" value="Recommencer" onClick={this.restart}/>
            </div>
        );
    }
}

export default App;