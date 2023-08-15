import { PropDataMap } from "@/types/props"
import { PropTable } from "../components/props-table"

const buttonProps: PropDataMap = [
  {
    prop: "variant",
    type: {
      type: "enum",
      values: ["primary", "secondary", "transparent", "danger"],
    },
    defaultValue: "primary",
  },
  {
    prop: "size",
    type: {
      type: "enum",
      values: ["small", "base", "large", "xlarge"],
    },
    defaultValue: "base",
  },
  {
    prop: "format",
    type: {
      type: "enum",
      values: ["default", "icon"],
    },
    defaultValue: "default",
  },
  {
    prop: "isLoading",
    type: "boolean",
    defaultValue: false,
  },
]

const Props = () => {
  return <PropTable props={buttonProps} />
}

export default Props
