import type { Dayjs, OpUnitType, QUnitType } from 'dayjs'
import dayjs from 'dayjs'
import UTC from 'dayjs/plugin/utc'

dayjs.extend(UTC)

export enum DateStringifyFormatter {
    YEAR = 'YYYY',
    MONTH = 'YYYY-MM',
    DAY = 'YYYY-MM-DD',
    MINUTE = 'YYYY-MM-DD HH:mm',
    SECOND = 'YYYY-MM-DD HH:mm:ss',
    UTC_SECOND = 'YYYY-MM-DDTHH:mm:ss[Z]',
    MINUTE_NO_YEAR = 'MM-DD HH:mm',
}

export type DaySourceType = string | number | Date | Dayjs

/**
 * 日期转字符串
 * @param date
 * @param formatStr
 */
export const stringifyDate = (
    date: Date | Dayjs | string,
    formatStr = DateStringifyFormatter.DAY,
) => {
    return dayjs(date).format(formatStr)
}

/**
 * 日期转UTC字符串
 * @param date
 */
export const stringifyDateToUTC = (
    date: DaySourceType,
    formatStr = DateStringifyFormatter.UTC_SECOND,
) => {
    return dayjs(date).utc().format(formatStr)
}

/**
 * 将字符串或日期类型解析成dayjs类型
 * @param strOrDate
 */
export const parseStrOrDateToDayjs = (strOrDate: Date | string) => {
    return dayjs(strOrDate)
}

/**
 * 将dayjs或string转成日期类型（Date）
 * @param dayjsOrStr
 */
export const parseStrOrDayjsToDate = (dayjsOrStr: Dayjs | string) => {
    return dayjs(dayjsOrStr).toDate()
}

/**
 * @param unit
 * @param fromDay
 * quarter 依赖 QuarterOfYear 插件
 */
export const getEndOf = (unit: OpUnitType | QUnitType, fromDay?: DaySourceType) => {
    return dayjs(fromDay).endOf(unit as OpUnitType)
}

/**
 * @param unit
 * @param fromDay
 * quarter 依赖 QuarterOfYear 插件
 */
export const getStartOf = (unit: OpUnitType | QUnitType, fromDay?: DaySourceType) => {
    return dayjs(fromDay).startOf(unit as OpUnitType)
}

/**
 * 比较两个Day是否有相同的年/月/日等
 * @param unit
 * @param fromDay
 */
export const isSame = (
    source: DaySourceType,
    target: DaySourceType,
    unit: OpUnitType | QUnitType,
) => {
    return dayjs(source).isSame(dayjs(target), unit as OpUnitType)
}
