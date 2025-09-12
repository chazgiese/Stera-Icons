import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const UserFilled = memo(
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
          d: "M12 2.5A5.5 5.5 0 0 1 17.5 8a5.5 5.5 0 0 1-2.774 4.774c2.951.628 5.175 2.32 6.186 4.91.12.31.233.596.29.881.062.308.06.605-.016.958-.063.295-.228.612-.405.872s-.413.526-.664.692c-.651.429-1.336.413-2.317.413H6.2c-.98 0-1.665.016-2.316-.413-.251-.166-.486-.433-.664-.692-.178-.26-.342-.577-.405-.872a2.3 2.3 0 0 1-.017-.958c.058-.285.17-.57.291-.88 1.01-2.591 3.234-4.281 6.184-4.91A5.5 5.5 0 0 1 12 2.5",
        }),
      }))
);
UserFilled.displayName = "UserFilled";
export { UserFilled };
export default UserFilled;
