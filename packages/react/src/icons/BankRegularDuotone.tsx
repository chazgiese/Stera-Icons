import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BankRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankRegularDuotone = memo(
  forwardRef<SVGSVGElement, BankRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.75 17.25a2 2 0 0 1 2 2v1h-1.5v-1a.5.5 0 0 0-.5-.5H5.25a.5.5 0 0 0-.5.5v1h-1.5v-1c0-1.1.9-2 2-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.68 2.32c.24-.1.52-.1.74.06l9 6A.75.75 0 0 1 21 9.75H3a.75.75 0 0 1-.42-1.37l9-6zm-6.2 5.93h13.04L12 3.9z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M13 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.75 17.25h-1.5v-7.5h1.5zM10.75 17.25h-1.5v-7.5h1.5zM14.75 17.25h-1.5v-7.5h1.5zM18.75 17.25h-1.5v-7.5h1.5zM21 20.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BankRegularDuotone.displayName = 'BankRegularDuotone';

// Triple export pattern (lucide-react style)
export { BankRegularDuotone, BankRegularDuotone as BankRegularDuotoneIcon, BankRegularDuotone as SiBankRegularDuotone };
export type { BankRegularDuotoneProps };
