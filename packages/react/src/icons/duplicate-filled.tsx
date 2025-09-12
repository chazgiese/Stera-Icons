const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const DuplicateFilled = memo(
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
            d: "M15.5 20a1 1 0 1 1 0 2h-2a1 1 0 0 1 0-2zM7.893 18.043a1 1 0 0 1 1.247.667q.034.115.078.198a2 2 0 0 0 .874.874q.084.044.198.078a1 1 0 1 1-.58 1.914 3 3 0 0 1-.525-.21 4 4 0 0 1-1.75-1.748 3 3 0 0 1-.21-.526 1 1 0 0 1 .668-1.247M19.86 18.71a1 1 0 0 1 1.914.58 3 3 0 0 1-.21.526 4 4 0 0 1-1.748 1.749q-.255.127-.526.21a1 1 0 0 1-.58-1.915q.114-.035.198-.078a2 2 0 0 0 .874-.874q.044-.083.078-.198",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M11.2 2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.748 1.748c.248.485.346 1.002.392 1.564.03.36.037.776.04 1.252H13.5a1 1 0 1 0 0 2H17v2.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044H9v-3.5a1 1 0 1 0-2 0v3.496c-.476-.003-.891-.01-1.252-.04-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C1.999 12.702 2 12.024 2 11.2V7.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C6.298 1.999 6.976 2 7.8 2zm-.243 5.893a1 1 0 0 0-1.247-.667 3 3 0 0 0-.526.21 4 4 0 0 0-1.748 1.748q-.129.255-.21.526a1 1 0 1 0 1.914.58q.034-.114.078-.198a2 2 0 0 1 .874-.874q.084-.044.198-.078a1 1 0 0 0 .667-1.247",
            clipRule: "evenodd",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M21 12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M18.043 7.893a1 1 0 0 1 1.247-.667q.272.081.526.21a4 4 0 0 1 1.749 1.749 3 3 0 0 1 .21.525 1 1 0 1 1-1.915.58 1 1 0 0 0-.078-.198 2 2 0 0 0-.874-.874 1 1 0 0 0-.198-.078 1 1 0 0 1-.667-1.247",
          }),
        ],
      }))
);
DuplicateFilled.displayName = "DuplicateFilled";
export { DuplicateFilled };
