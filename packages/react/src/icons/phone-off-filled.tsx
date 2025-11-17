import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PhoneOffIconFilled = memo(
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
          d="M12.005 7.502a27.6 27.6 0 0 1 5.611.507c1.789.352 3.26.975 4.29 1.939 1.044.978 1.594 2.272 1.594 3.866 0 .53.005 1.217-.167 1.739-.09.272-.246.561-.534.752-.26.171-.565.22-.886.182l-.139-.021-.016-.003-.016-.005-3.123-.823c-.61-.159-1.067-.308-1.403-.467s-.606-.357-.767-.642c-.16-.283-.167-.577-.157-.81.012-.274.04-.437.04-.736-.001-.21-.09-.364-.309-.505-.244-.156-.622-.271-1.105-.344-.967-.146-2.112-.094-2.918-.094-.805 0-1.951-.052-2.918.094-.483.073-.86.188-1.105.344-.22.141-.308.294-.308.505 0 .299.027.461.039.737.01.232.003.526-.157.81s-.43.48-.767.64c-.336.16-.793.309-1.403.468l-3.123.823-.016.005-.016.003c-.372.072-.728.035-1.025-.162-.287-.19-.444-.479-.534-.751C.495 15.03.5 14.343.5 13.814c0-1.594.55-2.888 1.595-3.866 1.029-.964 2.5-1.587 4.289-1.94a27.6 27.6 0 0 1 5.612-.506h.009"
        />
      </svg>
    ))
);
PhoneOffIconFilled.displayName = "PhoneOffIconFilled";
export { PhoneOffIconFilled };
