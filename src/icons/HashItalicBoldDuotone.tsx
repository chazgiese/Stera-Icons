import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashItalicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashItalicBoldDuotone = memo(
  forwardRef<SVGSVGElement, HashItalicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-italic-bold-duotone" {...props}>
      <path d="M7.98 21.22a1 1 0 0 1-1.96-.44L7.1 16h2.05zM13.98 21.22a1 1 0 0 1-1.96-.44L13.1 16h2.05zM9.58 14H7.53l.9-4h2.04zM15.58 14h-2.05l.9-4h2.04zM10.02 2.78a1 1 0 0 1 1.96.44L10.9 8H8.86zM16.02 2.78a1 1 0 0 1 1.96.44L16.9 8h-2.05z" opacity={0.4} />
        <path fill="currentColor" d="M19 14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 8a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

HashItalicBoldDuotone.displayName = 'HashItalicBoldDuotone';

// Triple export pattern (lucide-react style)
export { HashItalicBoldDuotone, HashItalicBoldDuotone as HashItalicBoldDuotoneIcon, HashItalicBoldDuotone as SiHashItalicBoldDuotone };
export type { HashItalicBoldDuotoneProps };
