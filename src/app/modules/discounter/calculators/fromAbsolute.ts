import {valuesControls} from "../form.controls";
import {endAbsolute, startAbsolute} from "./shared";

export const fromAbsolute = () => {
  const end = valuesControls.endValue.value
  const start = valuesControls.startValue.value
  const absolute = valuesControls.absoluteValue.value
  if (start && absolute) {
    startAbsolute(start, absolute)
  } else if (end && absolute) {
    endAbsolute(end, absolute)
  }
}
