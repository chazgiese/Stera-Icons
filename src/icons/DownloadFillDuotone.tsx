import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DownloadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DownloadFillDuotone = memo(
  forwardRef<SVGSVGElement, DownloadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="download-fill-duotone" {...props}>
      <path d="M20.5 14.5a1 1 0 0 1 1 1c0 1.31.01 2.22-.25 2.99a4.5 4.5 0 0 1-2.76 2.76c-.77.26-1.68.25-2.99.25h-7c-1.31 0-2.22.01-2.99-.25a4.5 4.5 0 0 1-2.76-2.76c-.26-.77-.25-1.68-.25-2.99a1 1 0 0 1 2 0c0 1.48.01 1.97.14 2.33a2.5 2.5 0 0 0 1.53 1.53c.36.13.85.14 2.33.14h7c1.48 0 1.97-.01 2.33-.14a2.5 2.5 0 0 0 1.53-1.53c.13-.36.14-.85.14-2.33a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M12 2.5a1 1 0 0 1 1 1V9h4.5a1 1 0 0 1 .7 1.7l-5.5 5.5a1 1 0 0 1-1.33.07l-.08-.06-5.5-5.5A1 1 0 0 1 6.5 9H11V3.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

DownloadFillDuotone.displayName = 'DownloadFillDuotone';

// Triple export pattern (lucide-react style)
export { DownloadFillDuotone, DownloadFillDuotone as DownloadFillDuotoneIcon, DownloadFillDuotone as SiDownloadFillDuotone };
export default DownloadFillDuotone;
export type { DownloadFillDuotoneProps };
