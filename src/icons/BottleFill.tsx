import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleFillProps = Omit<IconBaseProps, 'children'>;

const BottleFill = memo(
  forwardRef<SVGSVGElement, BottleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-fill" {...props}>
      <path fill="currentColor" d="M13.75 2a1 1 0 0 1 .1 2v.05l.34 3.76q.04.3.22.53l1.18 1.49a3 3 0 0 1 .66 1.87v8.05c0 1.24-1 2.25-2.25 2.25h-4c-1.24 0-2.25-1-2.25-2.25V11.7a3 3 0 0 1 .66-1.87l1.18-1.49a1 1 0 0 0 .22-.53l.34-3.76V4a1 1 0 0 1 .1-2z" />
    </IconBase>
  ))
);

BottleFill.displayName = 'BottleFill';

// Triple export pattern (lucide-react style)
export { BottleFill, BottleFill as BottleFillIcon, BottleFill as SiBottleFill };
export default BottleFill;
export type { BottleFillProps };
