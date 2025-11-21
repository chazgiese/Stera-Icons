import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QrCodeIcon = memo(
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
          d="M8.75 13.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M16.083 20.806a.944.944 0 0 1-.944.944h-.945a.944.944 0 0 1-.944-.944v-.945c0-.521.423-.944.944-.944h1.889zM20.806 18.917c.521 0 .944.423.944.944v.945a.944.944 0 0 1-.944.944h-.945a.944.944 0 0 1-.944-.944v-1.889zM18.917 18.917h-2.834v-2.834h2.834zM15.139 13.25c.521 0 .944.423.944.944v1.889h-1.889a.944.944 0 0 1-.944-.944v-.945c0-.521.423-.944.944-.944zM20.806 13.25c.521 0 .944.423.944.944v.945a.944.944 0 0 1-.944.944h-1.889v-1.889c0-.521.423-.944.944-.944zM6.5 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5zM19.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
QrCodeIcon.displayName = "QrCodeIcon";
export { QrCodeIcon };
