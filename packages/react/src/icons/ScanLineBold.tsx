import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanLineBoldProps = Omit<IconBaseProps, 'children'>;

const ScanLineBold = memo(
  forwardRef<SVGSVGElement, ScanLineBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20 15a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1a1 1 0 1 1 2 0v1c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 1 1-1M23 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zM17 3a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1a1 1 0 0 1-2 0V7a4 4 0 0 1 4-4z" />
    </IconBase>
  ))
);

ScanLineBold.displayName = 'ScanLineBold';

// Triple export pattern (lucide-react style)
export { ScanLineBold, ScanLineBold as ScanLineBoldIcon, ScanLineBold as SiScanLineBold };
export type { ScanLineBoldProps };
