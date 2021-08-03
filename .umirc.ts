import { defineConfig } from 'umi'
import { API_BASE_URL, BASE_HOST, isDev } from './src/configs/env'
import { globalVar, sassVariables } from './src/configs/system'

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
    ignoreMomentLocale: true,
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
})
