import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card, CardActionArea} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

type UserListItemProps = {
    user: IUserModel
    selected: (userName: string) => void
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

const UserListItem = (props: UserListItemProps) => {
    const classes = useStyles();

    const handleClick = () => {
        props.selected(props.user._id)
    };

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={handleClick}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.user.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserListItem;
