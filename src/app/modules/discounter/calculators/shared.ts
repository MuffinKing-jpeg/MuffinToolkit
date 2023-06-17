import {valuesControls} from "../form.controls";

export function startEnd(start: number, end: number) {
  const absolute = end - start
  const percent = +((start - end) / start * 100).toPrecision(6)

  valuesControls.absoluteValue.setValue(absolute, {emitEvent: false})
  valuesControls.percent.setValue(percent, {emitEvent: false})
}

export function startAbsolute(start: number, absolute: number) {
  const end = start - absolute
  const percent = +((start - end) / start * 100).toPrecision(6)
  valuesControls.endValue.setValue(end, {emitEvent: false})
  valuesControls.percent.setValue(percent, {emitEvent: false})
}

export function startPercent(start: number, percent: number) {

  const end = +(start - (percent / 100) * start).toPrecision(6)
  const absolute = end - start
  valuesControls.absoluteValue.setValue(absolute, {emitEvent: false})
  valuesControls.endValue.setValue(end, {emitEvent: false})
}

export function endAbsolute(end: number, absolute: number) {
  const start = end - absolute
  const percent = +((start - end) / start * 100).toPrecision(6)
  valuesControls.startValue.setValue(start, {emitEvent: false})
  valuesControls.percent.setValue(percent, {emitEvent: false})
}

export function endPercent(end: number, percent: number) {
  const start = +(end / (1 - (percent / 100))).toPrecision(6)
  const absolute = end - start
  valuesControls.absoluteValue.setValue(absolute, {emitEvent: false})
  valuesControls.startValue.setValue(start, {emitEvent: false})
}
