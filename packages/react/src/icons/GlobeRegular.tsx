import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GlobeRegularProps = Omit<IconBaseProps, 'children'>;

const GlobeRegular = memo(
  forwardRef<SVGSVGElement, GlobeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m-9.22 11.5a9.25 9.25 0 0 0 7.53 8.34 15.7 15.7 0 0 1-2.88-8.34zm13.79 0a15.7 15.7 0 0 1-2.88 8.34 9.25 9.25 0 0 0 7.53-8.34zm-7.64 0A14 14 0 0 0 12 20.84a14 14 0 0 0 3.07-8.09zm1.38-9.84a9.25 9.25 0 0 0-7.53 8.34h4.65c.14-2.94 1.1-5.84 2.88-8.34m1.69.25a14 14 0 0 0-3.07 8.09h6.14A14 14 0 0 0 12 3.16m1.69-.25c1.78 2.5 2.74 5.4 2.88 8.34h4.65a9.25 9.25 0 0 0-7.53-8.34" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeRegular.displayName = 'GlobeRegular';

// Triple export pattern (lucide-react style)
export { GlobeRegular, GlobeRegular as GlobeRegularIcon, GlobeRegular as SiGlobeRegular };
export type { GlobeRegularProps };
