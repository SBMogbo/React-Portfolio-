import React from 'react';
import subtrack from "../assets/subtrack.jpg"
import Card from "./Card"
import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



class Carousel extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        items:[
          {
            id:0,
            title: "Employee Directory",
            subTitle:"A employee directory with React",
            imgSrc:"https://s3.amazonaws.com/static.graphemica.com/glyphs/i500s/000/010/210/original/0045-500x500.png?1275328215",
            link:"https://sbmogbo.github.io/Employee-Directory/",
            selected: false

          },
          {
            id:1,
            title: "Necesito Cafecito",
            subTitle:"A coffee finder site",
            imgSrc:"https://www.creativefabrica.com/wp-content/uploads/2019/03/Coffee-cup-icon-by-LeisureProjects-580x387.jpg",
            link:"https://lisamcgautier.github.io/ourFirstProject/#!",
            selected: false

          },
          {
            id:2,
            title: "Subtrack",
            subTitle:"Subscription Tracker",
            imgSrc:subtrack,
            link:"https://glacial-shore-36326.herokuapp.com/signup",
            selected: false

          },

        ]

      }
  }
  handleCardClick =(id,card)=>{
    console.log(id)
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach(item=>{
      if(item.id !== id){
        item.selected = false;
      }
    });
    this.setState({
      items
    })
  }
  makeItems= (items) =>{
    return items.map(item =>{
      return <Card item={item} click={(x => this.handleCardClick(item.id, x))} key={item.id} />
    })
  }
  render(){
    return(
      <Container fluid={true}>
        <Row className="justify-content-around"style={{backgroundColor: "lightblue"}}>
      {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )
  }
}


export default Carousel