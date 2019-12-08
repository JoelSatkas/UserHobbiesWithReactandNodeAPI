import React from 'react';
import UserListItem from "../UserListItem/UserListItemComponent";
import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";

type UserListProps = {
    users: IUserModel[]
    select: (userName: string) => void
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

const UserList = (props: UserListProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container
                  direction="column"
                  justify="center"
                  alignItems="flex-start">
                {props.users.map( (user: IUserModel) => {
                    return <Grid key={user._id} item xs={12}>
                            <UserListItem user={user} selected={props.select} />
                        </Grid>
                })}
            </Grid>
        </div>
    );
};

export default UserList;
