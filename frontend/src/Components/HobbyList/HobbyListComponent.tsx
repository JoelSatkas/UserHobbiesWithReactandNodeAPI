import React from 'react';
import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import UserListItem from "../UserListItem/UserListItemComponent";
import HobbyListItem from "../HobbyListItem/HobbyListItemComponent";

type HobbyListProps = {
    hobbies: IHobbyModel[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

const HobbyList = (props: HobbyListProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container
                  direction="column"
                  justify="flex-start"
                  alignItems="center">
                {props.hobbies.map( (hobby: IHobbyModel) => {
                    return <Grid key={hobby._id} item xs={12}>
                        <HobbyListItem hobby={hobby} />
                    </Grid>
                })}
            </Grid>
        </div>
    );
};

export default HobbyList;
