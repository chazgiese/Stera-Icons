import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanDocumentBoldProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentBold = memo(
  forwardRef<SVGSVGElement, ScanDocumentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-document-bold" {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12.77 6q.21.01.44.07.35.08.66.28c.26.16.46.38.64.57l1.65 1.72q.29.27.52.63.18.3.26.64c.07.28.06.56.06.81v4.68q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02H9.6q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q7 15.8 7 15.4V8.6q0-.4.02-.74.01-.35.2-.77a2 2 0 0 1 .87-.87c.27-.14.54-.18.77-.2Q9.2 6 9.6 6h3.17M9.6 8l-.58.01v.01L9 8.6v6.8l.01.58h.01c.12.02.28.02.58.02h4.8l.58-.01v-.01c.02-.12.02-.28.02-.58V12h-1.4q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q11 9.8 11 9.4V8zM13 9.4l.01.58h.01c.12.02.28.02.58.02h1.1l-1.63-1.7-.07-.06z" clipRule="evenodd" />
        <path fill="currentColor" d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanDocumentBold.displayName = 'ScanDocumentBold';

// Triple export pattern (lucide-react style)
export { ScanDocumentBold, ScanDocumentBold as ScanDocumentBoldIcon, ScanDocumentBold as SiScanDocumentBold };
export default ScanDocumentBold;
export type { ScanDocumentBoldProps };
