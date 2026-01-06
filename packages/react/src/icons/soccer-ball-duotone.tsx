import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerBallIconDuotone = memo(
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
          fillRule="evenodd"
          d="M13.879 2.94c.65.135 1.275.34 1.867.602L12.75 5.415v2.74l2.917 2.5 2.534-.824.929-3.724a9.3 9.3 0 0 1 1.12 1.71l-.58 2.326 1.562 1.311q.017.27.018.546-.002.685-.099 1.344l-2.486-2.086-2.61.848-1.199 2.798 1.563 2.15 3.481-.242a9.3 9.3 0 0 1-1.227 1.59l-2.096.146-.759 1.876a9.2 9.2 0 0 1-1.867.618l1.254-3.106-1.587-2.186h-3.236l-1.588 2.186 1.254 3.106a9.2 9.2 0 0 1-1.868-.618l-.758-1.876-2.096-.147a9.3 9.3 0 0 1-1.227-1.59l3.481.244 1.563-2.15-1.2-2.8-2.609-.847-2.486 2.086a9.3 9.3 0 0 1-.081-1.89l1.562-1.311-.58-2.326a9.3 9.3 0 0 1 1.12-1.71l.929 3.724 2.534.824 2.918-2.5v-2.74L8.253 3.542a9.2 9.2 0 0 1 1.867-.602L12 4.115zm-4.473 8.77 1.088 2.54h3.012l1.087-2.54L12 9.488z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SoccerBallIconDuotone.displayName = "SoccerBallIconDuotone";
export { SoccerBallIconDuotone };
