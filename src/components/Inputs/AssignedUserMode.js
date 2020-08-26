import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { RadioGroupField } from '../index'

const assignedUserModeOptions = [
    { value: 'ANY', label: i18n.t('Any') },
    { value: 'CURRENT', label: i18n.t('Current') },
    { value: 'NONE', label: i18n.t('None') },
    { value: 'PROVIDED', label: i18n.t('Provided') },
]
const defaultAssignedUserModeOption = assignedUserModeOptions[0]

const NAME = 'assignedUserMode'
const DATATEST = 'input-assigned-user-mode'
const LABEL = i18n.t('Assigned user mode')

const AssignedUserMode = () => (
    <RadioGroupField
        name={NAME}
        label={LABEL}
        options={assignedUserModeOptions}
        dataTest={DATATEST}
    />
)

export { AssignedUserMode, defaultAssignedUserModeOption }