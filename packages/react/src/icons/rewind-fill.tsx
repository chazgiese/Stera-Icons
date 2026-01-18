import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RewindIconFill = memo(
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
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          d="M21.185 5.774a2 2 0 0 1 1.427.808c.262.357.33.765.36 1.08.029.32.028.722.028 1.164v6.348c0 .443 0 .844-.029 1.165-.029.314-.097.722-.36 1.079-.337.46-.857.755-1.426.808-.44.04-.825-.11-1.11-.247-.29-.14-.633-.348-1.013-.576l-5.29-3.173c-.36-.217-.691-.414-.941-.597-.248-.182-.549-.44-.72-.832a2 2 0 0 1-.111-.342v2.715l-.003.629q-.005.294-.026.536c-.029.314-.097.722-.36 1.079-.337.46-.857.755-1.426.808-.44.04-.825-.11-1.11-.247-.29-.14-.633-.348-1.013-.576l-5.29-3.173c-.36-.217-.691-.414-.941-.597-.248-.182-.549-.44-.72-.832a2 2 0 0 1 0-1.602c.171-.392.472-.65.72-.832.25-.183.58-.38.941-.596l5.29-3.174c.38-.228.724-.436 1.014-.576.249-.12.574-.25.947-.253l.162.006a2 2 0 0 1 1.427.808c.262.357.33.765.36 1.08.029.32.028.722.028 1.164v2.714q.04-.175.11-.34c.172-.393.473-.651.72-.833.25-.183.582-.38.942-.596l5.29-3.174c.38-.228.724-.436 1.014-.576.249-.12.574-.25.947-.253z"
        />
      </svg>
    ))
);
RewindIconFill.displayName = "RewindIconFill";
export { RewindIconFill };
