import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TennisBallBoldDuotone = memo(
  forwardRef<SVGSVGElement, TennisBallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tennis-ball-bold-duotone" {...props}>
      <path d="M7.19 5.6a9.96 9.96 0 0 1 0 12.8A8 8 0 0 1 5.75 17a7.96 7.96 0 0 0 0-10q.63-.78 1.44-1.4M16.81 5.6q.81.62 1.44 1.4a7.96 7.96 0 0 0 0 10q-.63.78-1.44 1.4a9.96 9.96 0 0 1 0-12.8" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallBoldDuotone.displayName = 'TennisBallBoldDuotone';

// Triple export pattern (lucide-react style)
export { TennisBallBoldDuotone, TennisBallBoldDuotone as TennisBallBoldDuotoneIcon, TennisBallBoldDuotone as SiTennisBallBoldDuotone };
export default TennisBallBoldDuotone;
export type { TennisBallBoldDuotoneProps };
