import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextQuoteRegularProps = Omit<IconBaseProps, 'children'>;

const TextQuoteRegular = memo(
  forwardRef<SVGSVGElement, TextQuoteRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 11.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0v-6c0-.41.34-.75.75-.75M21 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM16 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextQuoteRegular.displayName = 'TextQuoteRegular';

// Triple export pattern (lucide-react style)
export { TextQuoteRegular, TextQuoteRegular as TextQuoteRegularIcon, TextQuoteRegular as SiTextQuoteRegular };
export type { TextQuoteRegularProps };
