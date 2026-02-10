import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassBoldProps = Omit<IconBaseProps, 'children'>;

const CompassBold = memo(
  forwardRef<SVGSVGElement, CompassBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="compass-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.68 7.05a1 1 0 0 1 1.27 1.27l-2 6a1 1 0 0 1-.63.63l-6 2a1 1 0 0 1-1.27-1.27l2-6 .05-.1a1 1 0 0 1 .58-.53zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassBold.displayName = 'CompassBold';

// Triple export pattern (lucide-react style)
export { CompassBold, CompassBold as CompassBoldIcon, CompassBold as SiCompassBold };
export default CompassBold;
export type { CompassBoldProps };
