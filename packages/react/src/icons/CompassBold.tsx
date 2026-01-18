import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CompassBoldProps = Omit<IconBaseProps, 'children'>;

const CompassBold = memo(
  forwardRef<SVGSVGElement, CompassBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.14 6.57a1 1 0 0 1 1.3 1.29l-2.5 6.5a1 1 0 0 1-.58.57l-6.5 2.5a1 1 0 0 1-1.3-1.29l2.5-6.5a1 1 0 0 1 .58-.57zM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassBold.displayName = 'CompassBold';

// Triple export pattern (lucide-react style)
export { CompassBold, CompassBold as CompassBoldIcon, CompassBold as SiCompassBold };
export type { CompassBoldProps };
