import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignJustifyFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyFill = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignJustifyFill.displayName = 'TextAlignJustifyFill';

export { TextAlignJustifyFill };
export type { TextAlignJustifyFillProps };
