import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DuplicatePlusIconFilled = memo(
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
          d="M15.4 7c.964 0 1.747-.001 2.38.05.646.054 1.224.166 1.763.44a4.5 4.5 0 0 1 1.967 1.967c.274.539.386 1.117.44 1.763.051.633.05 1.416.05 2.38v1.8c0 .964.001 1.747-.05 2.38-.053.646-.166 1.224-.44 1.763a4.5 4.5 0 0 1-1.967 1.967c-.539.274-1.117.386-1.763.44-.633.051-1.416.05-2.38.05h-1.8c-.964 0-1.747.001-2.38-.05-.646-.053-1.224-.166-1.763-.44a4.5 4.5 0 0 1-1.967-1.967c-.274-.539-.386-1.117-.44-1.763a17 17 0 0 1-.044-1.066L7 15.4v-1.8c0-.964-.001-1.747.05-2.38.054-.646.166-1.224.44-1.763A4.5 4.5 0 0 1 9.457 7.49c.539-.274 1.117-.386 1.763-.44C11.853 7 12.636 7 13.6 7zm-.9 3.5a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M10.4 2c.964 0 1.747-.001 2.38.05.646.054 1.224.166 1.763.44a4.5 4.5 0 0 1 1.967 1.967c.17.333.276.682.346 1.052-.453-.01-.942-.009-1.456-.009h-1.8c-.94 0-1.793-.002-2.502.056-.739.06-1.536.198-2.322.598a6 6 0 0 0-2.622 2.622c-.4.786-.538 1.584-.598 2.322-.058.709-.056 1.563-.056 2.502v1.8c0 .514 0 1.003.009 1.456a3.9 3.9 0 0 1-1.052-.346 4.5 4.5 0 0 1-1.967-1.967c-.274-.539-.386-1.117-.44-1.763a17 17 0 0 1-.044-1.066L2 10.4V8.6c0-.964-.001-1.747.05-2.38.054-.646.166-1.224.44-1.763A4.5 4.5 0 0 1 4.457 2.49c.539-.274 1.117-.386 1.763-.44C6.853 2 7.636 2 8.6 2z"
        />
      </svg>
    ))
);
DuplicatePlusIconFilled.displayName = "DuplicatePlusIconFilled";
export { DuplicatePlusIconFilled };
