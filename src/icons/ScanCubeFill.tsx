import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanCubeFillProps = Omit<IconBaseProps, 'children'>;

const ScanCubeFill = memo(
  forwardRef<SVGSVGElement, ScanCubeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-cube-fill" {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M5.4 9.83c.16-.02.3.05.57.2l5.1 2.75v5.46c0 .28 0 .42-.07.54a.5.5 0 0 1-.37.22c-.13 0-.25-.06-.49-.18l-3.08-1.66c-.51-.28-.96-.51-1.3-.87a3 3 0 0 1-.61-1.03C4.99 14.8 5 14.3 5 13.7v-3.12c0-.3 0-.44.09-.56a.5.5 0 0 1 .32-.2M18.4 9.84c.24-.07.54.1.59.35l.01.12v3.82q.01.6-.14 1.13a3 3 0 0 1-.62 1.03c-.34.36-.79.6-1.3.87l-3.08 1.66c-.24.12-.35.19-.48.18a.5.5 0 0 1-.38-.22c-.07-.12-.07-.26-.07-.54v-5.46l5.33-2.87zM11.45 5.05a3 3 0 0 1 1.1 0c.44.1.84.32 1.3.57l3.09 1.66.1.05c.27.15.4.22.47.36a.5.5 0 0 1 0 .4c-.07.13-.21.21-.5.37L12 11.16l-5-2.7c-.3-.16-.44-.24-.5-.38a.5.5 0 0 1 0-.39c.06-.14.2-.21.46-.35l.1-.06 3.08-1.66c.47-.25.87-.48 1.31-.57M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanCubeFill.displayName = 'ScanCubeFill';

// Triple export pattern (lucide-react style)
export { ScanCubeFill, ScanCubeFill as ScanCubeFillIcon, ScanCubeFill as SiScanCubeFill };
export default ScanCubeFill;
export type { ScanCubeFillProps };
