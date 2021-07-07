export const globalVar = {
    classPre: 'scaffold-h5',
    primaryColor: '#FF5307',
    primaryTapColor: '#e7500e',
}

const gennerSassVariables = (sassConsts: Record<string, string>) => {
    return Object.entries(sassConsts)
        .map(([key, value]) => `$${key}: ${value};`)
        .join('')
}
export const sassVariables = gennerSassVariables(globalVar)
