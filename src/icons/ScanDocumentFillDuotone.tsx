import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanDocumentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanDocumentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-document-fill-duotone" {...props}>
      <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.35 6.25q.41-.02.8.06.3.07.59.25.32.23.6.54l1.64 1.72q.29.27.49.58a2 2 0 0 1 .23.56q.06.37.05.76v4.68q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H9.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V8.6q0-.4.02-.72 0-.33.17-.68.26-.5.77-.76.35-.17.67-.17.3-.03.72-.02zm.42 1.25a.27.27 0 0 0-.27.27V9c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08h1.23a.27.27 0 0 0 .2-.45l-2.48-2.47a.3.3 0 0 0-.18-.08" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanDocumentFillDuotone.displayName = 'ScanDocumentFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanDocumentFillDuotone, ScanDocumentFillDuotone as ScanDocumentFillDuotoneIcon, ScanDocumentFillDuotone as SiScanDocumentFillDuotone };
export type { ScanDocumentFillDuotoneProps };
