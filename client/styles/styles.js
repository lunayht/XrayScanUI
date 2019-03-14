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
    container: {
        position: 'relative'
    },
    video: {
        width: '100%',
        height: 'auto',
        zIndex: 1
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
    resetbtn: {
        zIndex: 3,
        position: 'absolute',
        right: 0,
        bottom: 4,
        width: 80,
        height: 40
    },
    up_root: {
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
        margin: 10
    },
    controlkey: {
        display: 'flex',
        flexDirection: 'row',
    },
    control_btn: {
        height: 95,
        width: 95,
    },
    control_iconSize: {
        fontSize: 60
    },
    control_text: {
        color: 'white'
    }
}

export default styles;