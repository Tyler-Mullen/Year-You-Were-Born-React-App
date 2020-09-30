import React, { Component } from 'react';
import SubjectForm from './SubjectForm';
import YearForm from './YearForm';
import ListPrinter from './ListPrinter';
import QuantityForm from './QuantityForm';

export class StepTracker extends Component {
    state = {
        step: 1,
        year: 1950,
        selectedGenre: '',
        quantity: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { year, selectedGenre, quantity } = this.state;
    
        const values = { year, selectedGenre, quantity };

        switch (step) {
            case 1:
                return(
                    <YearForm
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );

            case 2:
                return(
                  <SubjectForm
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  />  
                );

            case 3:
                return(
                  <QuantityForm
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  />
                );

            case 4:
                return(
                  <ListPrinter
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  />
                );

            default:
                console.log("I am trying to built a year you were born app.");
                console.log("And it appears something has gone wrong.");
        }
    }
}

export default StepTracker;