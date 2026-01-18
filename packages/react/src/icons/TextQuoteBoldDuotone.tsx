import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextQuoteBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextQuoteBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextQuoteBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 11a1 1 0 0 1 1 1v6.1a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M21 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextQuoteBoldDuotone.displayName = 'TextQuoteBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextQuoteBoldDuotone, TextQuoteBoldDuotone as TextQuoteBoldDuotoneIcon, TextQuoteBoldDuotone as SiTextQuoteBoldDuotone };
export type { TextQuoteBoldDuotoneProps };
