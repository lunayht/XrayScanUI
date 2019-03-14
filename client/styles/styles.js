const styles = {
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
    }
}

export default styles;