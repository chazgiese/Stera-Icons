import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LotusIconBold = memo(
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
          d="M11.37 3.225a1 1 0 0 1 1.337.068l2.343 2.343q.228.229.445.476l2.796-1.495.107-.048a1 1 0 0 1 1.342.724L20.52 9H22a1 1 0 0 1 1 1v2.003a9 9 0 0 1-9 9h-.002L11.999 21H10a9 9 0 0 1-9-9v-2a1 1 0 0 1 1-1h1.48l.779-3.707a1 1 0 0 1 1.45-.676l2.798 1.497q.212-.245.443-.478l2.343-2.343zm8.355 7.781a7 7 0 0 0-2.063.393 8.98 8.98 0 0 1-2.612 6.966l-.625.624A7 7 0 0 0 21 12.002V11h-1.003q-.137 0-.272.006M3 12a7 7 0 0 0 6.571 6.986l-.62-.622A8.98 8.98 0 0 1 6.336 11.4 7 7 0 0 0 4 11H3zm7.364-4.95a6.961 6.961 0 0 0-1.967 3.865 6.99 6.99 0 0 0 1.967 6.035L12 18.586l1.636-1.636a6.99 6.99 0 0 0 1.967-6.036 7 7 0 0 0-1.185-2.952 7 7 0 0 0-.782-.912L12 5.414zM5.496 9.126q.616.104 1.198.287a9 9 0 0 1 .673-1.641l-1.426-.763zM16.64 7.768q.418.797.667 1.643a9 9 0 0 1 1.196-.285l-.445-2.117z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LotusIconBold.displayName = "LotusIconBold";
export { LotusIconBold };
