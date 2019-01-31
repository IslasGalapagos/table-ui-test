export default {
  body: {
    fontFamily: '"Helvetica Neu",Helvetica,Arial',
    padding: '25px',
    backgroundColor: '#f9f9f9',
  },

  '.loader': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',

    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    span: {
      fontSize: '35px',
      fontStyle: 'italic',
      color: '#5d5dff',
    },
  },
};
