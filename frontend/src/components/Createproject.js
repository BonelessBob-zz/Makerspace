import React from 'react'
import styles from '../main.scss'
import { withRouter } from 'react-router'
import { 
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    createMuiTheme, 
    ThemeProvider
 } from "@material-ui/core";
 import { DropzoneArea } from 'material-ui-dropzone';

 /* const theme = createMuiTheme({
    palette: {
      primary: {
        main: "HEXADECIMAL COLOR"
      },
      secondary: {
        main: "HEXADECIMAL COLOR"
      }
    }
  }); */

 class Createproject extends React.Component {

    componentWillUnmount() {
        this.props.changeBg()
    }


     render(){
         return(
            <Card className={styles.card}>
                <DropzoneArea
                    acceptedFiles={['image/*']}
                    dropzoneText={"Cover photo: Click or drag and drop"}
                    onChange={(files) => console.log('Files:', files)}
                    filesLimit={1}
                    dropzoneClass={styles.dropzone}
                    fullWidth={false}
                />

                <CardContent className={styles.content}>
                    <Typography gutterBottom variant="h1" component="h1" className={styles.headerInput}>
                        <TextField class={styles.headerInput} placeholder="Title" fullWidth multiline/>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={styles.descriptionInput}>
                        <TextField placeholder="Description" variant="filled" fullWidth multiline/>
                    </Typography>
                    <Button className={styles.submitButton}>Submit</Button>
                </CardContent>
            </Card>
         )
     }
 }

 export default withRouter(Createproject)