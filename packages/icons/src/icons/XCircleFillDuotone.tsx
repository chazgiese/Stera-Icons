import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const XCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, XCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.62 8.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L10.76 12l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0L12 13.24l2.38 2.37c.34.34.9.34 1.24 0s.34-.9 0-1.24L13.24 12l2.38-2.37c.34-.35.34-.9 0-1.24s-.9-.34-1.24 0L12 10.76z" clipRule="evenodd" opacity={.4} />
        <path d="M8.38 8.38c.34-.34.9-.34 1.24 0L12 10.76l2.38-2.37c.34-.34.9-.34 1.24 0s.34.9 0 1.24L13.24 12l2.38 2.37c.34.35.34.9 0 1.24s-.9.34-1.24 0L12 13.24l-2.38 2.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L10.76 12 8.38 9.62c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

XCircleFillDuotone.displayName = 'XCircleFillDuotone';

// Triple export pattern
export { XCircleFillDuotone, XCircleFillDuotone as XCircleFillDuotoneIcon, XCircleFillDuotone as SiXCircleFillDuotone };
export default XCircleFillDuotone;
export type { XCircleFillDuotoneProps };
