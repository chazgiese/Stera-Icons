import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextQuoteFillProps = Omit<IconBaseProps, 'children'>;

const TextQuoteFill = memo(
  forwardRef<SVGSVGElement, TextQuoteFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-quote-fill" {...props}>
      <path fill="currentColor" d="M3 10.5c.83 0 1.5.67 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6c0-.83.67-1.5 1.5-1.5M21 16.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 1 0-3zM16 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextQuoteFill.displayName = 'TextQuoteFill';

// Triple export pattern (lucide-react style)
export { TextQuoteFill, TextQuoteFill as TextQuoteFillIcon, TextQuoteFill as SiTextQuoteFill };
export type { TextQuoteFillProps };
