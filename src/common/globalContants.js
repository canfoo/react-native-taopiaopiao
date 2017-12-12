/**
 * Created by canfoo on 2017/12/10.
 */
import { Dimensions, PixelRatio } from 'react-native'

global.gScreen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePix: 1 / PixelRatio.get(),
  pxTopt: px => PixelRatio.roundToNearestPixel(px)
}
