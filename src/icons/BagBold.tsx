import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BagBoldProps = Omit<IconBaseProps, 'children'>;

const BagBold = memo(
  forwardRef<SVGSVGElement, BagBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bag-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a4 4 0 0 1 4 4v.03l.25.01a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 16.43 4 15.2v-3.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4L8 6.03V6a4 4 0 0 1 4-4M9.8 8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 6 11.8v3.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C15.64 8 15.06 8 14.2 8zM12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

BagBold.displayName = 'BagBold';

// Triple export pattern (lucide-react style)
export { BagBold, BagBold as BagBoldIcon, BagBold as SiBagBold };
export default BagBold;
export type { BagBoldProps };
