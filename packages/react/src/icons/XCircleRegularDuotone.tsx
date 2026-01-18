import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type XCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const XCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, XCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.97 7.97c.3-.3.77-.3 1.06 0L12 10.94l2.97-2.96a.75.75 0 0 1 1.06 1.06L13.06 12l2.97 2.96a.75.75 0 0 1-1.06 1.06L12 13.06l-2.97 2.97a.75.75 0 0 1-1.06-1.06L10.94 12 7.97 9.03a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

XCircleRegularDuotone.displayName = 'XCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { XCircleRegularDuotone, XCircleRegularDuotone as XCircleRegularDuotoneIcon, XCircleRegularDuotone as SiXCircleRegularDuotone };
export type { XCircleRegularDuotoneProps };
