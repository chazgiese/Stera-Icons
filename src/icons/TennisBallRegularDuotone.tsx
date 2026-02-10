import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TennisBallRegularDuotone = memo(
  forwardRef<SVGSVGElement, TennisBallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tennis-ball-duotone" {...props}>
      <path d="M6.83 5.57a9.7 9.7 0 0 1 0 12.86 8 8 0 0 1-1.08-1.05 8.2 8.2 0 0 0 0-10.76 8 8 0 0 1 1.08-1.05M17.17 5.57q.6.48 1.08 1.05a8.2 8.2 0 0 0 0 10.76 8 8 0 0 1-1.08 1.05 9.7 9.7 0 0 1 0-12.86" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallRegularDuotone.displayName = 'TennisBallRegularDuotone';

// Triple export pattern (lucide-react style)
export { TennisBallRegularDuotone, TennisBallRegularDuotone as TennisBallRegularDuotoneIcon, TennisBallRegularDuotone as SiTennisBallRegularDuotone };
export default TennisBallRegularDuotone;
export type { TennisBallRegularDuotoneProps };
