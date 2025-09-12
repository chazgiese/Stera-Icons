const _reactJsxRuntime = require("react/jsx-runtime");
import React, { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const Users = memo(
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
          d: "M15 2a6 6 0 0 1 3.77 10.666c2.197.854 3.859 2.511 4.676 4.857.236.678.469 1.289.254 2.18-.09.374-.29.738-.491 1.02-.2.281-.478.591-.802.8-.793.51-1.657.477-2.607.477H4.2c-.95 0-1.814.033-2.607-.477-.324-.209-.602-.519-.802-.8S.39 20.077.3 19.703c-.215-.891.018-1.502.254-2.18.817-2.345 2.479-4.002 4.675-4.857a6 6 0 0 1 6.769-9.862A6 6 0 0 1 15 2m.049 12c1.071.895 1.894 2.08 2.397 3.523.236.678.469 1.289.254 2.18q-.038.15-.095.297H19.8c1.146 0 1.33-.033 1.525-.16.032-.02.136-.11.253-.276a1.2 1.2 0 0 0 .178-.33.8.8 0 0 0 .017-.352c-.026-.15-.086-.328-.215-.7-.908-2.604-3.202-4.167-6.51-4.182M9 14c-3.334 0-5.646 1.565-6.558 4.182-.13.372-.189.55-.215.7a.8.8 0 0 0 .017.352c.01.037.06.166.178.33.117.165.221.256.253.277.195.126.38.159 1.525.159h9.6c1.145 0 1.33-.033 1.525-.16.032-.02.136-.11.253-.276a1.2 1.2 0 0 0 .178-.33.8.8 0 0 0 .017-.352c-.026-.15-.086-.328-.215-.7C14.646 15.565 12.334 14 9 14M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m6 0c-.469 0-.918.082-1.335.23A5.97 5.97 0 0 1 15 8c0 1.429-.501 2.74-1.335 3.77A4 4 0 1 0 15 4",
          clipRule: "evenodd",
        }),
      }))
);
Users.displayName = "Users";
export { Users };
export default Users;
