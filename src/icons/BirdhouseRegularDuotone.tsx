import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BirdhouseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BirdhouseRegularDuotone = memo(
  forwardRef<SVGSVGElement, BirdhouseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="birdhouse-duotone" {...props}>
      <path d="M6.1 19.25 4.45 10.7l1.31-1.16 1.85 9.71zM18.23 9.54l1.3 1.16-1.62 8.55h-1.53z" opacity={0.4} />
        <path fill="currentColor" d="M19 19.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 9.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M10.5 3.33a2.25 2.25 0 0 1 3 0l8 7.11a.75.75 0 0 1-1 1.12l-8-7.11a.75.75 0 0 0-1 0l-8 7.11a.75.75 0 0 1-1-1.12z" />
    </IconBase>
  ))
);

BirdhouseRegularDuotone.displayName = 'BirdhouseRegularDuotone';

// Triple export pattern (lucide-react style)
export { BirdhouseRegularDuotone, BirdhouseRegularDuotone as BirdhouseRegularDuotoneIcon, BirdhouseRegularDuotone as SiBirdhouseRegularDuotone };
export default BirdhouseRegularDuotone;
export type { BirdhouseRegularDuotoneProps };
