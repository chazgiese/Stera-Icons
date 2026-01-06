import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapPinnedIconDuotone = memo(
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
          d="M21.613 3.356A.75.75 0 0 1 22.75 4l.001 5.269a.75.75 0 0 1-1.5 0l-.001-3.945-5.53 3.32a.75.75 0 0 1-.772 0l-5.53-3.32v10.25l2.537 1.525a.75.75 0 1 1-.771 1.286l-2.517-1.51-6.28 3.769A.75.75 0 0 1 1.25 20V8a.75.75 0 0 1 .364-.644l6.667-4a.8.8 0 0 1 .19-.08l.01-.003.079-.015.013-.002.029-.002q.028-.003.055-.004h.019q.027 0 .055.004.015 0 .028.002.03.004.057.01l.045.01.008.002.076.026.005.002q.033.014.064.03.011.007.022.012l.005.003.01.005 6.281 3.768zM2.75 8.425v10.25l5.166-3.1V5.324z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18 13.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18 10.25c2.64 0 4.75 2.183 4.75 4.84 0 .858-.311 1.697-.718 2.436-.41.746-.947 1.445-1.468 2.038a18.7 18.7 0 0 1-2.082 2.01l-.01.009-.003.003h-.002a.75.75 0 0 1-.826.072l-.108-.071-.002-.001-.003-.003-.01-.009-.038-.03-.135-.113a18.655 18.655 0 0 1-1.908-1.867c-.522-.593-1.059-1.292-1.47-2.038-.406-.74-.717-1.578-.717-2.435 0-2.658 2.11-4.841 4.75-4.841m0 1.5c-1.78 0-3.25 1.48-3.25 3.34 0 .507.189 1.09.532 1.714.34.617.803 1.224 1.282 1.768.476.542.955 1.005 1.316 1.333q.062.056.12.106.058-.05.12-.106c.36-.328.84-.791 1.316-1.333.48-.544.942-1.151 1.282-1.768.343-.624.532-1.207.532-1.713 0-1.861-1.47-3.341-3.25-3.341"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MapPinnedIconDuotone.displayName = "MapPinnedIconDuotone";
export { MapPinnedIconDuotone };
