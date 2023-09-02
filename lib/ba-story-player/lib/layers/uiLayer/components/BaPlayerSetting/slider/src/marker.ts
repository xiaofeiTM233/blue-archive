import { computed, defineComponent, h } from "vue";
import type { CSSProperties, ExtractPropTypes } from "vue";
import { buildProps, definePropType } from "../utils/runtime";
import { isString } from "../utils/types";
import { useNamespace } from "../utils/useNamespace";

export type SliderMarkerProps = ExtractPropTypes<typeof sliderMarkerProps>;
export const sliderMarkerProps = buildProps({
  mark: {
    type: definePropType<
      | string
      | {
          style: CSSProperties;
          label: any;
        }
    >([String, Object]),
    default: undefined,
  },
} as const);

export default defineComponent({
  name: "ElSliderMarker",
  props: sliderMarkerProps,
  setup(props) {
    const ns = useNamespace("slider");
    const label = computed(() => {
      return isString(props.mark) ? props.mark : props.mark!.label;
    });
    const style = computed(() =>
      isString(props.mark) ? undefined : props.mark!.style
    );

    return () =>
      h(
        "div",
        {
          class: ns.e("marks-text"),
          style: style.value,
        },
        label.value
      );
  },
});