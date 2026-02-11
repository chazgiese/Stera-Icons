import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeSwordFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeSwordFillDuotone = memo(
  forwardRef<SVGSVGElement, BladeSwordFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-sword-fill-duotone" {...props}>
      <path d="M3.47 3.47a.8.8 0 0 1 .71-.2l3.46.87q.2.05.35.2l8.2 8.19-3.66 3.65L4.33 8a1 1 0 0 1-.16-.25l-.03-.1-.87-3.46a.8.8 0 0 1 .2-.71" opacity={.4} />
        <path d="M17.38 11.33a1 1 0 1 1 1.41 1.41l-1.43 1.44v1.76l1.7 1.7 1.03.35q.27.09.47.3l.24.24c.48.47.48 1.24 0 1.72l-.56.55-.09.09c-.44.36-1.09.36-1.53 0l-.1-.09-.24-.24q-.15-.16-.24-.34l-.05-.13-.34-1.03-1.7-1.7h-1.77l-1.44 1.44a1 1 0 0 1-1.41-1.42z" />
    </IconBase>
  ))
);

BladeSwordFillDuotone.displayName = 'BladeSwordFillDuotone';

// Triple export pattern (lucide-react style)
export { BladeSwordFillDuotone, BladeSwordFillDuotone as BladeSwordFillDuotoneIcon, BladeSwordFillDuotone as SiBladeSwordFillDuotone };
export default BladeSwordFillDuotone;
export type { BladeSwordFillDuotoneProps };
