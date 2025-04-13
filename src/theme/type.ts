export interface ThemeDefinition {
    palletete: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        error: string;
        warning: string;
        success: string;
        info: string;
        light: string;
        dark: string;
        muted: string;
        accent: string;
        highlight: string;
        shadow: string;
        border: string;
        link: string;
        linkHover: string;
        linkActive: string;
        linkVisited: string;
        linkDisabled: string;
        linkFocus: string;
        linkActiveHover: string;
        linkActiveFocus: string;
        linkVisitedHover: string;
        linkVisitedFocus: string;
        linkDisabledHover: string;  
    },
    radius: {
        small: string;
        medium: string;
        large: string;
        circle: string;
        pill: string;
        square: string;
        rounded: string;
    },
    spacing: (factor: number) => string;
    font: {
        family: string;
        size: {
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            xxxlarge: string;
            tiny: string;
            xsmall: string;
        }
    }
}