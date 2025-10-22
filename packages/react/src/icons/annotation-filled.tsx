import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AnnotationIconFilled = memo(
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
          fillRule="evenodd"
          d="M3 18.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.2 2.25c.828 0 1.494-.001 2.031.043.547.045 1.027.14 1.471.366.706.36 1.28.933 1.639 1.639.226.444.321.924.366 1.47.044.538.043 1.204.043 2.032v8.4c0 .828.001 1.494-.043 2.031-.045.547-.14 1.027-.366 1.471a3.75 3.75 0 0 1-1.639 1.639c-.444.226-.924.321-1.47.366-.538.044-1.204.043-2.032.043H7.8q-.47 0-.871-.004.07-.363.071-.746a4 4 0 0 0-4.747-3.93q-.003-.401-.003-.87V7.8c0-.828-.001-1.494.043-2.031.045-.547.14-1.027.366-1.471a3.75 3.75 0 0 1 1.639-1.639c.444-.226.924-.321 1.47-.366.538-.044 1.204-.043 2.032-.043zM8 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AnnotationIconFilled.displayName = "AnnotationIconFilled";
export { AnnotationIconFilled };
