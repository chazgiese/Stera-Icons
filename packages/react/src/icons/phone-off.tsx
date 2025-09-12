import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const PhoneOff = memo(
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
          /*#__PURE__*/ _reactJsxRuntime.jsx("g", {
            clipPath: "url(#a)",
            children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M12.01 7.002a28 28 0 0 1 5.703.516c1.84.363 3.411 1.014 4.534 2.065C23.4 10.663 24 12.093 24 13.814c0 .5.011 1.281-.192 1.896-.109.33-.317.736-.734 1.011-.381.252-.81.312-1.22.263l-.175-.027-.033-.007-.032-.009-3.118-.823c-.619-.16-1.115-.318-1.495-.5-.381-.18-.755-.434-.988-.846-.23-.41-.232-.82-.221-1.076.014-.34.039-.418.039-.716.001-.007.026-.017-.078-.084-.157-.1-.452-.202-.91-.271-.918-.139-2.001-.088-2.843-.088s-1.925-.05-2.843.088c-.458.069-.753.171-.91.271-.104.067-.08.077-.078.084 0 .298.025.376.039.716.01.255.01.667-.222 1.076-.232.412-.606.666-.987.847-.38.18-.875.34-1.494.5l-3.12.822-.032.009-.032.007c-.461.09-.96.052-1.395-.236-.417-.274-.625-.68-.735-1.011C-.012 15.095 0 14.314 0 13.814c0-1.722.6-3.152 1.753-4.231C2.875 8.532 4.447 7.88 6.287 7.518a28 28 0 0 1 5.705-.516V7h.018M11.99 9c-1.77-.017-3.53.128-5.317.48-1.636.323-2.805.86-3.554 1.562C2.402 11.715 2 12.6 2 13.814c0 .286 0 .542.015.776q.017.232.045.369l2.938-.776H5c.587-.153.934-.273 1.14-.37q.04-.022.068-.039c-.005-.094-.04-.498-.04-.794 0-.822.44-1.41.999-1.767.509-.326 1.133-.482 1.69-.566 1.114-.168 2.445-.11 3.142-.11.696 0 2.028-.058 3.142.11.556.084 1.181.24 1.69.566.558.357.999.945.999 1.767 0 .296-.034.7-.04.794q.029.017.068.038c.205.098.553.218 1.14.37l.003.001 2.938.776a3 3 0 0 0 .044-.37c.015-.233.016-.489.016-.775 0-1.213-.402-2.099-1.12-2.771-.749-.701-1.918-1.24-3.554-1.562a26 26 0 0 0-5.316-.48z",
              clipRule: "evenodd",
            }),
          }),
          /*#__PURE__*/ _reactJsxRuntime.jsx("defs", {
            children: /*#__PURE__*/ _reactJsxRuntime.jsx("clipPath", {
              id: "a",
              children: /*#__PURE__*/ _reactJsxRuntime.jsx("path", {
                fill: "currentColor",
                d: "M0 0h24v24H0z",
              }),
            }),
          }),
        ],
      }))
);
PhoneOff.displayName = "PhoneOff";
export { PhoneOff };
export default PhoneOff;
