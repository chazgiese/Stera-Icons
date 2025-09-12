const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const SignOutAlt = memo(
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
            d: "M16.607 1.001q.244.002.463.01.324.014.603.053.057.008.112.018l.066.012q.094.018.184.043a4 4 0 0 1 2.828 2.828c.145.54.137 1.17.137 2.035a1 1 0 1 1-2 0c0-.994-.009-1.295-.068-1.518a2 2 0 0 0-1.414-1.414C17.295 3.008 16.994 3 16 3H8.8c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82C5 5.361 5 5.942 5 6.8v10.4c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18C7.361 21 7.942 21 8.8 21H16c.994 0 1.295-.009 1.518-.068a2 2 0 0 0 1.414-1.414c.06-.223.068-.524.068-1.518a1 1 0 1 1 2 0c0 .866.008 1.494-.137 2.035a4 4 0 0 1-2.828 2.828c-.54.145-1.17.137-2.035.137H8.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 18.702 3 18.024 3 17.2V6.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C7.298.999 7.976 1 8.8 1H16z",
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
            fill: "currentColor",
            d: "M14.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L17.586 13H8.5a1 1 0 0 1 0-2h9.086l-3.293-3.293a1 1 0 0 1 0-1.414",
          }),
        ],
      }))
);
SignOutAlt.displayName = "SignOutAlt";
export { SignOutAlt };
export default SignOutAlt;
