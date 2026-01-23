import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandbagBoldDuotone = memo(
  forwardRef<SVGSVGElement, HandbagBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.25 8c1.25 0 2.17-.02 2.96.31a4 4 0 0 1 1.65 1.3c.51.68.72 1.57 1.02 2.78l.6 2.4q.38 1.49.56 2.48c.1.67.13 1.3-.06 1.91a4 4 0 0 1-1.75 2.24c-.55.33-1.17.46-1.84.52q-1 .07-2.54.06h-7.7q-1.54.02-2.54-.06a4 4 0 0 1-1.84-.52 4 4 0 0 1-1.75-2.24 4 4 0 0 1-.06-1.91q.17-1 .56-2.48l.6-2.4c.3-1.2.5-2.1 1.02-2.79A4 4 0 0 1 5.8 8.31C6.6 7.98 7.5 8 8.75 8zm-6.5 2c-1.43 0-1.86.02-2.18.16a2 2 0 0 0-.83.64c-.21.28-.33.69-.68 2.08l-.6 2.4a30 30 0 0 0-.52 2.3c-.09.55-.07.82 0 1.01a2 2 0 0 0 .87 1.12c.16.1.43.19.98.24.56.05 1.3.05 2.36.05h7.7c1.07 0 1.8 0 2.36-.05s.82-.14.98-.24a2 2 0 0 0 .88-1.12c.06-.19.08-.46 0-1.01-.1-.56-.27-1.27-.53-2.3l-.6-2.4c-.35-1.4-.47-1.8-.68-2.08a2 2 0 0 0-.83-.64c-.32-.14-.75-.16-2.18-.16z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a5 5 0 0 1 5 5v1.04A18 18 0 0 0 15.44 8H15V7a3 3 0 1 0-6 0v1h-.45q-.87-.01-1.55.04V7a5 5 0 0 1 5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagBoldDuotone.displayName = 'HandbagBoldDuotone';

// Triple export pattern (lucide-react style)
export { HandbagBoldDuotone, HandbagBoldDuotone as HandbagBoldDuotoneIcon, HandbagBoldDuotone as SiHandbagBoldDuotone };
export default HandbagBoldDuotone;
export type { HandbagBoldDuotoneProps };
