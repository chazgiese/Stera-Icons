import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartRegularProps = Omit<IconBaseProps, 'children'>;

const HeartRegular = memo(
  forwardRef<SVGSVGElement, HeartRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="heart" {...props}>
      <path fillRule="evenodd" d="M16.29 3.5A5.5 5.5 0 0 1 21.75 9c0 2.3-1.23 4.08-1.69 4.73-2.22 3.12-5.31 5.27-7.59 7.1a.75.75 0 0 1-.94 0c-2.28-1.83-5.37-3.98-7.6-7.1A8.3 8.3 0 0 1 2.26 9 5.44 5.44 0 0 1 12 5.6c1-1.28 2.54-2.1 4.29-2.1m0 1.5c-1.6 0-2.98.95-3.6 2.33a.75.75 0 0 1-1.37 0A3.96 3.96 0 0 0 3.75 9c0 1.8.97 3.24 1.4 3.86 1.94 2.72 4.56 4.62 6.85 6.43 2.29-1.8 4.9-3.71 6.84-6.43A7 7 0 0 0 20.25 9c0-2.22-1.78-4-3.96-4" clipRule="evenodd" />
    </IconBase>
  ))
);

HeartRegular.displayName = 'HeartRegular';

// Triple export pattern (lucide-react style)
export { HeartRegular, HeartRegular as HeartRegularIcon, HeartRegular as SiHeartRegular };
export default HeartRegular;
export type { HeartRegularProps };
