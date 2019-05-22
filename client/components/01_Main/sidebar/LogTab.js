import React from 'react';
import { Typography, withStyles, Table, TableRow, TableCell, TableBody, TableHead } from '@material-ui/core';
import styles from '../../../styles/styles';
import { connect } from 'react-redux';

const style = {
    alertheader: styles.alertheader,
    log_img: styles.log_img,
    tablewidth: styles.tablewidth
}

class LogTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unique: []
        }
    } 
    
    componentDidMount() {
        if (this.props.data.savedata.length > 0) {
            this.setState({
                unique: this.props.data.savedata
            })
        }
	}

    render() {

        const { classes } = this.props;

        const tableheader = {
            padding: '4px',
            fontSize: 'medium',
        };

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
                        {this.state.unique.map(unique => (
                            <TableRow key={unique.img}>
                                <TableCell align="center">
                                    {<img className={classes.log_img} 
                                    src={`data:image/jpg;base64, ${unique.img}`} alt="Threat img" />}
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

function mapStateToProps(state) {
    const data = state.mach
    return { data }
}

export default connect(mapStateToProps)(withStyles(style)(LogTab));