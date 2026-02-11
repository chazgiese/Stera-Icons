import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankRegularDuotone = memo(
  forwardRef<SVGSVGElement, BankRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank-duotone" {...props}>
      <path d="M5.25 16.75a.5.5 0 0 0-.5.5v1h-1.5v-1c0-1.1.9-2 2-2v-4.5h1.5v4.5h2.5v-4.5h1.5v4.5h2.5v-4.5h1.5v4.5h2.5v-4.5h1.5v4.5a2 2 0 0 1 2 2v1h-1.5v-1a.5.5 0 0 0-.5-.5zM12 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" opacity={0.4} />
        <path d="M21 18.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
        <path fillRule="evenodd" d="M11.68 3.32c.24-.1.52-.1.74.06l9 6a.75.75 0 0 1-.42 1.37H3a.75.75 0 0 1-.42-1.37l9-6zm-6.2 5.93h13.04L12 4.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankRegularDuotone.displayName = 'BankRegularDuotone';

// Triple export pattern (lucide-react style)
export { BankRegularDuotone, BankRegularDuotone as BankRegularDuotoneIcon, BankRegularDuotone as SiBankRegularDuotone };
export default BankRegularDuotone;
export type { BankRegularDuotoneProps };
