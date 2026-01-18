import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignRightBoldProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightBold = memo(
  forwardRef<SVGSVGElement, TextAlignRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 17a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignRightBold.displayName = 'TextAlignRightBold';

export { TextAlignRightBold };
export type { TextAlignRightBoldProps };
