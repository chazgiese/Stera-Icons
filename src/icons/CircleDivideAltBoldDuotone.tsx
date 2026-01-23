import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-alt-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20.95 13H3.05a9 9 0 0 1 0-2h17.9a9 9 0 0 1 0 2" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideAltBoldDuotone.displayName = 'CircleDivideAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideAltBoldDuotone, CircleDivideAltBoldDuotone as CircleDivideAltBoldDuotoneIcon, CircleDivideAltBoldDuotone as SiCircleDivideAltBoldDuotone };
export default CircleDivideAltBoldDuotone;
export type { CircleDivideAltBoldDuotoneProps };
