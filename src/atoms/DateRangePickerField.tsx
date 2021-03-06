import { useCallback } from 'react'
import { DatePicker, Form } from 'antd'
import { WrappedFieldProps } from 'redux-form'
import { RangePickerProps } from 'antd/es/date-picker'
import { forEach, isEmpty } from 'lodash'
import { FormItemProps } from 'antd/lib/form/FormItem'
import dayjs, { Dayjs } from 'dayjs'
import cx from 'classnames'

import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_INIT_FORMAT } from '../utils/enums'
import { formFieldID } from '../utils/helper'

export type Props = WrappedFieldProps &
	FormItemProps &
	RangePickerProps & {
		disableFuture?: boolean // for disable startDate from past
		disablePast?: boolean // for disable startDate from past
		itemRef?: any
	}

const { RangePicker } = DatePicker

const DateRangePickerField = (props: Props) => {
	const {
		renderExtraFooter,
		input,
		placeholder,
		label,
		format = DEFAULT_DATE_FORMAT,
		open,
		getPopupContainer,
		style,
		dropdownClassName,
		separator,
		suffixIcon,
		disableFuture,
		disablePast,
		disabledDate,
		itemRef,
		required,
		meta,
		size,
		disabled,
		className
	} = props

	const onFocus = (e: any) => {
		if (input.onFocus) {
			input.onFocus(e)
		}
	}

	const value: any = []
	forEach(input?.value, (val) => {
		if (val && dayjs(val).isValid()) {
			value.push(dayjs(val))
		}
	})

	const onChange = useCallback(
		(vals: any) => {
			if (!isEmpty(vals)) {
				const formattedValues = {
					dateFrom: vals[0].format(DEFAULT_DATE_INIT_FORMAT),
					dateTo: vals[1].format(DEFAULT_DATE_INIT_FORMAT)
				}
				input.onChange(formattedValues)
			} else {
				input.onChange(null)
			}
		},
		[input]
	)

	const disabledDateWrap = useCallback(
		(currentDate: Dayjs) => {
			let disable = false
			if (disabledDate) {
				disable = disabledDate(currentDate)
			} else if (disableFuture) {
				disable = currentDate && currentDate > dayjs().endOf('day')
			} else if (disablePast) {
				disable = currentDate && currentDate < dayjs().startOf('day')
			}
			return disable
		},
		[disableFuture, disablePast, disabledDate]
	)

	return (
		<Form.Item style={style} label={label} required={required} help={meta?.touched && meta?.error} validateStatus={meta?.error && meta?.touched ? 'error' : undefined}>
			<div id={formFieldID(meta?.form, input?.name)}>
				<RangePicker
					ref={itemRef}
					className={cx('date-picker', className)}
					value={value}
					onChange={onChange}
					format={format}
					onFocus={onFocus}
					placeholder={placeholder}
					suffixIcon={suffixIcon}
					separator={separator}
					open={open}
					disabledDate={disabledDateWrap}
					dropdownClassName={dropdownClassName}
					renderExtraFooter={renderExtraFooter}
					getPopupContainer={getPopupContainer || ((node) => node)}
					size={size}
					disabled={disabled}
				/>
			</div>
		</Form.Item>
	)
}

export default DateRangePickerField
