import React from 'react';
import {createStyles, Grid, InputBase, makeStyles, Paper, Theme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';

type AddNewHobbyProps = {
    onSubmit: (newHobbyItem: INewHobbyObject) => void
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

const AddNewHobby = (props: AddNewHobbyProps) => {
    const classes = useStyles();

    const searchPressed = (e: any) => {
        e.preventDefault();

        let newHobbyItem: INewHobbyObject = {
            passionLevel: e.target[0].value,
            name: e.target[1].value,
            year: e.target[2].value
        };

        props.onSubmit(newHobbyItem);
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
    };

    return (
        <Grid container justify = "center" style={{margin: '20px'}}>
            <Paper component="form" onSubmit={searchPressed} className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder='Passion Level'
                    inputProps={{ 'aria-label': `Passion Level` }}
                />
                <InputBase
                    className={classes.input}
                    placeholder='Hobby Name'
                    inputProps={{ 'aria-label': `Hobby Name` }}
                />
                <InputBase
                    className={classes.input}
                    placeholder='Enter Year'
                    inputProps={{ 'aria-label': `Enter Year` }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <AddIcon />
                </IconButton>
            </Paper>
        </Grid>
    );
};

export default AddNewHobby;
