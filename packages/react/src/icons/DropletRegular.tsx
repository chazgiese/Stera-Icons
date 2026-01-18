import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DropletRegularProps = Omit<IconBaseProps, 'children'>;

const DropletRegular = memo(
  forwardRef<SVGSVGElement, DropletRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.53 1.41a.8.8 0 0 1 .83-.07l.1.07h.01l.02.02.07.06a23 23 0 0 1 1.2 1.03c.76.7 1.78 1.69 2.8 2.85a23 23 0 0 1 2.85 3.94 9.6 9.6 0 0 1 1.34 4.5c0 4.93-3.9 8.94-8.75 8.94a8.84 8.84 0 0 1-8.75-8.93c0-1.54.56-3.09 1.34-4.51a23 23 0 0 1 2.85-3.94 37 37 0 0 1 4-3.88l.07-.06zm-.28 2.22a35 35 0 0 0-2.69 2.73 21 21 0 0 0-2.65 3.67 8 8 0 0 0-1.16 3.79A7.34 7.34 0 0 0 12 21.25a7.34 7.34 0 0 0 7.25-7.43 8 8 0 0 0-1.16-3.79 21 21 0 0 0-2.65-3.67A35 35 0 0 0 12 2.98z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletRegular.displayName = 'DropletRegular';

export { DropletRegular };
export type { DropletRegularProps };
