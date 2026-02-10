import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeRegularProps = Omit<IconBaseProps, 'children'>;

const GlobeRegular = memo(
  forwardRef<SVGSVGElement, GlobeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="globe" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m-8.21 10.5c.32 3.62 2.99 6.57 6.47 7.31a14 14 0 0 1-2.57-7.31zm12.52 0c-.14 2.58-1 5.12-2.57 7.31a8.25 8.25 0 0 0 6.47-7.31zm-7.11 0a12.3 12.3 0 0 0 2.8 7.11 12.3 12.3 0 0 0 2.8-7.11zm1.06-8.81a8.25 8.25 0 0 0-6.47 7.31h3.9c.14-2.58 1-5.12 2.57-7.31m1.74.2a12.3 12.3 0 0 0-2.8 7.11h5.6A12.3 12.3 0 0 0 12 4.14m1.74-.2a14 14 0 0 1 2.57 7.31h3.9a8.25 8.25 0 0 0-6.47-7.31" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeRegular.displayName = 'GlobeRegular';

// Triple export pattern (lucide-react style)
export { GlobeRegular, GlobeRegular as GlobeRegularIcon, GlobeRegular as SiGlobeRegular };
export default GlobeRegular;
export type { GlobeRegularProps };
