import { locationAssign, compressionToName } from '../../utils/helper'

import { jsDateToISO8601, pathToId } from '../../utils/helper'
import {
    DATE_BEFORE_VALIDATOR,
    DATE_AFTER_VALIDATOR,
} from '../../components/DatePicker/DatePickerField'

const valuesToParams = (
    {
        selectedOrgUnits,
        includeChildren,
        selectedDataSets,
        format,
        compression,
        startDate,
        endDate,
        includeDeleted,
        dataElementIdScheme,
        orgUnitIdScheme,
        idScheme,
    },
    filename
) =>
    [
        `dataElementIdScheme=${dataElementIdScheme}`,
        `orgUnitIdScheme=${orgUnitIdScheme}`,
        `idScheme=${idScheme}`,
        `includeDeleted=${includeDeleted}`,
        `children=${includeChildren}`,
        `startDate=${jsDateToISO8601(startDate)}`,
        `endDate=${jsDateToISO8601(endDate)}`,
        `orgUnit=${selectedOrgUnits.map(o => pathToId(o))}`,
        `dataSet=${selectedDataSets}`,
        `format=${format}`,
        compression ? `compression=${compressionToName(compression)}` : '',
        `attachment=${filename}`,
    ]
        .filter(s => s != '')
        .join('&')

const onExport = (baseUrl, setExportEnabled) => async values => {
    setExportEnabled(false)

    const { format, compression } = values

    // generate URL and redirect
    const apiBaseUrl = `${baseUrl}/api/`
    const endpoint = `dataValueSets`
    const fileExtension = compression ? `${format}.${compression}` : format
    const filename = `${endpoint}.${fileExtension}`
    const downloadUrlParams = valuesToParams(values, filename)
    const url = `${apiBaseUrl}${endpoint}?${downloadUrlParams}`
    locationAssign(url, setExportEnabled)

    // log for debugging purposes
    console.log('data-export:', { url, params: downloadUrlParams })
}

const validate = values => ({
    startDate: DATE_BEFORE_VALIDATOR(values.startDate, values.endDate),
    endDate: DATE_AFTER_VALIDATOR(values.endDate, values.startDate),
})

export { onExport, validate }
