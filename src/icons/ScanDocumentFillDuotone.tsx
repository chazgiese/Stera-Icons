import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDocumentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanDocumentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-document-fill-duotone" {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.35 6.25q.41-.02.8.06.3.07.59.25.32.22.6.54l1.64 1.72q.29.27.49.58a2 2 0 0 1 .23.56q.06.37.05.76v4.68q0 .4-.02.72 0 .32-.17.68c-.17.32-.44.6-.77.76q-.35.17-.67.17-.3.02-.72.02H9.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.76a2 2 0 0 1-.17-.68q-.02-.3-.02-.72V8.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.03.72-.02zm.42 1.25a.27.27 0 0 0-.27.27V9c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08h1.23a.27.27 0 0 0 .2-.45l-2.48-2.47a.3.3 0 0 0-.18-.08" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanDocumentFillDuotone.displayName = 'ScanDocumentFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanDocumentFillDuotone, ScanDocumentFillDuotone as ScanDocumentFillDuotoneIcon, ScanDocumentFillDuotone as SiScanDocumentFillDuotone };
export default ScanDocumentFillDuotone;
export type { ScanDocumentFillDuotoneProps };
