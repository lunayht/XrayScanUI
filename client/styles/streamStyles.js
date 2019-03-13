const streamStyles = {
    container: {
        position: 'relative'
    },
    video: {
        height: 650,
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
        height: 650,
        width: 1155.55
    },
    resetbtn: {
        zIndex: 3,
        position: 'absolute',
        right: 0,
        bottom: 4,
        width: 80,
        height: 40
    }
}

export default streamStyles;