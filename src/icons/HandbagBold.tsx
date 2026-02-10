import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagBoldProps = Omit<IconBaseProps, 'children'>;

const HandbagBold = memo(
  forwardRef<SVGSVGElement, HandbagBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3.5A4.5 4.5 0 0 1 16.5 8v.56a3.8 3.8 0 0 1 2.67 1.5c.52.67.73 1.55 1.05 2.73l.11.4q.43 1.5.62 2.5c.12.68.15 1.32-.03 1.94a4 4 0 0 1-1.74 2.28c-.56.34-1.19.47-1.87.53q-1.01.07-2.58.06H9.27q-1.57.02-2.58-.06a4 4 0 0 1-1.86-.53 4 4 0 0 1-1.75-2.28 4 4 0 0 1-.03-1.94q.2-1 .62-2.5l.1-.4c.33-1.18.54-2.06 1.06-2.73a3.78 3.78 0 0 1 2.67-1.5V8A4.5 4.5 0 0 1 12 3.5m-2.62 7c-1.41 0-1.82.02-2.15.15a2 2 0 0 0-.82.63c-.21.28-.34.67-.7 2.03l-.11.4a30 30 0 0 0-.58 2.33c-.1.55-.08.84-.02 1.03a2 2 0 0 0 .87 1.14c.17.1.44.19 1 .24s1.31.05 2.4.05h5.46c1.09 0 1.83 0 2.4-.05s.83-.14 1-.24a2 2 0 0 0 .87-1.14c.06-.2.08-.48-.02-1.03-.1-.56-.3-1.28-.58-2.33l-.1-.4c-.37-1.36-.5-1.75-.71-2.03a2 2 0 0 0-.82-.63c-.33-.13-.74-.15-2.15-.15zm2.62-5A2.5 2.5 0 0 0 9.5 8v.5h5V8A2.5 2.5 0 0 0 12 5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagBold.displayName = 'HandbagBold';

// Triple export pattern (lucide-react style)
export { HandbagBold, HandbagBold as HandbagBoldIcon, HandbagBold as SiHandbagBold };
export default HandbagBold;
export type { HandbagBoldProps };
