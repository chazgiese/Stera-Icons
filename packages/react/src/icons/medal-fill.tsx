import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalIconFill = memo(
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
          d="M12 12a5 5 0 1 1 0 10 5 5 0 0 1 0-10M16 11.256A6.97 6.97 0 0 0 12 10a6.97 6.97 0 0 0-4 1.256V1h8zM6 11.118l-1.602-.8c-.264-.136-.537-.293-.755-.516a2.25 2.25 0 0 1-.52-.841c-.102-.296-.12-.61-.123-.906V4c0-.333 0-.644.02-.902a2.3 2.3 0 0 1 .225-.87l.087-.155c.216-.352.526-.64.897-.828l.112-.053c.26-.111.52-.152.757-.171C5.356.999 5.667 1 6 1zM18 1c.333 0 .644 0 .902.02.237.02.496.06.757.172l.113.053.155.087c.352.216.64.526.828.897.152.298.202.598.225.869.02.258.02.569.02.902v4.055c-.003.297-.021.61-.123.906a2.25 2.25 0 0 1-.52.84c-.218.224-.491.381-.755.516L18 11.118z"
        />
      </svg>
    ))
);
MedalIconFill.displayName = "MedalIconFill";
export { MedalIconFill };
