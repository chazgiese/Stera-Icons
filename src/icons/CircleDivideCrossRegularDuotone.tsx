import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-cross-duotone" {...props}>
      <path fill="currentColor" d="M12 3.75q.38 0 .75.04v7.46h7.46a8 8 0 0 1 0 1.5h-7.46v7.46a8 8 0 0 1-1.5 0v-7.46H3.79a8 8 0 0 1 0-1.5h7.46V3.79q.38-.04.75-.04" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossRegularDuotone.displayName = 'CircleDivideCrossRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideCrossRegularDuotone, CircleDivideCrossRegularDuotone as CircleDivideCrossRegularDuotoneIcon, CircleDivideCrossRegularDuotone as SiCircleDivideCrossRegularDuotone };
export default CircleDivideCrossRegularDuotone;
export type { CircleDivideCrossRegularDuotoneProps };
