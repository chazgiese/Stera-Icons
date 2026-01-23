import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoinFillProps = Omit<IconBaseProps, 'children'>;

const CoinFill = memo(
  forwardRef<SVGSVGElement, CoinFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="coin-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 6c2.83 0 5.43.34 7.36.92.96.29 1.8.65 2.43 1.1C22.4 8.45 23 9.1 23 10v4c0 .9-.6 1.55-1.2 1.98a9 9 0 0 1-2.44 1.1c-1.93.58-4.53.92-7.36.92s-5.43-.34-7.36-.92a9 9 0 0 1-2.43-1.1C1.6 15.55 1 14.9 1 14v-4c0-.9.6-1.55 1.2-1.98a9 9 0 0 1 2.44-1.1C6.57 6.34 9.17 6 12 6m-1.5 9.96a32 32 0 0 0 3 0v-2a34 34 0 0 1-3 0zm7-2.44q-.95.18-2 .3v1.98q1.08-.12 2-.32zm-11 1.96q.92.2 2 .32v-1.98a26 26 0 0 1-2-.3zM3 13.98c0 .03.06.16.36.37q.4.29 1.14.57v-1.89q-.82-.25-1.5-.58zm18-1.53q-.68.33-1.5.58v1.89q.74-.29 1.14-.57c.3-.21.35-.34.36-.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

CoinFill.displayName = 'CoinFill';

// Triple export pattern (lucide-react style)
export { CoinFill, CoinFill as CoinFillIcon, CoinFill as SiCoinFill };
export default CoinFill;
export type { CoinFillProps };
