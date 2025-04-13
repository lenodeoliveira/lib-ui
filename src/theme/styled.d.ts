import 'styled-components';
import type { ThemeDefinition } from './type';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeDefinition {}
}