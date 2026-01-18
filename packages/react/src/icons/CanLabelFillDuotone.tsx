import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CanLabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CanLabelFillDuotone = memo(
  forwardRef<SVGSVGElement, CanLabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.16 21a2 2 0 0 1-1.74 1H8.58a2 2 0 0 1-1.74-1l-1.13-2h12.58z" />
        <path fillRule="evenodd" d="m19 16.7-.01.3H5L5 16.7V8h14zm-7-6.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path d="M5.12 6.34a4 4 0 0 1 .4-1.03l.77-1.33A1 1 0 0 1 6.5 2h11a1 1 0 0 1 .21 1.98l.76 1.33a4 4 0 0 1 .31.69H5.22q-.07.17-.1.34" />
        <path fill="currentColor" d="M18.99 17a4 4 0 0 1-.52 1.69l-.18.31H5.71l-.18-.31A4 4 0 0 1 5 17zM12 10.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.78 6A4 4 0 0 1 19 7.3V8H5v-.7A4 4 0 0 1 5.22 6z" />
    </IconBase>
  ))
);

CanLabelFillDuotone.displayName = 'CanLabelFillDuotone';

export { CanLabelFillDuotone };
export type { CanLabelFillDuotoneProps };
