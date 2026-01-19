import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CoinRegularProps = Omit<IconBaseProps, 'children'>;

const CoinRegular = memo(
  forwardRef<SVGSVGElement, CoinRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="coin" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 6.25c2.81 0 5.39.34 7.29.91.94.28 1.76.64 2.36 1.06.58.41 1.1 1 1.1 1.78v4c0 .78-.52 1.37-1.1 1.78-.6.42-1.42.78-2.36 1.06-1.9.57-4.48.91-7.29.91s-5.39-.34-7.29-.91a8 8 0 0 1-2.36-1.06c-.58-.41-1.1-1-1.1-1.78v-4c0-.78.52-1.37 1.1-1.78.6-.42 1.42-.78 2.36-1.06 1.9-.57 4.48-.91 7.29-.91m-1.75 9.95a32 32 0 0 0 3.5 0v-2.5a34 34 0 0 1-3.5 0zm7.5-2.98q-1.16.24-2.5.37v2.49q1.36-.15 2.5-.4zm-11.5 2.47q1.14.25 2.5.39v-2.49q-1.34-.13-2.5-.37zM2.75 14c0 .05.04.25.47.56q.53.37 1.53.72v-2.43l-.04-.01a9 9 0 0 1-1.96-.8zm18.5-1.97q-.82.48-1.96.81l-.04.01v2.43a6 6 0 0 0 1.53-.72c.43-.31.47-.5.47-.56zM12 7.75c-2.7 0-5.13.33-6.86.85q-1.29.4-1.92.84c-.43.31-.47.5-.47.56 0 .05.04.25.47.56q.62.44 1.92.84c1.73.52 4.15.85 6.86.85s5.13-.33 6.86-.85a7 7 0 0 0 1.92-.84c.43-.31.47-.5.47-.56 0-.05-.04-.25-.47-.56a7 7 0 0 0-1.92-.84A25 25 0 0 0 12 7.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CoinRegular.displayName = 'CoinRegular';

// Triple export pattern (lucide-react style)
export { CoinRegular, CoinRegular as CoinRegularIcon, CoinRegular as SiCoinRegular };
export default CoinRegular;
export type { CoinRegularProps };
