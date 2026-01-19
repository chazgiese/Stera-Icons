import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanDocumentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanDocumentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-document-duotone" {...props}>
      <path d="M3 16.25c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2c0-.41.34-.75.75-.75M21 16.25c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2c0-.41.34-.75.75-.75M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.35 6.25q.41-.01.8.06.3.07.59.25.32.22.6.54l1.64 1.72q.29.27.49.58a2 2 0 0 1 .23.56q.06.37.05.76v4.68q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H9.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V8.6q0-.4.02-.72 0-.32.17-.68c.17-.32.44-.6.77-.76q.35-.17.67-.17.3-.02.72-.02zM9.6 7.75l-.6.01q-.16.02-.11.02a.3.3 0 0 0-.11.1L8.76 8l-.01.6v6.8l.01.6c.01.12.03.13.02.11q.04.08.1.11l.12.02.6.01h4.8l.6-.01q.16-.03.11-.02a.3.3 0 0 0 .11-.1l.02-.12.01-.6v-3.65H13.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V7.75zm3.15 1.65.01.6q.02.16.02.11.04.08.1.11l.12.02.6.01h1.62l-.04-.09-.28-.3-1.65-1.73a2 2 0 0 0-.32-.3l-.14-.07h-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanDocumentRegularDuotone.displayName = 'ScanDocumentRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanDocumentRegularDuotone, ScanDocumentRegularDuotone as ScanDocumentRegularDuotoneIcon, ScanDocumentRegularDuotone as SiScanDocumentRegularDuotone };
export type { ScanDocumentRegularDuotoneProps };
