import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanCubeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCubeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanCubeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.25 4.45q.75-.15 1.5 0c.59.12 1.13.43 1.85.81l2.02 1.1c.8.42 1.4.73 1.85 1.21q.57.61.83 1.4c.21.62.2 1.3.2 2.2v1.65c0 .9.01 1.6-.2 2.21q-.26.79-.83 1.4c-.45.48-1.06.8-1.85 1.22l-2.02 1.09c-.72.38-1.26.69-1.85.8q-.75.15-1.5 0c-.59-.11-1.13-.42-1.85-.8l-2.02-1.09c-.8-.43-1.4-.74-1.85-1.22a4 4 0 0 1-.83-1.4c-.21-.62-.2-1.3-.2-2.2v-1.65c0-.9-.01-1.59.2-2.21q.26-.79.83-1.4c.45-.48 1.06-.8 1.85-1.22L9.4 5.26c.72-.38 1.26-.69 1.85-.8m-4.74 5.73-.01 1v1.64c0 1.05.01 1.34.1 1.58q.12.38.39.66c.17.19.42.33 1.34.83l2.02 1.09.65.34V12.6zM13 12.6v4.72l.65-.34 2.02-1.1c.92-.49 1.17-.63 1.34-.82q.27-.29.4-.66c.08-.24.09-.53.09-1.58v-1.64l-.01-1zm-.65-6.18a2 2 0 0 0-.7 0c-.23.04-.47.16-1.3.6l-2.02 1.1-.71.38L12 10.86l4.38-2.36-.71-.39-2.02-1.09a6 6 0 0 0-1.3-.6" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCubeBoldDuotone.displayName = 'ScanCubeBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanCubeBoldDuotone, ScanCubeBoldDuotone as ScanCubeBoldDuotoneIcon, ScanCubeBoldDuotone as SiScanCubeBoldDuotone };
export type { ScanCubeBoldDuotoneProps };
