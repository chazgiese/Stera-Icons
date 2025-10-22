import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowSquareUpIconFilltone = memo(
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
          d="M13 22c1.383 0 2.481 0 3.365-.071.896-.073 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359C22 15.481 22 14.384 22 13v-2c0-1.384 0-2.481-.071-3.365-.073-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-.7-.356-1.463-.51-2.359-.583C15.481 2 14.384 2 13 2h-2c-1.384 0-2.481 0-3.365.071-.896.073-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C2 8.519 2 9.616 2 11v2c0 1.383 0 2.481.071 3.365.073.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583C8.519 22 9.616 22 11 22z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 18a1 1 0 0 0 1-1V9.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 1 0 1.414 1.414L11 9.414V17a1 1 0 0 0 1 1"
        />
      </svg>
    ))
);
ArrowSquareUpIconFilltone.displayName = "ArrowSquareUpIconFilltone";
export { ArrowSquareUpIconFilltone };
