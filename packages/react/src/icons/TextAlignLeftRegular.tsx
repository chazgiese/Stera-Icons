import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignLeftRegularProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftRegular = memo(
  forwardRef<SVGSVGElement, TextAlignLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM13 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignLeftRegular.displayName = 'TextAlignLeftRegular';

export { TextAlignLeftRegular };
export type { TextAlignLeftRegularProps };
