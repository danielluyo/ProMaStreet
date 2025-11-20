'use client'

import { ReactNode } from 'react'
import {
  FormControl,
  FormDescription,
  FormField as ShadcnFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Control, FieldPath, FieldValues } from 'react-hook-form'

interface BaseFormFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  label?: string
  description?: string
  placeholder?: string
  disabled?: boolean
}

interface InputFormFieldProps<TFieldValues extends FieldValues> extends BaseFormFieldProps<TFieldValues> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'date' | 'datetime-local'
  inputMode?: 'text' | 'email' | 'numeric' | 'tel' | 'url'
  min?: number
  max?: number
  step?: number
}

export function InputFormField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  type = 'text',
  inputMode,
  disabled,
  min,
  max,
  step,
}: InputFormFieldProps<TFieldValues>) {
  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              inputMode={inputMode}
              placeholder={placeholder}
              disabled={disabled}
              min={min}
              max={max}
              step={step}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

interface TextareaFormFieldProps<TFieldValues extends FieldValues> extends BaseFormFieldProps<TFieldValues> {
  rows?: number
}

export function TextareaFormField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  rows = 4,
  disabled,
}: TextareaFormFieldProps<TFieldValues>) {
  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              placeholder={placeholder}
              rows={rows}
              disabled={disabled}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

interface SelectFormFieldProps<TFieldValues extends FieldValues> extends BaseFormFieldProps<TFieldValues> {
  options: { value: string; label: string }[]
}

export function SelectFormField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder = 'Select an option',
  options,
  disabled,
}: SelectFormFieldProps<TFieldValues>) {
  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

interface CheckboxFormFieldProps<TFieldValues extends FieldValues> extends BaseFormFieldProps<TFieldValues> {
  checkboxLabel: string | ReactNode
}

export function CheckboxFormField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  checkboxLabel,
  description,
  disabled,
}: CheckboxFormFieldProps<TFieldValues>) {
  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <div className="flex items-start space-x-3">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={disabled}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="font-normal">{checkboxLabel}</FormLabel>
              {description && <FormDescription>{description}</FormDescription>}
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

