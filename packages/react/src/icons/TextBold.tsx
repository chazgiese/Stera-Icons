import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextBoldProps = Omit<IconBaseProps, 'children'>;

const TextBold = memo(
  forwardRef<SVGSVGElement, TextBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 2a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

TextBold.displayName = 'TextBold';

// Triple export pattern (lucide-react style)
export { TextBold, TextBold as TextBoldIcon, TextBold as SiTextBold };
export type { TextBoldProps };
