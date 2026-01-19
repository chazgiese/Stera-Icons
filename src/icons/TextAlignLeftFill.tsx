import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignLeftFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftFill = memo(
  forwardRef<SVGSVGElement, TextAlignLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-left-fill" {...props}>
      <path fill="currentColor" d="M17 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM13 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignLeftFill.displayName = 'TextAlignLeftFill';

// Triple export pattern (lucide-react style)
export { TextAlignLeftFill, TextAlignLeftFill as TextAlignLeftFillIcon, TextAlignLeftFill as SiTextAlignLeftFill };
export type { TextAlignLeftFillProps };
