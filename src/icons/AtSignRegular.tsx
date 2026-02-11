import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignRegularProps = Omit<IconBaseProps, 'children'>;

const AtSignRegular = memo(
  forwardRef<SVGSVGElement, AtSignRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="at-sign" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 0 1 9.7 10.72c-.25 2.52-1.81 4.05-3.6 4.04-1.25 0-2.34-.78-2.88-2.09A4.34 4.34 0 0 1 7.65 12a4.35 4.35 0 0 1 7.2-3.29V8.4a.75.75 0 0 1 1.5 0v4.5c0 1.94 1.01 2.6 1.76 2.6.79.01 1.9-.69 2.1-2.67q.04-.42.04-.83a8.25 8.25 0 1 0-4.13 7.15.75.75 0 0 1 .76 1.3A9.75 9.75 0 1 1 12 2.25m0 6.9a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignRegular.displayName = 'AtSignRegular';

// Triple export pattern (lucide-react style)
export { AtSignRegular, AtSignRegular as AtSignRegularIcon, AtSignRegular as SiAtSignRegular };
export default AtSignRegular;
export type { AtSignRegularProps };
