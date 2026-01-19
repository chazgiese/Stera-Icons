import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BagBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BagBoldDuotone = memo(
  forwardRef<SVGSVGElement, BagBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bag-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 6q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v5.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-5.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 6 8.8 6zM8.8 8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 11.8v5.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-5.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 8 16.06 8 15.2 8z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 3a3 3 0 0 0-3 3h-.2Q7.75 6 7 6.03V6a5 5 0 0 1 10 0v.03q-.75-.04-1.8-.03H15a3 3 0 0 0-3-3" />
    </IconBase>
  ))
);

BagBoldDuotone.displayName = 'BagBoldDuotone';

// Triple export pattern (lucide-react style)
export { BagBoldDuotone, BagBoldDuotone as BagBoldDuotoneIcon, BagBoldDuotone as SiBagBoldDuotone };
export type { BagBoldDuotoneProps };
