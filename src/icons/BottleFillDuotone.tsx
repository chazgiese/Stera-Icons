import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleFillDuotone = memo(
  forwardRef<SVGSVGElement, BottleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-fill-duotone" {...props}>
      <path d="m13.85 4.05.34 3.76q.04.3.22.53l1.18 1.49a3 3 0 0 1 .66 1.87v8.05c0 1.24-1 2.25-2.25 2.25h-4c-1.24 0-2.25-1-2.25-2.25V11.7a3 3 0 0 1 .66-1.87l1.18-1.49a1 1 0 0 0 .22-.53l.34-3.76V4h3.7z" opacity={.4} />
        <path d="M13.75 2a1 1 0 1 1 0 2h-3.5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BottleFillDuotone.displayName = 'BottleFillDuotone';

// Triple export pattern (lucide-react style)
export { BottleFillDuotone, BottleFillDuotone as BottleFillDuotoneIcon, BottleFillDuotone as SiBottleFillDuotone };
export default BottleFillDuotone;
export type { BottleFillDuotoneProps };
