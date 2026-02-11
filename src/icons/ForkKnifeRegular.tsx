import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForkKnifeRegularProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeRegular = memo(
  forwardRef<SVGSVGElement, ForkKnifeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="fork-knife" {...props}>
      <path fillRule="evenodd" d="M10 2.25c.41 0 .75.34.75.75v6.01l-.01.13-.01.02q0 .06-.04.12v.01l-1.18 2.75q-.26.61-.26 1.28v6.18a2.25 2.25 0 0 1-4.5 0v-6.18q0-.66-.26-1.28L3.3 9.3v-.02l-.04-.12v-.02l-.02-.09V3a.75.75 0 0 1 1.5 0v5.25h1.5V3.5a.75.75 0 0 1 1.5 0v4.75h1.5V3c0-.41.34-.75.75-.75m-4.13 9.2q.38.9.38 1.87v6.18a.75.75 0 0 0 1.5 0v-6.18q0-.97.38-1.87l.73-1.7H5.14zM19.83 2.27a.75.75 0 0 1 .92.73v16.5a2.25 2.25 0 0 1-4.5 0v-3.75H14a.75.75 0 0 1-.75-.75c0-4.3.35-7.2 1.38-9.17 1.08-2.06 2.82-3 5.2-3.56M17.75 19.5a.75.75 0 0 0 1.5 0v-3.75h-1.5zm1.5-15.52c-1.6.5-2.62 1.25-3.29 2.54-.8 1.52-1.17 3.88-1.2 7.73h4.49z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForkKnifeRegular.displayName = 'ForkKnifeRegular';

// Triple export pattern (lucide-react style)
export { ForkKnifeRegular, ForkKnifeRegular as ForkKnifeRegularIcon, ForkKnifeRegular as SiForkKnifeRegular };
export default ForkKnifeRegular;
export type { ForkKnifeRegularProps };
