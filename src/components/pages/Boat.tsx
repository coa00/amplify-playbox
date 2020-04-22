import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
      // flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '16rem',
    },
  }),
);

export default function Boat() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="名前"
          style={{ margin: 8 }}
          placeholder="艇の名前を入力してください。"
          helperText=""
          className={classes.textField}
          variant="filled"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <TextField
          label="メーカー"
          style={{ margin: 8 }}
          placeholder="艇の名前を入力してください。"
          helperText=""
          className={classes.textField}
          variant="filled"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      
    </div>
  );
}
