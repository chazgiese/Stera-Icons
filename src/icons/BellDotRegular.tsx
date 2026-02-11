import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellDotRegularProps = Omit<IconBaseProps, 'children'>;

const BellDotRegular = memo(
  forwardRef<SVGSVGElement, BellDotRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-dot" {...props}>
      <path fillRule="evenodd" d="M12.3 2.26a.75.75 0 0 1-.07 1.5L12 3.74A5.4 5.4 0 0 0 6.75 9.3v.38c0 1.34-.4 2.64-1.13 3.75L4.7 14.8c-.56.83.04 1.94 1.04 1.94h12.52c1 0 1.6-1.11 1.04-1.94l-.92-1.38a7 7 0 0 1-.74-1.5.75.75 0 0 1 1.41-.5q.22.62.58 1.17l.92 1.37a2.75 2.75 0 0 1-2.29 4.28h-2.08a4.25 4.25 0 0 1-8.36 0H5.74c-2.2 0-3.5-2.45-2.3-4.28l.93-1.37c.57-.87.88-1.88.88-2.92V9.3c0-3.86 2.99-7.05 6.75-7.05zM9.35 18.25a2.75 2.75 0 0 0 5.28 0z" clipRule="evenodd" />
        <path d="M16.5 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

BellDotRegular.displayName = 'BellDotRegular';

// Triple export pattern (lucide-react style)
export { BellDotRegular, BellDotRegular as BellDotRegularIcon, BellDotRegular as SiBellDotRegular };
export default BellDotRegular;
export type { BellDotRegularProps };
