import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useConfig } from '@dhis2/app-runtime'
import { ReactFinalForm } from '@dhis2/ui'
import i18n from '@dhis2/d2-i18n'

import { getPrevJobDetails } from '../../utils/helper'
import {
    FileUpload,
    Format,
    formatOptions,
    defaultFormatOption,
    DataElementIdScheme,
    defaultDataElementIdSchemeOption,
    EventIdScheme,
    defaultEventIdSchemeOption,
    IdScheme,
    defaultIdSchemeOption,
    OrgUnitIdScheme,
    defaultOrgUnitIdSchemeOption,
    ImportButtonStrip,
    FormAlerts,
} from '../../components/Inputs/index'
import {
    Page,
    MoreOptions,
    BasicOptions,
    SchemeContainer,
    EventIcon,
} from '../../components/index'
import { TaskContext, getNewestTask } from '../../contexts/index'
import { onImport } from './form-helper'

// PAGE INFO
const PAGE_NAME = i18n.t('Event import')
const PAGE_DESCRIPTION = i18n.t(
    'Import events for programs, stages and tracked entities using the DXF 2 format.'
)
const PAGE_ICON = <EventIcon />

const { Form } = ReactFinalForm

const createInitialValues = prevJobDetails => ({
    files: prevJobDetails.files,
    format: prevJobDetails.format || defaultFormatOption,
    dataElementIdScheme:
        prevJobDetails.dataElementIdScheme || defaultDataElementIdSchemeOption,
    orgUnitIdScheme:
        prevJobDetails.orgUnitIdScheme || defaultOrgUnitIdSchemeOption,
    eventIdScheme: prevJobDetails.eventIdScheme || defaultEventIdSchemeOption,
    idScheme: prevJobDetails.idScheme || defaultIdSchemeOption,
})

const EventImport = () => {
    const {
        tasks: { event: eventTasks },
        addTask,
    } = useContext(TaskContext)

    // recreating a previously run job
    const query = useLocation().query
    const prevJobDetails = getPrevJobDetails(query, eventTasks)
    const initialValues = createInitialValues(prevJobDetails)

    const [progress, setProgress] = useState(0)
    const [showFullSummaryTask, setShowFullSummaryTask] = useState(false)
    const { baseUrl } = useConfig()

    const onSubmit = onImport({
        baseUrl,
        setProgress,
        addTask,
        setShowFullSummaryTask,
    })

    return (
        <Page
            title={PAGE_NAME}
            desc={PAGE_DESCRIPTION}
            icon={PAGE_ICON}
            loading={progress}
            dataTest="page-import-event"
            summaryTask={getNewestTask(eventTasks)}
            showFullSummaryTask={showFullSummaryTask}
        >
            <Form
                onSubmit={onSubmit}
                initialValues={initialValues}
                subscription={{ values: true, submitError: true }}
                render={({ handleSubmit, form, submitError }) => (
                    <form onSubmit={handleSubmit}>
                        <BasicOptions>
                            <FileUpload
                                helpText={i18n.t(
                                    'Supported file types: JSON, CSV, and XML.'
                                )}
                            />
                            <Format
                                availableFormats={formatOptions}
                                type="import"
                            />
                        </BasicOptions>
                        <MoreOptions>
                            <SchemeContainer>
                                <EventIdScheme />
                                <DataElementIdScheme />
                                <OrgUnitIdScheme />
                                <IdScheme />
                            </SchemeContainer>
                        </MoreOptions>
                        <ImportButtonStrip form={form} />
                        <FormAlerts alerts={submitError} />
                    </form>
                )}
            />
        </Page>
    )
}

export { EventImport }
