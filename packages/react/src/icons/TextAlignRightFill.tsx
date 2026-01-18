import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignRightFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightFill = memo(
  forwardRef<SVGSVGElement, TextAlignRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 16.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignRightFill.displayName = 'TextAlignRightFill';

export { TextAlignRightFill };
export type { TextAlignRightFillProps };
