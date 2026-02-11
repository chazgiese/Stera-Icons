import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceRegularDuotone = memo(
  forwardRef<SVGSVGElement, PeaceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 3.75q.38 0 .75.04v7.9l5.59 5.59a8 8 0 0 1-1.06 1.06l-4.53-4.53v6.4a8 8 0 0 1-1.5 0v-6.4l-4.53 4.53a8 8 0 0 1-1.06-1.06l5.59-5.6v-7.9z" />
    </IconBase>
  ))
);

PeaceRegularDuotone.displayName = 'PeaceRegularDuotone';

// Triple export pattern (lucide-react style)
export { PeaceRegularDuotone, PeaceRegularDuotone as PeaceRegularDuotoneIcon, PeaceRegularDuotone as SiPeaceRegularDuotone };
export default PeaceRegularDuotone;
export type { PeaceRegularDuotoneProps };
