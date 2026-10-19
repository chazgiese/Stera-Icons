import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleFillProps = Omit<IconBaseProps, 'children'>;

const XCircleFill = memo(
  forwardRef<SVGSVGElement, XCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.62 8.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L10.76 12l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0L12 13.24l2.38 2.37c.34.34.9.34 1.24 0s.34-.9 0-1.24L13.24 12l2.38-2.37c.34-.35.34-.9 0-1.24s-.9-.34-1.24 0L12 10.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

XCircleFill.displayName = 'XCircleFill';

// Triple export pattern
export { XCircleFill, XCircleFill as XCircleFillIcon, XCircleFill as SiXCircleFill };
export default XCircleFill;
export type { XCircleFillProps };
