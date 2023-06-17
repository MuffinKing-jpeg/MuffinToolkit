import {valuesControls} from "../form.controls";
import {endPercent, startPercent} from "./shared";

export const fromPercent = () => {
  const end = valuesControls.endValue.value
  const start = valuesControls.startValue.value
  const percent = valuesControls.percent.value
  if (start && percent) {
    startPercent(start, percent)
  } else if (end && percent) {
    endPercent(end, percent)
  }
}
