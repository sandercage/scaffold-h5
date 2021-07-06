/**
 * 环境枚举
 */
export enum ENV_MAP {
    DEV = 'dev',
    TEST = 'test',
    PRD = 'prd',
}

/**
 * 服务域名
 */
const baseHostMap: Record<ENV_MAP, string> = {
    [ENV_MAP.DEV]: 'https://path/to/dev_server',
    [ENV_MAP.TEST]: 'https://path/to/test_server',
    [ENV_MAP.PRD]: 'https://path/to/prd_server',
}

export const currentEnv = (process.env.currentEnv || ENV_MAP.DEV) as ENV_MAP

export const isDev = process.env.NODE_ENV === 'development'

export const isTest = process.env.currentEnv === ENV_MAP.TEST

export const API_BASE_URL = '/api/v1'

// 服务API地址, 用于代理配置
export const BASE_HOST = baseHostMap[currentEnv]
