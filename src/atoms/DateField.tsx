import { useCallback } from 'react'
import { WrappedFieldProps } from 'redux-form'
import dayjs from 'dayjs'
import cx from 'classnames'
import { FormItemProps } from 'antd/lib/form/FormItem'
import { Form, DatePicker } from 'antd'
import { DatePickerProps } from 'antd/lib/date-picker'

import { DEFAULT_DATE_INIT_FORMAT, DEFAULT_DATE_INPUT_FORMAT, DROPDOWN_POSITION } from '../utils/enums'
// eslint-disable-next-line import/no-cycle
import { formFieldID } from '../utils/helper'

type Props = WrappedFieldProps &
	FormItemProps &
	DatePickerProps & {
		disableFuture?: boolean // for disable startDate from past
		disablePast?: boolean // for disable startDate from past
		hideHelp?: boolean
		/** disable od dátumu D1 do minulosti */
		compareFrom1?: any
		/** disable od dátumu D2 do minulosti */
		compareFrom2?: any
		/** disable od dátumu D1 do budúcnosti */
		compareTo1?: any
		rounded?: boolean
		readOnly?: boolean
		showToday?: any
		validateTo?: string /** disable podla datumu ktory sa posle na validovanie */
	}

const DateField = (props: Props) => {
	const {
		input,
		label,
		required,
		style,
		meta: { form, error, touched },
		format = DEFAULT_DATE_INPUT_FORMAT,
		placeholder,
		disabledDate,
		disabled,
		allowClear,
		hideHelp,
		disableFuture,
		disablePast,
		getPopupContainer,
		compareFrom1,
		compareFrom2,
		compareTo1,
		size,
		rounded,
		readOnly,
		suffixIcon,
		clearIcon,
		showToday = true,
		defaultPickerValue,
		validateTo,
		className
	} = props

	let value

	if (input.value && dayjs(input.value).isValid()) {
		value = dayjs(input.value)
	}

	const disabledDateWrap = useCallback(
		(currentDate: any) => {
			let disable = false
			if (disabledDate) {
				disable = disabledDate(currentDate)
			} else if (disableFuture) {
				disable = currentDate && currentDate > dayjs().endOf('day')
			} else if (disablePast) {
				disable = currentDate && currentDate < dayjs().startOf('day')
			}

			if (compareFrom1 || compareFrom2) {
				const dates = []
				if (compareFrom1) {
					dates.push(compareFrom1)
				}
				if (compareFrom2) {
					dates.push(compareFrom2)
				}
				const date = dayjs.max(dates)
				disable = currentDate.isBefore(date, 'date')
			}

			if (!disable && compareTo1) {
				if (disableFuture) {
					disable = currentDate && currentDate > dayjs().endOf('day')
				} else {
					disable = currentDate.isAfter(compareTo1, 'date')
				}
			}

			if (validateTo) {
				disable = currentDate.isBefore(validateTo)
			}

			return disable
		},
		[compareFrom1, compareFrom2, compareTo1, disableFuture, disablePast, disabledDate, validateTo]
	)

	return (
		<Form.Item
			label={label}
			required={required}
			style={style}
			help={hideHelp ? undefined : touched && error}
			className={cx({ 'form-item-disabled': disabled, readOnly })}
			validateStatus={error && touched ? 'error' : undefined}
		>
			<DatePicker
				id={formFieldID(form, input.name)}
				{...input}
				className={cx('date-input w-full', { 'rounded-full': rounded, 'allow-clear': allowClear }, className)}
				dropdownAlign={DROPDOWN_POSITION.BOTTOM_LEFT}
				onBlur={() => {}}
				onChange={(val) => {
					if (val) {
						input.onChange(val.format(DEFAULT_DATE_INIT_FORMAT))
					} else {
						input.onChange(null)
					}
				}}
				format={format}
				value={value}
				defaultPickerValue={defaultPickerValue}
				size={size}
				clearIcon={clearIcon}
				suffixIcon={suffixIcon}
				placeholder={placeholder}
				disabledDate={disabledDateWrap}
				disabled={disabled}
				allowClear={allowClear}
				getPopupContainer={getPopupContainer || ((node) => node)}
				showToday={showToday}
			/>
		</Form.Item>
	)
}
export default DateField
