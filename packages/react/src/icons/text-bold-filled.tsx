import { forwardRef, memo } from "react";
const _reactJsxRuntime = require("react/jsx-runtime");
import type { IconProps } from "../types";
const TextBoldFilled = memo(
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
          d: "M12.5 2a5.5 5.5 0 0 1 3.927 9.348A5.501 5.501 0 0 1 14.5 22H9.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C5 18.812 5 18.343 5 17.8V6.143c0-.518-.001-.963.027-1.329.03-.376.095-.752.27-1.116a3 3 0 0 1 1.401-1.401c.364-.175.74-.24 1.116-.27C8.18 2 8.625 2 9.143 2zM9.2 13c-.576 0-.949.001-1.232.024-.272.023-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.062.15-.085.422C7.001 14.25 7 14.624 7 15.2v2.6c0 .576.001.949.024 1.232.023.272.06.373.085.422a1 1 0 0 0 .437.437c.05.025.15.062.422.085.283.023.656.024 1.232.024h5.3a3.5 3.5 0 1 0 0-7zm-.057-9c-.549 0-.903 0-1.173.021-.259.02-.356.055-.404.078-.204.098-.37.263-.467.467-.023.048-.057.145-.078.404-.02.27-.021.624-.021 1.173v2.714c0 .549 0 .903.021 1.173.02.259.055.356.078.404.098.204.263.37.467.467.048.023.145.057.404.078.27.02.624.021 1.173.021H12.5a3.5 3.5 0 1 0 0-7z",
          clipRule: "evenodd",
        }),
      }))
);
TextBoldFilled.displayName = "TextBoldFilled";
export { TextBoldFilled };
export default TextBoldFilled;
