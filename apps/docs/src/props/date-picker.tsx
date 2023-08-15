import { PropDataMap } from "@/types/props"
import { PropTable } from "../components/props-table"

const datePickerProps: PropDataMap = [
  {
    prop: "mode",
    type: {
      type: "enum",
      values: ["single", "range"],
    },
    defaultValue: "single",
  },
  {
    prop: "presets",
    type: "DatePreset | DatePreset[]",
    defaultValue: undefined,
  },
  {
    prop: "showTimePicker",
    type: "boolean",
    defaultValue: false,
  },
]

const Props = () => {
  return <PropTable props={datePickerProps} />
}

export default Props
