const _reactJsxRuntime = require("react/jsx-runtime");
import { forwardRef, memo } from "react";
import type { IconProps } from "../types";
const CylinderStack = memo(
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
          d: "M12 1c2.297 0 4.422.348 6.008.942.79.296 1.498.673 2.027 1.142C20.563 3.552 21 4.197 21 5v14c0 .803-.437 1.448-.965 1.916-.529.469-1.238.846-2.027 1.142-1.586.595-3.71.942-6.008.942s-4.422-.348-6.008-.942c-.79-.296-1.498-.673-2.027-1.142C3.437 20.448 3 19.803 3 19V5c0-.803.437-1.448.965-1.916.529-.469 1.238-.846 2.027-1.142C7.578 1.348 9.702 1 12 1m7 13.614q-.466.247-.992.444c-1.586.595-3.71.942-6.008.942s-4.422-.348-6.008-.942A9 9 0 0 1 5 14.614V19c0 .026.01.17.292.42.28.249.744.518 1.402.765C8.004 20.675 9.88 21 12 21s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.395.292-.42zm0-7a9 9 0 0 1-.992.444C16.422 8.652 14.298 9 12 9s-4.422-.348-6.008-.942A9 9 0 0 1 5 7.614V12c0 .025.01.17.292.42.28.249.744.518 1.402.765C8.004 13.675 9.88 14 12 14s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.395.292-.42zM12 3c-2.121 0-3.997.325-5.306.815-.658.247-1.121.516-1.402.765C5.01 4.83 5 4.974 5 5s.01.17.292.42c.28.249.744.518 1.402.765C8.004 6.675 9.88 7 12 7s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.394.292-.42s-.01-.17-.292-.42c-.28-.249-.744-.518-1.402-.765C15.996 3.325 14.12 3 12 3",
          clipRule: "evenodd",
        }),
      }))
);
CylinderStack.displayName = "CylinderStack";
export { CylinderStack };
