import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 20.95V3.05a9 9 0 0 1 2 0v17.9a9 9 0 0 1-2 0" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideBoldDuotone.displayName = 'CircleDivideBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideBoldDuotone, CircleDivideBoldDuotone as CircleDivideBoldDuotoneIcon, CircleDivideBoldDuotone as SiCircleDivideBoldDuotone };
export default CircleDivideBoldDuotone;
export type { CircleDivideBoldDuotoneProps };
