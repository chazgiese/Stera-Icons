import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock2IconDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5.25a.75.75 0 0 1 .75.75v4.7l2.339-1.35a.75.75 0 0 1 .75 1.3l-3.464 2a1 1 0 0 1-.076.037l-.02.008q-.043.016-.087.026-.044.013-.092.021l-.012.002a1 1 0 0 1-.088.006q-.023 0-.044-.003h-.015a1 1 0 0 1-.112-.018q-.036-.01-.071-.023-.036-.011-.071-.026-.03-.014-.058-.032-.033-.017-.064-.039-.03-.021-.056-.046a.7.7 0 0 1-.125-.137l-.013-.02-.02-.031a1 1 0 0 1-.047-.097q-.015-.042-.026-.086-.013-.044-.021-.092l-.002-.012A1 1 0 0 1 11.25 12V6a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
Clock2IconDuotone.displayName = "Clock2IconDuotone";
export { Clock2IconDuotone };
