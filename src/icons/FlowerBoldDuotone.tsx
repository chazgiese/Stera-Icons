import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowerBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flower-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 2.58c1.7-.97 3.4-.64 4.62.37q.5.41.88.96.38-.55.88-.96a3.9 3.9 0 0 1 4.62-.37c1.7.97 2.27 2.6 1.99 4.16q-.1.62-.39 1.2.65.06 1.26.28A3.9 3.9 0 0 1 23 12a3.9 3.9 0 0 1-2.64 3.78 5 5 0 0 1-1.26.27q.28.6.39 1.21a3.85 3.85 0 0 1-2 4.16c-1.7.97-3.4.64-4.6-.37q-.51-.41-.9-.96-.37.55-.87.96a3.9 3.9 0 0 1-4.62.37 3.85 3.85 0 0 1-1.99-4.15q.1-.63.39-1.22a5 5 0 0 1-1.26-.27A3.9 3.9 0 0 1 1 12a3.9 3.9 0 0 1 2.64-3.78q.6-.23 1.26-.27-.28-.6-.39-1.22a3.85 3.85 0 0 1 2-4.15m10 1.74c-.91-.52-1.71-.35-2.34.17A3.4 3.4 0 0 0 13 7.06v.04a5 5 0 0 0-2 0v-.24A3.4 3.4 0 0 0 9.83 4.5c-.63-.53-1.43-.7-2.34-.17-.92.52-1.16 1.28-1.02 2.06.15.86.78 1.76 1.68 2.28l.08.04a5 5 0 0 0-1 1.74l-.07-.04-.17-.1c-.87-.43-1.9-.49-2.68-.2S3 10.97 3 12s.54 1.62 1.32 1.9c.84.3 1.95.22 2.85-.3l.08-.04q.32.97.99 1.73l-.08.05a3.5 3.5 0 0 0-1.68 2.27c-.14.8.1 1.55 1.02 2.07.91.52 1.71.36 2.34-.17A3.4 3.4 0 0 0 11 16.94v-.04a5 5 0 0 0 2 0v.04c0 1.02.47 2 1.16 2.57.63.52 1.43.7 2.34.17.92-.52 1.16-1.28 1.02-2.07a3.5 3.5 0 0 0-1.68-2.27l-.08-.05q.66-.76 1-1.73l.07.04.17.1c.87.43 1.9.49 2.68.2A1.9 1.9 0 0 0 21 12c0-1.03-.54-1.62-1.32-1.9a3.6 3.6 0 0 0-2.85.3l-.08.04a5 5 0 0 0-1-1.74l.09-.04a3.5 3.5 0 0 0 1.68-2.28c.14-.78-.1-1.54-1.02-2.06" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowerBoldDuotone.displayName = 'FlowerBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowerBoldDuotone, FlowerBoldDuotone as FlowerBoldDuotoneIcon, FlowerBoldDuotone as SiFlowerBoldDuotone };
export default FlowerBoldDuotone;
export type { FlowerBoldDuotoneProps };
