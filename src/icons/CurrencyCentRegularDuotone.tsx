import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-cent-duotone" {...props}>
      <path d="M11.25 19.14q.75.13 1.5.1V22a.75.75 0 0 1-1.5 0zM11.25 6.39q.75-.17 1.5-.13v11.48q-.75.04-1.5-.13zM12 1.25c.41 0 .75.34.75.75v2.75q-.75-.02-1.5.1V2c0-.41.34-.75.75-.75" opacity={0.4} />
        <path d="M9.46 5.42a7.25 7.25 0 0 1 8.04 1.33.75.75 0 0 1-1.03 1.09 5.75 5.75 0 1 0 .43 7.86.75.75 0 0 1 1.15.96 7.25 7.25 0 1 1-8.6-11.24" />
    </IconBase>
  ))
);

CurrencyCentRegularDuotone.displayName = 'CurrencyCentRegularDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyCentRegularDuotone, CurrencyCentRegularDuotone as CurrencyCentRegularDuotoneIcon, CurrencyCentRegularDuotone as SiCurrencyCentRegularDuotone };
export default CurrencyCentRegularDuotone;
export type { CurrencyCentRegularDuotoneProps };
