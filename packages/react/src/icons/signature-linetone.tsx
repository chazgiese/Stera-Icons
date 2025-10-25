import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignatureIconLinetone = memo(
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
          d="M22 16a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.8 3c.905 0 1.708.21 2.369.657.663.449 1.107 1.084 1.374 1.802.517 1.392.404 3.166-.022 4.93a19 19 0 0 1-.634 2.068q.171-.052.35-.12c.923-.359 1.441-.622 1.873-.97.437-.351.845-.837 1.465-1.74a1 1 0 0 1 1.824.565c0 .638.13 1.447.397 2.059.284.651.556.749.704.749.186 0 .497-.066.923-.252.413-.18.875-.447 1.347-.778.951-.669 1.853-1.54 2.405-2.343a1 1 0 0 1 1.65 1.13c-.716 1.043-1.804 2.076-2.905 2.85a10 10 0 0 1-1.698.974c-.55.24-1.148.419-1.722.419-1.372 0-2.152-1.066-2.537-1.948a6 6 0 0 1-.186-.495q-.199.195-.413.368c-.676.544-1.426.897-2.402 1.276-.698.271-1.37.41-2.008.438-1.11 2.28-2.61 4.477-4.258 6.078a1 1 0 0 1-1.393-1.434c1.345-1.307 2.6-3.092 3.58-4.975a5.3 5.3 0 0 1-1.057-.553c-1.339-.906-2.233-2.367-2.679-3.85-.443-1.476-.488-3.121.046-4.459.272-.68.703-1.301 1.327-1.752C5.151 3.24 5.923 3 6.8 3m0 2c-.5 0-.853.132-1.11.317-.262.19-.482.477-.64.87-.323.81-.338 1.974.013 3.142.35 1.162 1.018 2.184 1.883 2.77.239.161.5.293.783.387.359-.872.649-1.74.848-2.567.39-1.62.402-2.924.09-3.763-.147-.397-.357-.666-.618-.843C7.785 5.136 7.393 5 6.799 5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SignatureIconLinetone.displayName = "SignatureIconLinetone";
export { SignatureIconLinetone };
