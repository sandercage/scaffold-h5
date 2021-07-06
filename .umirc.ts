import { defineConfig } from 'umi'
import { API_BASE_URL, BASE_HOST, isDev } from './src/configs/env'
import { globalVar } from './src/configs/system'

const gennerSassVariables = (sassConsts: Record<string, string | number>) => {
    const sassVariables: string[] = []
    for (let varKey in sassConsts) {
        sassVariables.push(`$${varKey}: ${sassConsts[varKey]};`)
    }
    return sassVariables.join('')
}
const sassVariables = gennerSassVariables(globalVar)

export default defineConfig({
    title: 'scaffold-h5',
    // favicon: 'https://static.cpocar.cn/favicon.ico',
    hash: true,
    webpack5: {},
    mfsu: {},
    dynamicImport: {
        loading: '@/components/system/loading',
    },
    nodeModulesTransform: {
        type: 'none',
    },
    sass: {
        implementation: require('node-sass'),
        prependData: sassVariables,
    },
    theme: {
        '@primary-color': globalVar.primaryColor,
        '@link-color': globalVar.primaryTapColor,
    },
    define: {
        'process.env.currentEnv': process.env.currentEnv,
        ...globalVar,
    },
    proxy: {
        [`${API_BASE_URL}`]: {
            target: `${BASE_HOST}${API_BASE_URL}`,
            changeOrigin: true,
            pathRewrite: {
                [`^${API_BASE_URL}`]: '',
            },
        },
    },
    fastRefresh: {},
    dva: false,
})
