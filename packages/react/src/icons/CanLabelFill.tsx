import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CanLabelFillProps = Omit<IconBaseProps, 'children'>;

const CanLabelFill = memo(
  forwardRef<SVGSVGElement, CanLabelFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17.16 21a2 2 0 0 1-1.74 1H8.58a2 2 0 0 1-1.74-1l-1.13-2h12.58z" />
        <path fill="currentColor" fillRule="evenodd" d="m19 16.7-.01.3H5L5 16.7V8h14zm-7-6.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path fill="currentColor" d="M17.5 2a1 1 0 0 1 .21 1.98l.76 1.33a4 4 0 0 1 .31.69H5.22a4 4 0 0 1 .3-.69l.77-1.33A1 1 0 0 1 6.5 2z" />
    </IconBase>
  ))
);

CanLabelFill.displayName = 'CanLabelFill';

// Triple export pattern (lucide-react style)
export { CanLabelFill, CanLabelFill as CanLabelFillIcon, CanLabelFill as SiCanLabelFill };
export type { CanLabelFillProps };
