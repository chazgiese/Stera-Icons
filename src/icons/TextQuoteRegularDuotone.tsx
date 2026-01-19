import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextQuoteRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextQuoteRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextQuoteRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-quote-duotone" {...props}>
      <path fill="currentColor" d="M3 11.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0v-6c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M21 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM16 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextQuoteRegularDuotone.displayName = 'TextQuoteRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextQuoteRegularDuotone, TextQuoteRegularDuotone as TextQuoteRegularDuotoneIcon, TextQuoteRegularDuotone as SiTextQuoteRegularDuotone };
export default TextQuoteRegularDuotone;
export type { TextQuoteRegularDuotoneProps };
