import React, {Component} from 'react';
import ReactPlayer from "react-player";
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { isCompositeComponent } from 'react-dom/test-utils';

export class VideoDisplay extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
      }

    render(){
        const { values, handleChange } = this.props;
        console.log(values)
        return(
            <MuiThemeProvider>
              <>
                <Dialog
                  open
                  fullWidth
                  maxWidth='sm'
                >
                  <AppBar />

                  <ReactPlayer
                  url={values.selectedLink}
                  controls="true"
                  />
                  
      
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>
      
                </Dialog>
              </>
            </MuiThemeProvider>
        );
    }
}

export default VideoDisplay;