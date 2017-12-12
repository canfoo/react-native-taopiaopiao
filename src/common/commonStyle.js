/**
 * Created by canfoo on 2017/12/10.
 */

const borderStyle = {
  borderStyle: 'solid',
  borderColor: '#d9d9d9'
}

const twoPix = 2 * gScreen.onePix

export default {
  borderStyle: {
    ...borderStyle
  },
  basicFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  borderBox: {
    ...borderStyle,
    borderWidth: twoPix
  },
  borderLeft: {
    ...borderStyle,
    borderLeftWidth: twoPix
  },
  borderRight: {
    ...borderStyle,
    borderRightWidth: twoPix
  },
  borderTop: {
  ...borderStyle,
    borderTopWidth: twoPix
  },
  borderBottom: {
    ...borderStyle,
    borderBottomWidth: twoPix
  }
}
