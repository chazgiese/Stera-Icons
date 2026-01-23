import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextQuoteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextQuoteFillDuotone = memo(
  forwardRef<SVGSVGElement, TextQuoteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-quote-fill-duotone" {...props}>
      <path fill="currentColor" d="M3 10.5c.83 0 1.5.67 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6c0-.83.67-1.5 1.5-1.5" opacity={.4} />
        <path fill="currentColor" d="M21 16.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 1 0-3zM16 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextQuoteFillDuotone.displayName = 'TextQuoteFillDuotone';

// Triple export pattern (lucide-react style)
export { TextQuoteFillDuotone, TextQuoteFillDuotone as TextQuoteFillDuotoneIcon, TextQuoteFillDuotone as SiTextQuoteFillDuotone };
export default TextQuoteFillDuotone;
export type { TextQuoteFillDuotoneProps };
