import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextSquareIconFilled = memo(
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
          d="M13 2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.616 22 11v2c0 1.383 0 2.481-.071 3.365-.073.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583C15.481 22 14.384 22 13 22h-2c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.481 2 14.384 2 13v-2c0-1.384 0-2.481.071-3.365.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.519 2 9.616 2 11 2zM8.5 6.5a2 2 0 0 0-2 2 1 1 0 0 0 2 0H10l.102.005c.471.048.845.423.893.893l.005.097V14.5a1 1 0 0 1-.898.995l-.205.01a1 1 0 0 0-.194.039l-.015.005-.07.025q-.02.008-.037.018l-.052.025-.021.013a1 1 0 0 0-.138.093l-.016.013a1 1 0 0 0-.192.218A1 1 0 0 0 9 16.5a1 1 0 0 0 1 1h4a1 1 0 0 0 .645-1.764l-.016-.013a1 1 0 0 0-.138-.093l-.021-.013-.052-.025q-.018-.01-.037-.018l-.07-.025-.015-.005a1 1 0 0 0-.194-.04l-.204-.009A1 1 0 0 1 13 14.5V9.495a1 1 0 0 1 .898-.99l.123-.005H15.5a1 1 0 1 0 2 0 2 2 0 0 0-2-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TextSquareIconFilled.displayName = "TextSquareIconFilled";
export { TextSquareIconFilled };
