import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandWaveFilled = memo(
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
        <g fill="currentColor" clipPath="url(#a)">
          <path d="M2.629 16.071a1 1 0 0 1 1.3.558c.296.742 1.273 2.523 2.67 3.571A1 1 0 1 1 5.4 21.8c-1.802-1.352-2.959-3.504-3.329-4.429a1 1 0 0 1 .558-1.3M9.796 3.201a1.516 1.516 0 0 1 2.063.55l3.834 6.605q-.043.033-.089.07c-.289.236-.66.593-.972 1.063a3.63 3.63 0 0 0-.62 1.78c-.047.715.127 1.506.62 2.355a.529.529 0 0 0 .915-.531c-.4-.688-.51-1.273-.479-1.755.032-.486.21-.908.446-1.264.237-.357.527-.637.761-.829a4 4 0 0 1 .364-.264l.018-.011v-.002a.53.53 0 0 0 .267-.453l.032-3.29v-.004c0-.466.214-.883.553-1.16.26-.211.593-.338.957-.338.835 0 1.508.673 1.508 1.498q0 .04.006.08l.51 3.356a.5.5 0 0 0 .028.107 7.566 7.566 0 0 1-3.33 9.218c-3.65 2.096-8.314.85-10.419-2.776L3.201 11.06a1.494 1.494 0 0 1 .553-2.045 1.515 1.515 0 0 1 2.062.549l2.295 3.952a.53.53 0 0 0 .915-.532L5.203 6.396a1.494 1.494 0 0 1 .553-2.044 1.516 1.516 0 0 1 2.063.548l3.568 6.148a.53.53 0 0 0 .915-.531l-3.058-5.27a1.494 1.494 0 0 1 .552-2.046M19.5 1.5c1.346 0 2.474.672 3.24 1.515C23.494 3.844 24 4.949 24 6a1 1 0 0 1-2 0c0-.45-.244-1.094-.74-1.64-.485-.532-1.107-.86-1.76-.86a1 1 0 0 1 0-2" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="currentColor" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    ))
);
HandWaveFilled.displayName = "HandWaveFilled";
export { HandWaveFilled };
