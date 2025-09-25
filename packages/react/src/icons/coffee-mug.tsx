import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoffeeMug = memo(
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
          d="M11 2.25c1.983 0 3.806.228 5.157.614.67.192 1.267.434 1.714.736.407.275.85.715.877 1.34v.032L18.75 5v.025l-.074 2.225h.757a2.75 2.75 0 0 1 2.748 2.842l-.1 3a2.75 2.75 0 0 1-2.748 2.658h-.94l-.032.959a4.75 4.75 0 0 1-4.026 4.537l-.18.027c-2.09.322-4.219.322-6.31 0l-.18-.027A4.75 4.75 0 0 1 3.64 16.71L3.25 5.025a1 1 0 0 1 .002-.091c.03-.622.472-1.06.878-1.334.447-.302 1.044-.544 1.714-.736 1.351-.386 3.174-.614 5.157-.614m6.19 4.517a8 8 0 0 1-1.033.369c-1.351.386-3.174.614-5.156.614-1.983 0-3.806-.228-5.157-.614a8 8 0 0 1-1.034-.368l.33 9.891a3.25 3.25 0 0 0 2.754 3.105l.18.027c1.94.298 3.914.298 5.853 0l.18-.027a3.25 3.25 0 0 0 2.755-3.105zm1.253 7.483h.89a1.25 1.25 0 0 0 1.249-1.208l.1-3a1.25 1.25 0 0 0-1.249-1.292h-.806zM11 3.75c-1.883 0-3.561.219-4.744.557-.596.17-1.024.359-1.286.536-.1.068-.156.122-.188.157.032.035.087.09.188.157.262.177.69.366 1.286.536 1.183.338 2.861.557 4.745.557s3.561-.219 4.744-.557c.596-.17 1.024-.359 1.286-.536.1-.068.156-.122.187-.157a1 1 0 0 0-.187-.157c-.262-.177-.69-.366-1.286-.536-1.183-.338-2.861-.557-4.744-.557"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CoffeeMug.displayName = "CoffeeMug";
export { CoffeeMug };
