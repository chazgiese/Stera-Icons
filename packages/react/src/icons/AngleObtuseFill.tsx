import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AngleObtuseFillProps = Omit<IconBaseProps, 'children'>;

const AngleObtuseFill = memo(
  forwardRef<SVGSVGElement, AngleObtuseFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20.51 12.02a1.5 1.5 0 0 1 1.96.8v.02a1.5 1.5 0 0 1-2.77 1.15v-.01a1.5 1.5 0 0 1 .81-1.96M17.42 8.45a1.5 1.5 0 0 1 2.12 0h.01a1.5 1.5 0 0 1-2.12 2.13 1.5 1.5 0 0 1 0-2.13M13.2 6.33a1.5 1.5 0 0 1 1.96-.8h.01a1.5 1.5 0 1 1-1.15 2.77 1.5 1.5 0 0 1-.82-1.97M5.19 5.38a1.5 1.5 0 0 1 1.07 2.8h-.01a1.5 1.5 0 0 1-1.07-2.8M10 4.5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3M1 7.93a1.5 1.5 0 0 1 2.12.12l7.55 8.45H22a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1-1.12-.5l-8-8.95A1.5 1.5 0 0 1 1 7.93" />
    </IconBase>
  ))
);

AngleObtuseFill.displayName = 'AngleObtuseFill';

export { AngleObtuseFill };
export type { AngleObtuseFillProps };
