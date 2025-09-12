const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CheckmarkCircleFilled = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) =>
      /*#__PURE__*/ _reactJsxRuntime.jsx("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m5.707 7.293a1 1 0 0 0-1.414 0l-5.695 5.695c-.238.238-.371.37-.475.457l-.014.01-.01-.012a9 9 0 0 1-.406-.52L7.8 11.4a1 1 0 1 0-1.6 1.2l1.893 2.524c.18.24.354.472.514.652.168.188.389.397.698.533a2 2 0 0 0 1.34.095c.325-.09.573-.267.765-.428.185-.156.39-.361.602-.574l5.695-5.695a1 1 0 0 0 0-1.414",
          clipRule: "evenodd",
        }),
      }))
);
CheckmarkCircleFilled.displayName = "CheckmarkCircleFilled";
export { CheckmarkCircleFilled };
export default CheckmarkCircleFilled;
