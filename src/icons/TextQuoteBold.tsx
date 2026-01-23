import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextQuoteBoldProps = Omit<IconBaseProps, 'children'>;

const TextQuoteBold = memo(
  forwardRef<SVGSVGElement, TextQuoteBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-quote-bold" {...props}>
      <path fill="currentColor" d="M3 11a1 1 0 0 1 1 1v6.1a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1M21 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextQuoteBold.displayName = 'TextQuoteBold';

// Triple export pattern (lucide-react style)
export { TextQuoteBold, TextQuoteBold as TextQuoteBoldIcon, TextQuoteBold as SiTextQuoteBold };
export default TextQuoteBold;
export type { TextQuoteBoldProps };
