import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassFillProps = Omit<IconBaseProps, 'children'>;

const CompassFill = memo(
  forwardRef<SVGSVGElement, CompassFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="compass-fill" {...props}>
      <path d="M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m4.7 5.3a1 1 0 0 0-1.02-.25l-6 2a1 1 0 0 0-.59.53l-.04.1-2 6a1 1 0 0 0 1.27 1.27l6-2a1 1 0 0 0 .63-.63l2-6a1 1 0 0 0-.24-1.03" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassFill.displayName = 'CompassFill';

// Triple export pattern (lucide-react style)
export { CompassFill, CompassFill as CompassFillIcon, CompassFill as SiCompassFill };
export default CompassFill;
export type { CompassFillProps };
