import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDivideAltFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltFill = memo(
  forwardRef<SVGSVGElement, CircleDivideAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22.95 13a11 11 0 0 1-21.9 0zM12 1a11 11 0 0 1 10.95 10H1.05A11 11 0 0 1 12 1" />
    </IconBase>
  ))
);

CircleDivideAltFill.displayName = 'CircleDivideAltFill';

// Triple export pattern (lucide-react style)
export { CircleDivideAltFill, CircleDivideAltFill as CircleDivideAltFillIcon, CircleDivideAltFill as SiCircleDivideAltFill };
export type { CircleDivideAltFillProps };
