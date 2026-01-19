import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GlobeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeRegularDuotone = memo(
  forwardRef<SVGSVGElement, GlobeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="globe-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.75q.87 0 1.68.16c1.79 2.5 2.75 5.4 2.89 8.34h4.65a9 9 0 0 1 0 1.5h-4.65a15.7 15.7 0 0 1-2.89 8.34 9 9 0 0 1-3.36 0 15.7 15.7 0 0 1-2.89-8.34H2.78a9 9 0 0 1 0-1.5h4.65c.14-2.94 1.1-5.84 2.88-8.34A9 9 0 0 1 12 2.75m-3.07 10A14 14 0 0 0 12 20.84a14 14 0 0 0 3.07-8.09zM12 3.16a14 14 0 0 0-3.07 8.09h6.14A14 14 0 0 0 12 3.16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeRegularDuotone.displayName = 'GlobeRegularDuotone';

// Triple export pattern (lucide-react style)
export { GlobeRegularDuotone, GlobeRegularDuotone as GlobeRegularDuotoneIcon, GlobeRegularDuotone as SiGlobeRegularDuotone };
export type { GlobeRegularDuotoneProps };
