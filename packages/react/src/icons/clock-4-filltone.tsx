import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock4IconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 4a1 1 0 0 0-1 1v6.02q0 .034.004.067.002.024.006.047a1 1 0 0 0 .018.098l.01.04.022.066.006.02.03.069.013.026a1 1 0 0 0 .052.09q.01.018.023.033a1 1 0 0 0 .172.189l.026.02.045.033.044.03.029.018 3.464 2a1 1 0 0 0 1-1.732L13 11.422V6a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5a1 1 0 0 1 1 1v5.422l2.964 1.712a1 1 0 0 1-1 1.732l-3.464-2-.03-.018-.043-.03q-.023-.015-.045-.034l-.025-.02-.053-.047-.017-.017a1 1 0 0 1-.103-.124l-.023-.032a1 1 0 0 1-.052-.09l-.013-.027-.03-.07-.006-.02-.022-.066-.01-.039a1 1 0 0 1-.018-.098q-.004-.024-.006-.047L11 12.02V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
Clock4IconFilltone.displayName = "Clock4IconFilltone";
export { Clock4IconFilltone };
