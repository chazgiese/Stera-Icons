import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeRegularProps = Omit<IconBaseProps, 'children'>;

const GlobeRegular = memo(
  forwardRef<SVGSVGElement, GlobeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-8.72 11c.34 3.9 3.22 7.07 6.98 7.83-1.7-2.34-2.63-5.07-2.77-7.83zm13.23 0c-.14 2.76-1.07 5.49-2.77 7.83 3.76-.76 6.64-3.93 6.98-7.83zm-7.51 0c.15 2.72 1.15 5.4 3 7.62 1.85-2.22 2.85-4.9 3-7.62zm1.26-9.33c-3.76.76-6.64 3.93-6.98 7.83H7.5c.14-2.76 1.07-5.49 2.77-7.83m1.74.2c-1.85 2.23-2.85 4.9-3 7.63h6c-.15-2.72-1.15-5.4-3-7.62m1.74-.2c1.7 2.34 2.63 5.07 2.77 7.83h4.2c-.33-3.9-3.21-7.07-6.97-7.83" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeRegular.displayName = 'GlobeRegular';

// Triple export pattern
export { GlobeRegular, GlobeRegular as GlobeRegularIcon, GlobeRegular as SiGlobeRegular };
export default GlobeRegular;
export type { GlobeRegularProps };
