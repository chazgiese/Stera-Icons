import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldCheckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckBoldDuotone = memo(
  forwardRef<SVGSVGElement, ShieldCheckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3zM5 5.69v4.9a11 11 0 0 0 6.08 9.83l.92.46.92-.46A11 11 0 0 0 19 10.58V5.7l-7-2.62z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.17 8.8a1 1 0 0 1 1.41 1.4l-4.85 4.85q-.15.17-.33.32a1.5 1.5 0 0 1-1.58.24c-.24-.1-.4-.27-.51-.39q-.15-.17-.29-.36l-1.7-2.26a1 1 0 1 1 1.6-1.2l1.56 2.08z" />
    </IconBase>
  ))
);

ShieldCheckBoldDuotone.displayName = 'ShieldCheckBoldDuotone';

export { ShieldCheckBoldDuotone };
export type { ShieldCheckBoldDuotoneProps };
