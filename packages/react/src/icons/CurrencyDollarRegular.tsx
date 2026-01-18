import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyDollarRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarRegular = memo(
  forwardRef<SVGSVGElement, CurrencyDollarRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v3.25H17a.75.75 0 0 1 0 1.5h-4.25v4.5H15a3.75 3.75 0 1 1 0 7.5h-2.25V22a.75.75 0 0 1-1.5 0v-3.25H7a.75.75 0 0 1 0-1.5h4.25v-4.5H10a3.75 3.75 0 1 1 0-7.5h1.25V2c0-.41.34-.75.75-.75m.75 16H15a2.25 2.25 0 0 0 0-4.5h-2.25zM10 6.75a2.25 2.25 0 0 0 0 4.5h1.25v-4.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyDollarRegular.displayName = 'CurrencyDollarRegular';

export { CurrencyDollarRegular };
export type { CurrencyDollarRegularProps };
