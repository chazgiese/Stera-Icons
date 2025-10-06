import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CanLabelBold = memo(
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
        <path fill="currentColor" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 2a1 1 0 0 1 .21 1.977l.368.643A7 7 0 0 1 19 8.094v7.812a7 7 0 0 1-.922 3.474l-.634 1.108A3 3 0 0 1 14.84 22H9.16a3 3 0 0 1-2.604-1.512l-.634-1.108A7 7 0 0 1 5 15.906V8.094c0-1.218.318-2.416.922-3.474l.367-.643A1 1 0 0 1 6.5 2zM7.462 18q.09.197.197.388l.633 1.108A1 1 0 0 0 9.16 20h5.68a1 1 0 0 0 .868-.504l.633-1.108a5 5 0 0 0 .197-.388zM7 8.094v7.812l.003.094h9.994q.001-.046.003-.094V8.094q0-.048-.003-.094H7.003Q7 8.046 7 8.094m.66-2.482A5 5 0 0 0 7.461 6h9.076a5 5 0 0 0-.197-.388L15.42 4H8.58z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CanLabelBold.displayName = "CanLabelBold";
export { CanLabelBold };
