/**
 * Created by canfoo on 2017/12/10.
 */
import { Dimensions, PixelRatio } from 'react-native'

global.gScreen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    navBarHeight: __IOS__ ? 64 : 50,
    navBarPaddingTop: __IOS__ ? 20 : 0,
    onePix: 1 / PixelRatio.get()
}
