const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Tag = memo(
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
      /*#__PURE__*/ _reactJsxRuntime.jsxs("svg", {
        fill: color,
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        className: className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ref: ref,
        ...props,
        children: [
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M7.75 6a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M11.675 2c.441 0 .825-.006 1.197.083.306.073.599.195.867.36.326.2.593.475.905.787l6.3 6.3c.384.384.716.715.965 1.008.257.302.484.631.615 1.035a3 3 0 0 1 0 1.854c-.131.404-.358.732-.615 1.035-.25.293-.58.623-.965 1.008l-5.474 5.474c-.385.384-.715.716-1.008.965-.303.257-.631.484-1.035.615a3 3 0 0 1-1.854 0c-.404-.13-.733-.358-1.035-.615-.293-.249-.624-.58-1.008-.965l-6.3-6.3c-.312-.312-.588-.579-.788-.905a3 3 0 0 1-.36-.867C1.995 12.5 2 12.116 2 11.675V6.2c0-.543-.001-1.012.03-1.395.032-.396.104-.79.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C5.188 2 5.657 2 6.2 2zM6.2 4c-.576 0-.95.001-1.232.024-.272.023-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C4.001 5.25 4 5.624 4 6.2v5.475c0 .536.006.642.027.73q.038.154.12.29c.048.077.118.156.497.535l6.3 6.3c.408.408.672.67.889.855.207.176.306.22.358.238a1 1 0 0 0 .617 0c.053-.017.151-.062.359-.238.217-.184.48-.447.889-.855l5.474-5.474c.408-.408.67-.672.855-.89.176-.207.22-.305.238-.357.065-.201.065-.417 0-.618-.017-.053-.062-.15-.238-.358-.184-.217-.447-.481-.855-.889l-6.3-6.3c-.379-.379-.459-.45-.536-.497a1 1 0 0 0-.289-.12c-.088-.02-.194-.027-.73-.027z",
            clipRule: "evenodd",
          }),
        ],
      }))
);
Tag.displayName = "Tag";
export { Tag };
export default Tag;
