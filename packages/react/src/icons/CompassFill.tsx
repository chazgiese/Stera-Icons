import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CompassFillProps = Omit<IconBaseProps, 'children'>;

const CompassFill = memo(
  forwardRef<SVGSVGElement, CompassFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m5.2 5.8a1 1 0 0 0-1.06-.23l-6.5 2.5a1 1 0 0 0-.57.57l-2.5 6.5a1 1 0 0 0 1.29 1.3l6.5-2.5a1 1 0 0 0 .57-.58l2.5-6.5a1 1 0 0 0-.22-1.07" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassFill.displayName = 'CompassFill';

// Triple export pattern (lucide-react style)
export { CompassFill, CompassFill as CompassFillIcon, CompassFill as SiCompassFill };
export type { CompassFillProps };
