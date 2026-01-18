import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlertCircleFillProps = Omit<IconBaseProps, 'children'>;

const AlertCircleFill = memo(
  forwardRef<SVGSVGElement, AlertCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertCircleFill.displayName = 'AlertCircleFill';

export { AlertCircleFill };
export type { AlertCircleFillProps };
