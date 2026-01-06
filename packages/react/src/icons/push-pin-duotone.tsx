import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PushPinIconDuotone = memo(
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
          d="M16.764 2.25a1.987 1.987 0 0 1 .888 3.763l-.626.312a.5.5 0 0 0-.276.447v3.56a.5.5 0 0 0 .223.415l1.886 1.258a2 2 0 0 1 .891 1.664v1.081a2 2 0 0 1-2 2H6.25a2 2 0 0 1-2-2v-1.081a2 2 0 0 1 .89-1.664l1.887-1.258a.5.5 0 0 0 .223-.416V6.772a.5.5 0 0 0-.276-.447l-.626-.312a1.986 1.986 0 0 1 .888-3.763zm-9.528 1.5a.487.487 0 0 0-.217.92l.626.313a2 2 0 0 1 1.105 1.79v3.558a2 2 0 0 1-.89 1.664l-1.887 1.258a.5.5 0 0 0-.223.416v1.081a.5.5 0 0 0 .5.5h11.5a.5.5 0 0 0 .5-.5v-1.081a.5.5 0 0 0-.223-.416l-1.886-1.258a2 2 0 0 1-.891-1.664V6.772a2 2 0 0 1 1.105-1.789l.626-.312a.486.486 0 0 0-.217-.921z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M12.75 22a.75.75 0 0 1-1.5 0v-5.25h1.5z" />
      </svg>
    ))
);
PushPinIconDuotone.displayName = "PushPinIconDuotone";
export { PushPinIconDuotone };
