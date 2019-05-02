const styles = {
    login_container: {
        position: 'relative'
    },
    login_background: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%',
        maxHeight: '100vh',
        height: '-webkit-fill-available',
        zIndex: -1
    },
    login_root: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    login_card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.9',
    },
    login_cardHeader: {
        paddingBottom: '0',
        paddingTop: '30px'
    },
    login_cardcontent: {
        paddingTop: '0'
    },
    form_input: {
        width: '400px'
    },
    form_btnDiv: {
        margin: 'auto',
        textAlign: 'center'
    },
    form_btn: {
        marginTop: 15,
        marginBottom: 15
    },
    container: {
        position: 'relative',
        overflow: 'hidden',
        // marginLeft: '-140px',
        // border: 'white',
        // borderStyle: 'solid',
        // borderWidth: '2px',
    },
    video: {
        width: '100%',
        height: 'auto',
        zIndex: 1,
        marginBottom: '-40px',
        left: '-140px'
        // marginTop: '-60px'
    },
    root: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        width: '100%',
        height: '100%'
    },
    bluebackground:{
        backgroundColor: '#2196f3',
        '&:hover': {
            backgroundColor: '#40a8f9 !important',
        }
    },
    greenbackground:{
        backgroundColor: '#6be226',
        '&:hover': {
            backgroundColor: '#91eb5c !important',
        }
    },
    redbackground:{
        backgroundColor: '#eb5c5c',
        '&:hover': {
            backgroundColor: '#d67777 !important',
        }
    },
    resetbtn: {
        zIndex: 3,
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 140,
        height: 40,
        margin: '10px'
    },
    up_root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '14vh',
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.13)",
        borderRadius: '8px',
        background: 'lightgray'+'20',
        marginTop:'5px',
        marginBottom:'14px',
    },
    list_root:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '9vh'
    },

    up_img: {
        height: '4vw',
        width: '4vw',
        margin: 10
    },
    up_text: {
        fontSize: '2vw',
        margin: 0
    },
    up_btn: {
        padding: 0
    },
    sidebar_root: {
        display: 'flex',
        flexDirection: 'column'
    },
    lta_logo: {
        width: '100%',
        height: 'auto'
    },
    status: {
        margin: 0,
        position: 'relative'
    },
    controlkey: {
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
    },
    control_btn: {
        width: '100%',
        margin: '5px',
    },
    control_iconSize: {
        fontSize: 60
    },
    control_text: {
        color: 'white'
    },
    alert: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    alerttitle: {
        fontWeight: 'bold'
    },
    warningicon: {
        margin: 10,
        width: 40,
        height: 40
    },
    alertcontent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    contentdiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    alertdiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    weapontitle: {
        fontWeight: 'bold',
        marginRight: 10,
        marginLeft: 10
    },
    action: {
        justifyContent: 'center'
    },
    alertbtn: {
        width: 250,
        fontSize: 18
    },
    imgstyle: {
        maxHeight: 300,
        maxWidth: 300,
        height: 'auto',
        width: 'auto',
        border: '#FF0000 4px solid'
    },
    alertheader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: 0
    },
    log_img: {
        maxHeight: 50,
        maxWidth: 50,
        height: 'auto',
        width: 'auto'
    },
    alerttab_div: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tablewidth: {
        width: '100%',
        text: '',
    },
    zoombutton:{
        backgroundColor:"#dddddd",
        opacity: 0,
        '&:hover': {
            opacity: 0.1,
        }

    }
}

export default styles;