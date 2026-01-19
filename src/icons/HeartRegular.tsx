import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HeartRegularProps = Omit<IconBaseProps, 'children'>;

const HeartRegular = memo(
  forwardRef<SVGSVGElement, HeartRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="heart" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.76 2.25a6.04 6.04 0 0 1 5.99 6.09 9.4 9.4 0 0 1-1.86 5.26c-2.45 3.5-5.88 5.91-8.42 7.98a.75.75 0 0 1-.94 0c-2.54-2.07-5.97-4.47-8.42-7.98a9.4 9.4 0 0 1-1.86-5.26 6.04 6.04 0 0 1 5.99-6.09c1.95 0 3.67.95 4.76 2.4a6 6 0 0 1 4.76-2.4m0 1.5a4.5 4.5 0 0 0-4.08 2.67.75.75 0 0 1-1.36 0 4.5 4.5 0 0 0-4.08-2.67 4.54 4.54 0 0 0-4.49 4.59c0 2.06 1.1 3.7 1.58 4.4C6.5 15.84 9.45 18 12 20.04c2.55-2.04 5.5-4.2 7.67-7.3a8 8 0 0 0 1.58-4.4 4.54 4.54 0 0 0-4.49-4.59" clipRule="evenodd" />
    </IconBase>
  ))
);

HeartRegular.displayName = 'HeartRegular';

// Triple export pattern (lucide-react style)
export { HeartRegular, HeartRegular as HeartRegularIcon, HeartRegular as SiHeartRegular };
export default HeartRegular;
export type { HeartRegularProps };
