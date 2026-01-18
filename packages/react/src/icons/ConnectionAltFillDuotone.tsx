import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ConnectionAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2A4.5 4.5 0 0 1 11 6.43c.07 4.65 1.92 6.5 6.57 6.57A4.5 4.5 0 1 1 13 17.57c-.07-4.65-1.92-6.5-6.57-6.57a4.5 4.5 0 0 1 .07-9" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionAltFillDuotone.displayName = 'ConnectionAltFillDuotone';

export { ConnectionAltFillDuotone };
export type { ConnectionAltFillDuotoneProps };
