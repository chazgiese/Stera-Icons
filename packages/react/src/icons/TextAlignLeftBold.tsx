import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignLeftBoldProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftBold = memo(
  forwardRef<SVGSVGElement, TextAlignLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM13 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignLeftBold.displayName = 'TextAlignLeftBold';

export { TextAlignLeftBold };
export type { TextAlignLeftBoldProps };
