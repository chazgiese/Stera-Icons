import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalStarIconFill = memo(
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
          d="M16 12.118h-.002l-.694-.063-1.139-2.633-.082-.172c-.875-1.666-3.29-1.666-4.165 0l-.083.172-1.139 2.633-.695.063L8 1h8zM6 11.118l-1.602-.8c-.264-.136-.537-.293-.755-.516a2.25 2.25 0 0 1-.52-.841c-.102-.296-.12-.61-.123-.906V4c0-.333 0-.644.02-.902a2.3 2.3 0 0 1 .225-.87l.087-.155c.216-.352.526-.64.897-.828l.112-.053c.26-.111.52-.152.757-.171C5.356.999 5.667 1 6 1zM18 1c.333 0 .644 0 .902.02.237.02.496.06.757.172l.113.053.155.087c.352.216.64.526.828.897.152.298.202.598.225.869.02.258.02.569.02.902v4.055c-.003.297-.021.61-.123.906a2.25 2.25 0 0 1-.52.84c-.218.224-.491.381-.755.516L18 11.118z"
        />
        <path
          fill="currentColor"
          d="M11.064 9.762c.427-.682 1.444-.682 1.871 0l.082.156 1.433 3.314 3.61.334c.963.09 1.363 1.29.627 1.934l-2.72 2.381.795 3.517c.216.954-.816 1.687-1.645 1.197L12 20.75l-3.116 1.844c-.83.49-1.863-.242-1.647-1.197l.795-3.518-2.719-2.38c-.736-.644-.336-1.845.628-1.934l3.609-.334 1.432-3.314z"
        />
      </svg>
    ))
);
MedalStarIconFill.displayName = "MedalStarIconFill";
export { MedalStarIconFill };
