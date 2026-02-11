import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandbagBoldDuotone = memo(
  forwardRef<SVGSVGElement, HandbagBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M14.62 8.5c1.23 0 2.13-.02 2.91.3a4 4 0 0 1 1.64 1.26c.52.67.73 1.55 1.05 2.73l.11.4q.43 1.5.62 2.5c.12.68.15 1.32-.03 1.94a4 4 0 0 1-1.74 2.28c-.56.34-1.19.47-1.87.53q-1.01.07-2.58.06H9.27q-1.57.01-2.58-.06a4 4 0 0 1-1.86-.53 4 4 0 0 1-1.75-2.28 4 4 0 0 1-.03-1.94q.2-1 .62-2.5l.1-.4c.33-1.18.54-2.06 1.06-2.73A4 4 0 0 1 6.47 8.8c.78-.32 1.68-.3 2.9-.3zm-5.24 2c-1.4 0-1.82.02-2.15.15a2 2 0 0 0-.82.63c-.21.28-.34.67-.7 2.03l-.11.4a31 31 0 0 0-.58 2.33c-.1.55-.08.84-.02 1.03a2 2 0 0 0 .87 1.13c.17.1.44.2 1 .25s1.31.05 2.4.05h5.46c1.09 0 1.83 0 2.4-.05s.83-.14 1-.25a2 2 0 0 0 .87-1.13c.06-.2.08-.48-.02-1.03-.1-.56-.3-1.28-.58-2.33l-.1-.4c-.37-1.36-.5-1.75-.71-2.03a2 2 0 0 0-.82-.63c-.33-.13-.74-.15-2.15-.15z" clipRule="evenodd" opacity={.4} />
        <path d="M12 3.5A4.5 4.5 0 0 1 16.5 8v.56q-.8-.08-1.88-.06h-.12V8a2.5 2.5 0 0 0-5 0v.5h-.12q-1.08-.02-1.88.06V8A4.5 4.5 0 0 1 12 3.5" />
    </IconBase>
  ))
);

HandbagBoldDuotone.displayName = 'HandbagBoldDuotone';

// Triple export pattern (lucide-react style)
export { HandbagBoldDuotone, HandbagBoldDuotone as HandbagBoldDuotoneIcon, HandbagBoldDuotone as SiHandbagBoldDuotone };
export default HandbagBoldDuotone;
export type { HandbagBoldDuotoneProps };
