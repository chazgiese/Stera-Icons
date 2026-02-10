import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-alt-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
        <path fill="currentColor" d="M20.21 11.25a8 8 0 0 1 0 1.5H3.8a8 8 0 0 1 0-1.5z" opacity={.4} />
    </IconBase>
  ))
);

CircleDivideAltRegularDuotone.displayName = 'CircleDivideAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideAltRegularDuotone, CircleDivideAltRegularDuotone as CircleDivideAltRegularDuotoneIcon, CircleDivideAltRegularDuotone as SiCircleDivideAltRegularDuotone };
export default CircleDivideAltRegularDuotone;
export type { CircleDivideAltRegularDuotoneProps };
