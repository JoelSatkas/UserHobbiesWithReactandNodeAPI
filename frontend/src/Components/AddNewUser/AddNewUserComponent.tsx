import React from 'react';
import {createStyles, Grid, InputBase, makeStyles, Paper, Theme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';

type AddNewUserProps = {
    onSubmit: (newName: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

const AddNewUser = (props: AddNewUserProps) => {
    const classes = useStyles();

    const searchPressed = (e: any) => {
        e.preventDefault();
        props.onSubmit(e.target[0].value);
        e.target[0].value = "";
    };

    return (
        <Grid container justify = "center" style={{margin: '20px'}}>
            <Paper component="form" onSubmit={searchPressed} className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder='Add New User'
                    inputProps={{ 'aria-label': `Add New User` }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <AddIcon />
                </IconButton>
            </Paper>
        </Grid>
    );
};

export default AddNewUser;
