import {valuesControls} from "../form.controls";
import {startAbsolute, startEnd, startPercent} from "./shared";

export const fromStart = () => {
  const end = valuesControls.endValue.value
  const start = valuesControls.startValue.value
  const percent = valuesControls.percent.value
  const absolute = valuesControls.absoluteValue.value
  if (start && end) {
    startEnd(start, end)

  } else if (start && percent) {
    startPercent(start, percent)

  } else if (start && absolute) {
    startAbsolute(start, absolute)

  }
}

