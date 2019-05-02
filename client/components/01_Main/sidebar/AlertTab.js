import React from 'react';
import { Typography, withStyles, Table, TableRow, TableCell, TableBody, TableHead } from '@material-ui/core';
import io from 'socket.io-client';
import styles from '../../../styles/styles';

const style = {
    alertheader: styles.alertheader,
    log_img: styles.log_img,
    alerttab_div: styles.alerttab_div,
    tablewidth: styles.tablewidth
}

let socket = io.connect("http://localhost:9000");

let rows = [];
let unique = [];

class AlertTab extends React.Component { 

    render() {

        const { classes } = this.props;
        const tableheader = {
            padding: '4px',
            fontSize: 'medium',
        };
        socket.on('log', (logdata) => {
            socket.removeListener('log')
            rows.push(logdata);
            unique = [...new Set(rows)];
            console.log(unique);
        });

        return(
            <div className={classes.alertheader}>
                <Typography variant="title">
                    Threats Detected
                </Typography>
                <Table className={classes.tablewidth}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={tableheader} align="center">Images</TableCell>
                            <TableCell style={tableheader} align="center">Weapons</TableCell>
                            <TableCell style={tableheader} align="center">Percentage</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {unique.map(unique => (
                            <TableRow key={unique.weaponid}>
                                <TableCell align="center">
                                    {<img className={classes.log_img} 
                                    src={`data:image/jpg;base64, ${unique.img}`} alt="Red dot" />}
                                </TableCell>
                                <TableCell align="left">{unique.weapon}</TableCell>
                                <TableCell align="left">{unique.percentage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default (withStyles(style)(AlertTab));