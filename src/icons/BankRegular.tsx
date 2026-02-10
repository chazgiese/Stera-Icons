import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankRegularProps = Omit<IconBaseProps, 'children'>;

const BankRegular = memo(
  forwardRef<SVGSVGElement, BankRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bank" {...props}>
      <path fill="currentColor" d="M12 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        <path fill="currentColor" fillRule="evenodd" d="M11.68 3.32c.24-.1.52-.1.74.06l9 6a.75.75 0 0 1-.42 1.37h-2.25V15q0 .13-.05.25h.05a2 2 0 0 1 2 2v1H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.25v-1c0-1.1.9-2 2-2h.05a1 1 0 0 1-.05-.25v-4.25H3a.75.75 0 0 1-.42-1.37l9-6zM5.25 16.75a.5.5 0 0 0-.5.5v1h14.5v-1a.5.5 0 0 0-.5-.5zM6.75 15q0 .13-.05.25h2.6a1 1 0 0 1-.05-.25v-4.25h-2.5zm4 0q0 .13-.05.25h2.6a1 1 0 0 1-.05-.25v-4.25h-2.5zm4 0q0 .13-.05.25h2.6a1 1 0 0 1-.05-.25v-4.25h-2.5zM5.48 9.25h13.04L12 4.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankRegular.displayName = 'BankRegular';

// Triple export pattern (lucide-react style)
export { BankRegular, BankRegular as BankRegularIcon, BankRegular as SiBankRegular };
export default BankRegular;
export type { BankRegularProps };
