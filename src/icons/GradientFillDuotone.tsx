import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GradientFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GradientFillDuotone = memo(
  forwardRef<SVGSVGElement, GradientFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gradient-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M13.3 2.63c1.25 0 2.23 0 3.03.06.8.07 1.49.2 2.11.52a5.4 5.4 0 0 1 2.35 2.35c.32.62.45 1.3.52 2.11s.07 1.78.07 3.03v2.6c0 1.25 0 2.23-.07 3.03s-.2 1.49-.52 2.11a5.4 5.4 0 0 1-2.35 2.35c-.62.32-1.3.45-2.11.52s-1.78.07-3.03.07h-2.6c-1.25 0-2.23 0-3.03-.07s-1.49-.2-2.11-.52a5.4 5.4 0 0 1-2.35-2.35 6 6 0 0 1-.52-2.11c-.07-.8-.06-1.78-.06-3.03v-2.6c0-1.25 0-2.23.06-3.03.07-.8.2-1.49.52-2.11a5.4 5.4 0 0 1 2.35-2.35c.62-.32 1.3-.45 2.11-.52s1.78-.06 3.03-.06zm-5.74 12.3a1.51 1.51 0 1 0 0 3.03 1.51 1.51 0 0 0 0-3.03m6.63.36a1.16 1.16 0 1 0 0 2.31 1.16 1.16 0 0 0 0-2.31m-3.14-2.4a1.34 1.34 0 1 0 0 2.67 1.34 1.34 0 0 0 0-2.67m5.93.35a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96M7.56 10.5a1.51 1.51 0 1 0 0 3.02 1.51 1.51 0 0 0 0-3.02m6.63.35a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32m-3.14-2.4a1.34 1.34 0 1 0 0 2.67 1.34 1.34 0 0 0 0-2.67m5.93.36a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96M7.56 6.04a1.51 1.51 0 1 0 0 3.03 1.51 1.51 0 0 0 0-3.03m6.63.36a1.16 1.16 0 1 0 0 2.31 1.16 1.16 0 0 0 0-2.31" clipRule="evenodd" opacity={.4} />
        <path d="M7.56 14.93a1.51 1.51 0 1 1 0 3.03 1.51 1.51 0 0 1 0-3.03M14.2 15.29a1.16 1.16 0 1 1 0 2.31 1.16 1.16 0 0 1 0-2.31M11.05 12.89a1.34 1.34 0 1 1 0 2.67 1.34 1.34 0 0 1 0-2.67M16.98 13.24a.98.98 0 1 1 0 1.96.98.98 0 0 1 0-1.96M7.56 10.49a1.51 1.51 0 1 1 0 3.02 1.51 1.51 0 0 1 0-3.02M14.2 10.84a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32M11.05 8.44a1.34 1.34 0 1 1 0 2.67 1.34 1.34 0 0 1 0-2.67M16.98 8.8a.98.98 0 1 1 0 1.96.98.98 0 0 1 0-1.96M7.56 6.04a1.51 1.51 0 1 1 0 3.03 1.51 1.51 0 0 1 0-3.03M14.2 6.4a1.16 1.16 0 1 1 0 2.31 1.16 1.16 0 0 1 0-2.31" />
    </IconBase>
  ))
);

GradientFillDuotone.displayName = 'GradientFillDuotone';

// Triple export pattern (lucide-react style)
export { GradientFillDuotone, GradientFillDuotone as GradientFillDuotoneIcon, GradientFillDuotone as SiGradientFillDuotone };
export default GradientFillDuotone;
export type { GradientFillDuotoneProps };
