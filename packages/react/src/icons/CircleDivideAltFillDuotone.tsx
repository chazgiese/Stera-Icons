import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22.95 13a11 11 0 0 1-21.9 0zM12 1a11 11 0 0 1 10.95 10H1.05A11 11 0 0 1 12 1" />
        <path fill="currentColor" fillRule="evenodd" d="M22.96 13H1.04a11 11 0 0 1 0-2h21.92a11 11 0 0 1 0 2" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideAltFillDuotone.displayName = 'CircleDivideAltFillDuotone';

export { CircleDivideAltFillDuotone };
export type { CircleDivideAltFillDuotoneProps };
