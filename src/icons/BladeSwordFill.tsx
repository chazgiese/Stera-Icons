import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeSwordFillProps = Omit<IconBaseProps, 'children'>;

const BladeSwordFill = memo(
  forwardRef<SVGSVGElement, BladeSwordFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-sword-fill" {...props}>
      <path fill="currentColor" d="M3.72 3.72a.8.8 0 0 1 .71-.2l3.46.87q.2.05.35.2l7.94 7.94 1.2-1.2a1 1 0 0 1 1.41 1.41l-1.43 1.44v1.76l1.7 1.7 1.03.35q.27.09.47.3l.24.24c.48.47.48 1.24 0 1.72l-.56.55-.09.09c-.44.36-1.09.36-1.53 0l-.1-.09-.24-.24q-.15-.15-.24-.34l-.05-.13-.34-1.03-1.7-1.7h-1.77l-1.44 1.44a1 1 0 0 1-1.41-1.42l1.2-1.2-7.94-7.94a1 1 0 0 1-.17-.25l-.03-.1-.87-3.46a.8.8 0 0 1 .2-.71" />
    </IconBase>
  ))
);

BladeSwordFill.displayName = 'BladeSwordFill';

// Triple export pattern (lucide-react style)
export { BladeSwordFill, BladeSwordFill as BladeSwordFillIcon, BladeSwordFill as SiBladeSwordFill };
export default BladeSwordFill;
export type { BladeSwordFillProps };
