import { Appearance } from "react-native"

const isDarkMode = Appearance.getColorScheme() === 'dark';
const FontConstants = {
    familyRegular: 'sans-serif',
    sizeTitle: 18,
    sizeRegular: 14,
    weightBold: 'bold',
};

const ColorConstants = {
    background: isDarkMode ? '#333333' : '#efefef',
    backgroundMedium: isDarkMode ? '#666666' : '#dddddd',
    font: isDarkMode ? '#eeeeee' : '#222222',

    normal: isDarkMode ? '#cccccc' : '#cccccc',
    title: isDarkMode ? '#666666' : '#666666',
    highlight: isDarkMode ? 'lightblue' : 'lightblue'
};

const SizeConstants = {
    paddingSmall: 2,
    paddingRegular: 8,
    paddingLarge: 16,
    borderRadius: 8
};

export {FontConstants, ColorConstants, SizeConstants}