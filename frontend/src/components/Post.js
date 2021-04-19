import React from 'react'
import styles from '../main.scss'
import Temporary from '../temporary.jpg'
import { useHistory, withRouter } from 'react-router'
import { 
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CardActions,
    Typography,
    requirePropFactory
 } from "@material-ui/core";

 var Post = () => {
     return(
         <Card className={styles.card}>
             <CardActionArea className={styles.action}>
                 <CardMedia 
                    classes={{
                        root: styles.image,
                        media: styles.image,
                        img: styles.image
                    }}
                    image={require('../temporary.jpg')}
                 />

                <CardContent className={styles.content}>
                    <Typography gutterBottom variant="h5" component="h2" className={styles.header}>
                        Håkon
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={styles.description}>
                        Håkon is in love with the feeling of filling his giant upper lip to the brim with strong snus, even if it kills him. Without snus the world is meaningless and Håkon becomes a very sad person. Every morning he pulls out his favourite box of snus (the one with the most deadly side-effects), licking his fingers in appreciation, before digging his sticky fingers in to the black box promising him a short moment of euphoric nicotine bliss.
                    </Typography>
                </CardContent>
             </CardActionArea>
         </Card>
     )
 }

 export default withRouter(Post)