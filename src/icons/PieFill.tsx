import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PieFillProps = Omit<IconBaseProps, 'children'>;

const PieFill = memo(
  forwardRef<SVGSVGElement, PieFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pie-fill" {...props}>
      <path fill="currentColor" d="M17 14.62a4 4 0 0 0 2.5.88l.28-.01a4 4 0 0 0 .56-.08l-1.04 2.93A2.5 2.5 0 0 1 16.94 20H7.06c-1.06 0-2-.66-2.36-1.66l-1.05-2.93q.42.09.85.09h.23A4 4 0 0 0 7 14.61a4 4 0 0 0 2.5.88h.23a4 4 0 0 0 2.27-.88 4 4 0 0 0 2.5.88h.23a4 4 0 0 0 2.27-.88" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5c4.7 0 8.51 2.65 9.79 6.28l.05.18c.1.42.1.86-.12 1.23a2.53 2.53 0 0 1-4.15.4l-.57-.66-.57.67a2.53 2.53 0 0 1-3.86 0l-.57-.67-.57.67a2.53 2.53 0 0 1-3.86 0L7 12.43l-.57.67a2.53 2.53 0 0 1-4.15-.4 1.7 1.7 0 0 1-.06-1.42l.12-.33C3.68 7.6 7.21 5.16 11.56 5zm-1.3 2.8a1 1 0 0 0-1.4 0l-1 1a1 1 0 0 0 1.4 1.4l1-1a1 1 0 0 0 0-1.4m4 0a1 1 0 0 0-1.4 1.4l1 1a1 1 0 0 0 1.4-1.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

PieFill.displayName = 'PieFill';

// Triple export pattern (lucide-react style)
export { PieFill, PieFill as PieFillIcon, PieFill as SiPieFill };
export default PieFill;
export type { PieFillProps };
