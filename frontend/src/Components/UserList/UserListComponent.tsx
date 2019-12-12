import React from 'react';
import UserListItem from "../UserListItem/UserListItemComponent";
import {createStyles, Grid, GridList, GridListTile, GridListTileBar, makeStyles, Theme} from "@material-ui/core";
import AddNewUser from "../AddNewUser/AddNewUserComponent";

type UserListProps = {
    users: IUserModel[]
    select: (userName: string) => void
    addNewUser: (userName: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        gridList: {
            width: 500,
            height: 450,
        },
    }),
);

const UserList = (props: UserListProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid  container
                  direction="column"
                  justify="center"
                  alignItems="flex-start">
                <Grid key='AddNewUserImport' item xs={12}>
                    <AddNewUser onSubmit={props.addNewUser}/>
                </Grid>
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
