import React from 'react';
import {Card, CardActionArea} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

type HobbyListItemProps = {
    hobby: IHobbyModel
}

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const HobbyListItem = (props: HobbyListItemProps) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.hobby.name}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.hobby.passionLevel}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.hobby.year}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default HobbyListItem;
