import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LotusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LotusBoldDuotone = memo(
  forwardRef<SVGSVGElement, LotusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.82 4.6a1 1 0 0 1 .89.02l2.8 1.5a9 9 0 0 0-1.14 1.65l-1.43-.76-.44 2.12A9 9 0 0 0 4 9h-.52l.78-3.7.03-.12a1 1 0 0 1 .53-.59M18.4 4.57a1 1 0 0 1 1.34.72L20.52 9H20q-.77 0-1.5.13L18.06 7l-1.43.76a9 9 0 0 0-1.14-1.66l2.8-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.37 3.22a1 1 0 0 1 1.34.07l2.34 2.35a9 9 0 0 1 2.26 3.77A9 9 0 0 1 20 9h2a1 1 0 0 1 1 1v2a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9v-2a1 1 0 0 1 1-1h2a9 9 0 0 1 2.7.41 9 9 0 0 1 2.25-3.77l2.34-2.35zM20 11q-1.23 0-2.34.4c.17 2.5-.7 5.05-2.61 6.96l-.63.63A7 7 0 0 0 21 12v-1zM3 12a7 7 0 0 0 6.57 6.99l-.62-.63a9 9 0 0 1-2.61-6.96A7 7 0 0 0 4 11H3zm7.36-4.95a6.97 6.97 0 0 0 0 9.9L12 18.59l1.64-1.64a7 7 0 0 0 0-9.9L12 5.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusBoldDuotone.displayName = 'LotusBoldDuotone';

// Triple export pattern (lucide-react style)
export { LotusBoldDuotone, LotusBoldDuotone as LotusBoldDuotoneIcon, LotusBoldDuotone as SiLotusBoldDuotone };
export type { LotusBoldDuotoneProps };
