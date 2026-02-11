import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiFillProps = Omit<IconBaseProps, 'children'>;

const WifiFill = memo(
  forwardRef<SVGSVGElement, WifiFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wifi-fill" {...props}>
      <path d="M12 14a5.7 5.7 0 0 1 3.4 1.12c.43.32.42.95.05 1.33l-2.02 2.08a2 2 0 0 1-2.86 0l-2.02-2.08c-.37-.38-.38-1.01.06-1.33A5.7 5.7 0 0 1 12 14" />
        <path d="M12 9c2.6 0 5 .96 6.85 2.56.41.35.41.97.03 1.36l-.66.69c-.4.4-1.04.4-1.48.04a7.6 7.6 0 0 0-9.48 0c-.44.35-1.08.36-1.48-.04l-.66-.7a.93.93 0 0 1 .03-1.35A10.5 10.5 0 0 1 12 9" />
        <path d="M12 4c3.95 0 7.56 1.52 10.3 4.01.4.37.4.99.02 1.37l-.67.69c-.39.4-1.03.4-1.46.03a12.4 12.4 0 0 0-16.38 0c-.43.37-1.07.37-1.46-.03l-.67-.69a.95.95 0 0 1 .02-1.37A15.3 15.3 0 0 1 12 4" />
    </IconBase>
  ))
);

WifiFill.displayName = 'WifiFill';

// Triple export pattern (lucide-react style)
export { WifiFill, WifiFill as WifiFillIcon, WifiFill as SiWifiFill };
export default WifiFill;
export type { WifiFillProps };
