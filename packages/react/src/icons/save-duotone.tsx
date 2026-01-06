import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SaveIconDuotone = memo(
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
          d="M16 3.25c.893 0 1.45-.004 1.927.09a4.75 4.75 0 0 1 3.732 3.733c.095.477.091 1.034.091 1.927v4c0 1.388 0 2.473-.07 3.345-.072.88-.222 1.607-.557 2.265a5.75 5.75 0 0 1-2.513 2.513c-.658.335-1.385.485-2.265.557-.872.07-1.957.07-3.345.07h-2c-1.388 0-2.473 0-3.345-.07-.88-.072-1.607-.222-2.265-.557a5.75 5.75 0 0 1-2.513-2.513c-.335-.658-.485-1.385-.557-2.265-.07-.872-.07-1.957-.07-3.345V9c0-.893-.004-1.45.09-1.927a4.75 4.75 0 0 1 3.733-3.732C6.55 3.246 7.107 3.25 8 3.25a.75.75 0 0 1 0 1.5c-.965 0-1.338.004-1.634.063a3.25 3.25 0 0 0-2.554 2.553c-.058.296-.062.669-.062 1.634v4c0 1.412 0 2.427.065 3.223.065.787.188 1.295.398 1.707a4.25 4.25 0 0 0 1.857 1.857c.412.21.92.333 1.707.398.796.065 1.81.065 3.223.065h2c1.412 0 2.427 0 3.223-.065.787-.065 1.295-.188 1.707-.398a4.25 4.25 0 0 0 1.857-1.857c.21-.412.333-.92.398-1.707.065-.796.065-1.81.065-3.223V9c0-.965-.004-1.338-.062-1.634a3.25 3.25 0 0 0-2.554-2.553c-.296-.06-.67-.063-1.634-.063a.75.75 0 0 1 0-1.5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 2.25a.75.75 0 0 1 .75.75v10.69l3.72-3.72a.75.75 0 0 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V3a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
SaveIconDuotone.displayName = "SaveIconDuotone";
export { SaveIconDuotone };
