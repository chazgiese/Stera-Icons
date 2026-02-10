import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BladeSwordRegularProps = Omit<IconBaseProps, 'children'>;

const BladeSwordRegular = memo(
  forwardRef<SVGSVGElement, BladeSwordRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="blade-sword" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.72 3.72a.8.8 0 0 1 .71-.2l3.46.87q.2.05.35.2l8.12 8.11 1.2-1.2a.75.75 0 1 1 1.06 1.06l-1.51 1.51v1.98l1.82 1.81 1.08.36q.21.07.37.24l.25.24c.37.38.38 1 0 1.37l-.56.56-.07.06a1 1 0 0 1-1.22 0l-.08-.06-.24-.25a1 1 0 0 1-.2-.27l-.04-.1-.36-1.09-1.81-1.81h-1.98l-1.5 1.5a.75.75 0 0 1-1.07-1.05l1.2-1.2L4.6 8.24a1 1 0 0 1-.17-.25l-.03-.1-.87-3.46a.8.8 0 0 1 .2-.71m2.07 3.6 7.97 7.98 1.54-1.54L7.33 5.8l-2.05-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BladeSwordRegular.displayName = 'BladeSwordRegular';

// Triple export pattern (lucide-react style)
export { BladeSwordRegular, BladeSwordRegular as BladeSwordRegularIcon, BladeSwordRegular as SiBladeSwordRegular };
export default BladeSwordRegular;
export type { BladeSwordRegularProps };
