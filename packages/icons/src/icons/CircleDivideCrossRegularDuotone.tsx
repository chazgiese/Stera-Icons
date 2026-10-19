import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 3.25.75.03v7.97h7.97l.03.75-.03.75h-7.97v7.97l-.75.03-.75-.03v-7.97H3.28L3.25 12l.03-.75h7.97V3.28z" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossRegularDuotone.displayName = 'CircleDivideCrossRegularDuotone';

// Triple export pattern
export { CircleDivideCrossRegularDuotone, CircleDivideCrossRegularDuotone as CircleDivideCrossRegularDuotoneIcon, CircleDivideCrossRegularDuotone as SiCircleDivideCrossRegularDuotone };
export default CircleDivideCrossRegularDuotone;
export type { CircleDivideCrossRegularDuotoneProps };
