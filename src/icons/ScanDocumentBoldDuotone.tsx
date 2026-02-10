import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDocumentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanDocumentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-document-bold-duotone" {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.35 6q.4-.02.86.07.35.08.66.28c.25.16.46.38.64.57l1.65 1.72q.29.27.52.63.18.3.26.64c.07.28.06.56.06.81v4.68q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02H9.6q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q7 15.8 7 15.4V8.6q0-.4.02-.74.01-.36.2-.77a2 2 0 0 1 .87-.87q.42-.2.77-.2Q9.2 6 9.6 6zM9.6 8l-.58.01v.01L9 8.6v6.8l.01.58h.01c.12.02.28.02.58.02h4.8l.58-.01v-.01c.02-.12.02-.28.02-.58V12h-1.4q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q11 9.8 11 9.4V8zM13 9.4l.01.59h.01l.58.01h1.1l-1.63-1.7-.07-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanDocumentBoldDuotone.displayName = 'ScanDocumentBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanDocumentBoldDuotone, ScanDocumentBoldDuotone as ScanDocumentBoldDuotoneIcon, ScanDocumentBoldDuotone as SiScanDocumentBoldDuotone };
export default ScanDocumentBoldDuotone;
export type { ScanDocumentBoldDuotoneProps };
