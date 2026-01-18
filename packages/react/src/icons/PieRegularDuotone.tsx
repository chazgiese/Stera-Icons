import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PieRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PieRegularDuotone = memo(
  forwardRef<SVGSVGElement, PieRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.06 18.26c-.32.9-1.17 1.49-2.12 1.49H7.06c-.95 0-1.8-.6-2.12-1.5l-1.3-3.62a3 3 0 0 0 1.6.03l1.11 3.1c.1.29.39.49.7.49h9.9c.3 0 .6-.2.7-.5l1.1-3.09a3 3 0 0 0 1.6-.03zM9.47 7.72a.75.75 0 1 1 1.06 1.06l-1 1a.75.75 0 1 1-1.06-1.06zM13.47 7.72c.3-.3.77-.3 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 4.25c4.97 0 9.1 2.8 10.5 6.79.2.59.26 1.35-.13 2.03a3.28 3.28 0 0 1-5.37.52 3.28 3.28 0 0 1-5 0 3.28 3.28 0 0 1-5 0 3.28 3.28 0 0 1-5.37-.52 2.5 2.5 0 0 1-.12-2.03C2.9 7.06 7.03 4.25 12 4.25m0 1.5c-4.42 0-7.92 2.49-9.08 5.78q-.16.51 0 .79c.33.57.92.93 1.58.93.83 0 1.56-.6 1.77-1.43l.04-.12a.75.75 0 0 1 1.42.12c.2.84.93 1.43 1.77 1.43.83 0 1.56-.6 1.77-1.43l.04-.12a.75.75 0 0 1 1.42.12c.2.84.93 1.43 1.77 1.43.83 0 1.56-.6 1.77-1.43l.04-.12a.75.75 0 0 1 1.42.12c.2.84.93 1.43 1.77 1.43.66 0 1.25-.36 1.57-.93q.17-.28 0-.79c-1.15-3.3-4.65-5.78-9.07-5.78" clipRule="evenodd" />
    </IconBase>
  ))
);

PieRegularDuotone.displayName = 'PieRegularDuotone';

// Triple export pattern (lucide-react style)
export { PieRegularDuotone, PieRegularDuotone as PieRegularDuotoneIcon, PieRegularDuotone as SiPieRegularDuotone };
export type { PieRegularDuotoneProps };
