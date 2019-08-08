import i18n from '@dhis2/d2-i18n'
import React from 'react'
import { RadioGroup } from '../FinalFormComponents/RadioGroup'

export const OPTION_UID = { value: 'UID', label: i18n.t('Uid') }
export const OPTION_CODE = { value: 'CODE', label: i18n.t('Code') }
export const OPTION_NAME = { value: 'NAME', label: i18n.t('Name') }
export const OPTION_HR_IDENTIFIER = {
    value: 'ATTRIBUTE:UKNKz1H10EE',
    label: i18n.t('HR Identifier'),
}
export const ORG_UNIT_ID_SCHEME_KEY = 'orgUnitIdScheme'
export const ORG_UNIT_ID_SCHEME_DEFAULT_VALUE = OPTION_UID.value

export const OrgUnitIdScheme = () => (
    <RadioGroup
        name={ORG_UNIT_ID_SCHEME_KEY}
        label={i18n.t('Org unit id scheme')}
        options={[OPTION_UID, OPTION_CODE, OPTION_NAME]}
    />
)