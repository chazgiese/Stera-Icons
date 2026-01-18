import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignCenterRegularProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterRegular = memo(
  forwardRef<SVGSVGElement, TextAlignCenterRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19 17.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5zM17 11.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignCenterRegular.displayName = 'TextAlignCenterRegular';

export { TextAlignCenterRegular };
export type { TextAlignCenterRegularProps };
