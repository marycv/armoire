import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'

class clothingUpload extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
render() { 
    return (
        <Container>
            <Form>
                <Form.Group controlId="clothing-type">
                    <Form.Label>What type of article of clothing is your item?</Form.Label>
                <Form.Control as="select" name="type" defaultValue={this.props.inputValues.state} onChange={this.props.handleChange}>
                    <option value= "coats"> Coats </option>
                    <option value= "sweaters-cardigans"> Sweaters & Cardigans</option>
                    <option value= "shirts-blouses">Shirts & Blouses</option>
                    <option value= "tshirts">T-Shirts</option>
                    <option value="pants"> Pants</option>
                    <option value="Dresses">Dresses</option>
                    <option value="undergarments">Undergarments</option>
                    <option value="accessories">Accessories</option>
                    <option value="sports-wear">Sports Wear</option>
                    <input type="submit" value="Sumbit"/>
                </Form.Control>
                </Form.Group>

                <Form.Group controlId="color">
                    <Form.Label>What is the main color of this item?</Form.Label>
                <Form.Control as="select" name="color" defaultValue={this.props.inputValues.state} onChange={this.props.handleChange}>
                    <option value= "white"> White </option>
                    <option value= "black"> Black</option>
                    <option value= "red">Red</option>
                    <option value= "orange">Orange</option>
                    <option value="beige"> Beige</option>
                    <option value="brown">Brown</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                    <option value="other-variety">Other/Variety</option>
                    <input type="submit" value="Submit"/>
                </Form.Control>
                </Form.Group>


                <Form.Group controlId="occassion">
                    <Form.Label>What type of occassion would you wear this garment for?</Form.Label>
                <Form.Control as="select" name="occassion" defaultValue={this.props.inputValues.state} onChange={this.props.handleChange}>
                    <option value= "casual-everyday"> Casual/Everyday </option>
                    <option value= "wedding"> Wedding</option>
                    <option value= "night-out">Night Out</option>
                    <option value= "work">Work</option>
                    <option value="sports"> Sport</option>
                    <option value="costume">Costume</option>
                    <option value="other">Other</option>
                    <input type="submit" value="Submit"/>
                </Form.Control>
                </Form.Group>


                <Form.Group controlId="material">
                    <Form.Label>What material is this garment made of?</Form.Label>
                <Form.Control as="select" name="material" defaultValue={this.props.inputValues.state} onChange={this.props.handleChange}>
                    <option value= "wool"> Wool </option>
                    <option value= "cotton"> Cotton</option>
                    <option value= "silk">Silk</option>
                    <option value= "denim">Denim</option>
                    <option value="leather"> Leather</option>
                    <option value="fur/synthentic-fur">Fur</option>
                    <option value="nylon">Nylon</option>
                    <option value="spandex">Spandex</option>
                    <option value="rayon">Rayon</option>
                    <option value="jute">Jute</option>
                    <option value="combination">Combination</option>
                    <option value="not-sure">Not Sure!</option>
                    <input type="submit" value="Submit"/>
                </Form.Control>
                </Form.Group>

                <Button varient="primary" onClick={this.saveAndContinue}>Continue</Button>

                {/* Should I put an input component here instead? 
                
                <input type="submit" value="Submit">

                */}
                

                {/* uploading image form */}


            </Form>
        </Container>
    )
}
}



