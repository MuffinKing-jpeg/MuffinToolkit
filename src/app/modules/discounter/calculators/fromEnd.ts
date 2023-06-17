import {valuesControls} from "../form.controls";
import {endAbsolute, endPercent, startEnd} from "./shared";

export const fromEnd = () => {
  const end = valuesControls.endValue.value
  const start = valuesControls.startValue.value
  const percent = valuesControls.percent.value
  const absolute = valuesControls.absoluteValue.value
  if (start && end) {
    startEnd(start, end)
  } else if (end && percent) {
    endPercent(end, percent)
  } else if (end && absolute) {
    endAbsolute(end, absolute)
  }
}

