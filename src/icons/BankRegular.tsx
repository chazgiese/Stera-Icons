import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankRegularProps = Omit<IconBaseProps, 'children'>;

const BankRegular = memo(
  forwardRef<SVGSVGElement, BankRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank" {...props}>
      <path fill="currentColor" d="M12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path fill="currentColor" fillRule="evenodd" d="M11.68 2.32c.24-.1.52-.1.74.06l9 6A.75.75 0 0 1 21 9.75h-2.25v7.5l.2.01a2 2 0 0 1 1.8 1.99v1H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.25v-1a2 2 0 0 1 1.8-1.99l.2-.01v-7.5H3a.75.75 0 0 1-.42-1.37l9-6zM5.25 18.75a.5.5 0 0 0-.5.5v1h14.5v-1a.5.5 0 0 0-.5-.5zm1.5-1.5h2.5v-7.5h-2.5zm4 0h2.5v-7.5h-2.5zm4 0h2.5v-7.5h-2.5zm-9.27-9h13.04L12 3.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankRegular.displayName = 'BankRegular';

// Triple export pattern (lucide-react style)
export { BankRegular, BankRegular as BankRegularIcon, BankRegular as SiBankRegular };
export default BankRegular;
export type { BankRegularProps };
