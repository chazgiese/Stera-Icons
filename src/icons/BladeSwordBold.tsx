import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeSwordBoldProps = Omit<IconBaseProps, 'children'>;

const BladeSwordBold = memo(
  forwardRef<SVGSVGElement, BladeSwordBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-sword-bold" {...props}>
      <path fillRule="evenodd" d="M3.54 3.54a1 1 0 0 1 .95-.26l3.46.86a1 1 0 0 1 .47.27l7.94 7.94 1.02-1.02a1 1 0 0 1 1.42 1.41l-1.44 1.44v1.76l1.7 1.7 1.03.35q.27.09.47.3l.25.24c.47.47.47 1.24 0 1.72l-.56.55-.1.09c-.44.36-1.09.36-1.53 0l-.1-.09-.24-.24q-.15-.16-.24-.34l-.05-.13-.34-1.03-1.7-1.7h-1.77l-1.44 1.44a1 1 0 0 1-1.41-1.42l1.02-1.02-7.94-7.94a1 1 0 0 1-.22-.34l-.05-.13-.86-3.46a1 1 0 0 1 .26-.95M6.02 7.2l7.74 7.74 1.18-1.17L7.2 6.02l-1.58-.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeSwordBold.displayName = 'BladeSwordBold';

// Triple export pattern (lucide-react style)
export { BladeSwordBold, BladeSwordBold as BladeSwordBoldIcon, BladeSwordBold as SiBladeSwordBold };
export default BladeSwordBold;
export type { BladeSwordBoldProps };
