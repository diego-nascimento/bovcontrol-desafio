
import 'styled-components'
import { Theme } from './theme'


export type CustomTheme = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme{}
}
